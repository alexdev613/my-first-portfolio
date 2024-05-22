import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { formatCep, handleKeyCepPress, isCompleteCEP } from '../../../../../../utils/cepUtils';
import { isValidEmail } from '../../../../../../utils/emailUtils';

import {
    Container,
    Content,
    DivContainer,
    BoxForm,
    Label,
    ExclusiveRowBox,
    MessageError,
    Input,
    BoxButtons,
    SaveButton,
    CancelButton,
} from './styles';

import { toast } from 'react-toastify';

export interface CompanyData {
    cnpj: string,
    company: string,
    email: string,
    ddiNumber: string,
    phone: string,
    address: Address,
}

export interface Address {
    cep: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    state: string;
    city: string;
}

interface BusinessRegistrationFormProps {
    onAddCompany: (newCompany: CompanyData) => void;
}

const schema = yup.object().shape({
    cnpj: yup.string().required('CNPJ obrigatório!'),
    company: yup.string().required('Nome da empresa é obrigatório!'),
    email: yup
        .string()
        .required('Email obritagório')
        .test('email-validation', 'Email inválido', (value) => isValidEmail(value ?? '')),
    ddiNumber: yup.string().required('DDI é obrigatório'),
    phone: yup.string().required('Telefone obrigatório'),
    address: yup.object().shape({
        cep: yup.
          string()
          .required('CEP obrigatório')
          .test('cep-validation', 'CEP inválido', (value) => {
            const formattedValue = formatCep(value ?? '');
            return formattedValue.length === 9;
          }),
        street: yup.string().required('Endereço é obrigatório'),
        number: yup.string().required('Número é obrigatório'),
        complement: yup.string().required('Complemento é obrigatório'),
        neighborhood: yup.string().required('Bairro é obrigatório'),
        state: yup.string().required('Estado é obrigatório'),
        city: yup.string().required('Cidade é obrigatória'),
    }),
});

const BusinessRegistrationForm: React.FC<BusinessRegistrationFormProps> = ({ onAddCompany }) => {
    
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        setFocus,
        setError,
        clearErrors,
        getValues,
        reset,
    } = useForm<CompanyData, Address>({
        resolver: yupResolver(schema),
        defaultValues: {
            cnpj: '',
            company: '',
            email: '',
            ddiNumber: '',
            phone: '',
            address: {
                cep: '',
                street: '',
                number: '',
                complement: '',
                neighborhood: '',
                state: '',
                city: '',
            },
        },
    });

    const onSubmit: SubmitHandler<CompanyData> = async (data) => {
        try {
            //validar os dados de acordo com o schema definido pelo yup
            await schema.validate(data, { abortEarly: false });

            // Adicionar dados da empresa ao serviço simulado
            onAddCompany(data); // Adiciona a nova empresa aos dados

            // Se a validação for bem sucedida, exibir os dados no console
            console.log('Dados do formulário:', data);
            
            // Limpar o formulário após o envio bem-sucedido
            reset(); // Limpa o formulário
        } catch (validationErrors) {
            // Se houver erros de validação, exibir os erros no console e no formulário
            console.error('Erros de validação:', validationErrors);
        }
    };

    const handelCancel = () => {
        reset();
    }

    // Trabalhando com a API ViaCEP e colocando uma lógica para o campo cep e preenchimento de endereço:

    const [hasCepError, setHasCepError] = useState(false);

    const checkCEP = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const cep = event.target.value.replace(/\D/g, '');
      if (cep.length !== 8) {
        return;
      }

      try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        if (data.erro) {
          throw new Error('CEP inexistente ou inválido');
        }

        setValue('address.street', data.logradouro);
        setValue('address.neighborhood', data.bairro);
        setValue('address.city', data.localidade);
        setValue('address.state', data.uf);
        setFocus('address.number');

        if (hasCepError) {
          clearErrors('address.cep');
          setHasCepError(false);
        }
      } catch (err) {
        console.log(`CEP inexistente\n${cep} \n${err}`);
        setError('address.cep', { type: 'invalid', message: 'CEP inválido' });
        setValue('address.street', '');
        setValue('address.number', '');
        setValue('address.complement', '');
        setValue('address.neighborhood', '');
        setValue('address.state', '');
        setValue('address.city', '');

        if (!hasCepError) {
          setHasCepError(true);
          toast.error('CEP inválido', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setValue('address.cep', '');
          setHasCepError(false);
        }
      }
    }

    function handleBlurpCep(event: React.ChangeEvent<HTMLInputElement>) {
      const cep = event.target.value;
      if (!cep) {
        return;
      }

      if (!isCompleteCEP(cep)) {
        setError('address.cep', {
          type: 'cep-incomplete',
          message: 'O CEP está incompleto***',
        });
        toast.error('CEP incompleto', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        // alert('CEP Incompleto');
        return;
      }
      clearErrors('address.cep');
    }

    const handleAddressChange = (field: string, value: string) => {
        setValue('address', {
          ...getValues('address'),
          [field]: value,
        });
      };


    return (
        <Container>
            <Content>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h1>Dados Gerais</h1>
                    <DivContainer>
                        <BoxForm>
                            <Label>Empresa*</Label>
                            <Input
                                type='text'
                                id='company'
                                placeholder='Alex Heisenberg Corp.'
                                {...register('company', {required: true})}
                                style={{ borderColor: errors.company ? 'red': '' }}
                            />
                            {errors.company?.type === 'required' && (
                                <MessageError>{errors.company.message}</MessageError>
                            )}
                        </BoxForm>
                        <BoxForm>
                            <Label>CNPJ*</Label>
                            <Input
                                type='text'
                                id='cnpj'
                                maxLength={18}
                                placeholder='99.999.999/0001-99'
                                {...register('cnpj', { required: true})}
                                style={{ borderColor: errors.cnpj ? 'red': '' }}
                            />
                            {errors.cnpj?.type === 'required' && (
                                <MessageError>{errors.cnpj.message}</MessageError>
                            )}
                        </BoxForm>
                    </DivContainer>

                    <DivContainer>
                        <BoxForm>
                            <Label>E-mail*</Label>
                            <Input
                                type='email'
                                id='email'
                                placeholder='alex.heisenberg@geekblog.com'
                                {...register('email', {required: true})}
                                style={{ borderColor: errors.email ? 'red' : '' }}
                            />
                            <em style={{marginTop: '4px', marginLeft: '12px', fontSize: '10px', fontWeight: '400'}}>
                                É para este e-mail que vamos enviar as confirmações de reserva*
                            </em>
                            {errors.email?.type === 'required' && (
                                <MessageError className='pEmail'>{errors.email.message}</MessageError>
                            )}
                        </BoxForm>
                        <BoxForm>
                            <Label>Telefone*</Label>
                            <ExclusiveRowBox>
                                <BoxForm>
                                    <select
                                        id='ddiNumber'
                                        className='DDI'
                                        {...register('ddiNumber', {required:'true'})}
                                        style={{ borderColor: errors.ddiNumber ? 'red': '' }}
                                    >
                                        <option selected disabled value=''>
                                            
                                        </option>
                                        <option value={+1}>+1</option>
                                        <option value={+54}>+54</option>
                                        <option value={+55}>+55</option>
                                    </select>
                                    {errors.ddiNumber?.type === 'required' && (
                                        <MessageError className='pDdi'>{errors.ddiNumber.message}</MessageError>
                                    )}
                                </BoxForm>
                                <BoxForm>
                                    <Input
                                        type='text'
                                        id='phone'
                                        className='Phone'
                                        maxLength={15}
                                        placeholder='(81) 9 9999-9999'
                                        {...register('phone', {required: 'true'})}
                                        style={{ borderColor: errors.phone ? 'red': '' }}
                                    />
                                    {errors.phone?.type === 'required' && (
                                        <MessageError className='pPhone'>{errors.phone.message}</MessageError>
                                    )}
                                </BoxForm>
                            </ExclusiveRowBox>
                        </BoxForm>
                    </DivContainer>

                    <DivContainer>
                        <BoxForm>
                            <Label>CEP*</Label>
                            <Input
                                type='text'
                                id='cep'
                                maxLength={9}
                                placeholder='00000-000'
                                {...register('address.cep', {required: 'true'})}
                                onChange={(event) => {
                                  const formattedValue = formatCep(event.target.value)
                                  setValue('address.cep', formattedValue, { shouldValidate: true });
                                  handleAddressChange('cep', formattedValue);
                                  checkCEP(event);
                                }}
                                onBlur={(event) => {
                                  handleBlurpCep(event);
                                  checkCEP(event);
                                }}
                                onKeyPress={handleKeyCepPress}
                                style={{ borderColor: errors.address?.cep ? 'red' : '' }}
                            />
                            <span className='linkCep'>
                                <a
                                    href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                    Pesquisar CEP
                                </a>
                            </span>
                            {errors.address?.cep?.type === 'required' && (
                                <MessageError className='pCep'>{errors.address.cep.message}</MessageError>
                            )}
                        </BoxForm>
                        <ExclusiveRowBox>
                            <BoxForm>
                                <Label>Endereço (Logradouro)*</Label>
                                <Input
                                    type='text'
                                    id='street'
                                    className='street'
                                    placeholder='Rua: Firmino Gonzales'
                                    {...register('address.street', {required: 'true'})}
                                    style={{ borderColor: errors.address?.street ? 'red' : '' }}
                                />
                                {errors.address?.street?.type === 'required' && (
                                    <MessageError className='pStreet'>{errors.address.street.message}</MessageError>
                                )}
                            </BoxForm>
                            <BoxForm>
                                <Label>Número*</Label>
                                <Input
                                    type='text'
                                    id='number'
                                    className='number'
                                    placeholder='55'
                                    {...register('address.number', {required: 'true'})}
                                    style={{ borderColor: errors.address?.number ? 'red' : '' }}
                                />
                                {errors.address?.number?.type === 'required' && (
                                    <MessageError className='pNumber'>{errors.address.number.message}</MessageError>
                                )}
                            </BoxForm>
                        </ExclusiveRowBox>
                    </DivContainer>

                    <DivContainer>
                        <BoxForm>
                            <Label>Complemento*</Label>
                            <Input
                                type='text'
                                id='complement'
                                className='complement'
                                placeholder='Ex.: Bloco 01. Apto.: 101.'
                                {...register('address.complement', {required: 'true'})}
                                style={{ borderColor: errors.address?.complement ? 'red' : '' }}
                            />
                            {errors.address?.complement?.type === 'required' && (
                                <MessageError>{errors.address.complement.message}</MessageError>
                            )}
                        </BoxForm>
                    </DivContainer>

                    <DivContainer>
                        <BoxForm>
                            <Label>Bairro*</Label>
                            <Input
                                type='text'
                                id='neighborhood'
                                placeholder='Centro'
                                {...register('address.neighborhood', {required: 'true'})}
                                style={{ borderColor: errors.address?.neighborhood ? 'red' : '' }}
                            />
                            {errors.address?.neighborhood?.type === 'required' && (
                                <MessageError>{errors.address.neighborhood.message}</MessageError>
                            )}
                        </BoxForm>
                        <ExclusiveRowBox>
                            <BoxForm>
                                <Label>Estado*</Label>

                                <ExclusiveRowBox>
                                    <select
                                        id='state'
                                        className='UF'
                                        {...register('address.state', {required:'true'})}
                                        style={{ borderColor: errors.address?.state ? 'red': '' }}
                                    >
                                        <option selected disabled value="">Selecione</option>

                                        <option value="AC">AC</option>
                                        <option value="AL">AL</option>
                                        <option value="AP">AP</option>
                                        <option value="AM">AM</option>
                                        <option value="BA">BA</option>
                                        <option value="CE">CE</option>
                                        <option value="DF">DF</option>
                                        <option value="ES">ES</option>
                                        <option value="GO">GO</option>
                                        <option value="MA">MA</option>
                                        <option value="MT">MT</option>
                                        <option value="MS">MS</option>
                                        <option value="MG">MG</option>
                                        <option value="PA">PA</option>
                                        <option value="PB">PB</option>
                                        <option value="PR">PR</option>
                                        <option value="PE">PE</option>
                                        <option value="PI">PI</option>
                                        <option value="RJ">RJ</option>
                                        <option value="RN">RN</option>
                                        <option value="RS">RS</option>
                                        <option value="RO">RO</option>
                                        <option value="RR">RR</option>
                                        <option value="SC">SC</option>
                                        <option value="SP">SP</option>
                                        <option value="SE">SE</option>
                                        <option value="TO">TO</option>
                                    </select>
                                </ExclusiveRowBox>
                                    {errors.address?.state?.type === 'required' && (
                                        <MessageError>{errors.address.state.message}</MessageError>
                                    )}
                            </BoxForm>
                            <BoxForm>
                                <Label>Cidade*</Label>
                                <ExclusiveRowBox>
                                    <Input
                                        type='text'
                                        id='city'
                                        className='City'
                                        placeholder='Caruaru'
                                        {...register('address.city', {required: 'true'})}
                                        style={{ borderColor: errors.address?.city ? 'red' : '' }}
                                    />
                                </ExclusiveRowBox>
                                    {errors.address?.city?.type === 'required' && (
                                        <MessageError className='pCity'>{errors.address.city.message}</MessageError>
                                    )}
                            </BoxForm>
                        </ExclusiveRowBox>
                    </DivContainer>

                    <BoxButtons>
                        <CancelButton type='button' onClick={handelCancel}>Cancaler</CancelButton>
                        <SaveButton type='submit'>Salvar</SaveButton>
                    </BoxButtons>
                </form>
            </Content>

        </Container>
    )
}

export default BusinessRegistrationForm;
