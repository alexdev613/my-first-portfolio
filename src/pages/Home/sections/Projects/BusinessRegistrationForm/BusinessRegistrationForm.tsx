import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
    Container,
    Content,
    DivContainer,
    BoxForm,
    Label,
    ExclusiveRowBox,
    Input,
    BoxButtons,
    SaveButton,
    CancelButton,
} from './styles';
// import { useState } from 'react';

export interface CompanyData {
    cnpj: string,
    company: string,
    email: string,
    ddiNumber: string,
    phone: string,
    address: Address,
};

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
    email: yup.string().required('Email obritagório'),
    ddiNumber: yup.string().required('DDI é obrigatório'),
    phone: yup.string().required('Telefone obrigatório'),
    address: yup.object().shape({
        cep: yup.string().required('CEP obrigatório'),
        street: yup.string().required('Endereço é obrigatório'),
        number: yup.string().required('Número é obrigatório'),
        complement: yup.string().required('Complemento é obrigatório'),
        neighborhood: yup.string().required('Bairro é obrigatório'),
        state: yup.string().required('Estado é obrigatório'),
        city: yup.string().required('Cidade é obrigatória'),
    }),
});

const BusinessRegistrationForm: React.FC<BusinessRegistrationFormProps> = ({ onAddCompany }) => {
    // Estado para armazenar os dados da empresa
    // const [companyData, setCompanyData] = useState<CompanyData[]>([]);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<CompanyData>({
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
            
            // Adicionar os novos dados ao estado de companyData
            // setCompanyData([...companyData, data]);
            
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
                                // name='company'
                                placeholder='Alex Heisenberg Corp.'
                                {...register('company', {required: true})}
                                style={{ borderColor: errors.company ? 'red': '' }}
                            />
                            {errors.company?.type === 'required' && (
                                <p style={{ color: 'red', bottom: '0px'}}>{errors.company.message}</p>
                            )}
                        </BoxForm>
                        <BoxForm>
                            <Label>CNPJ*</Label>
                            <Input
                                type='text'
                                id='cnpj'
                                // name='cnpj'
                                maxLength={18}
                                placeholder='99.999.999/0001-99'
                                {...register('cnpj', { required: true})}
                                style={{ borderColor: errors.cnpj ? 'red': '' }}
                            />
                            {errors.cnpj?.type === 'required' && (
                                <p style={{ color: 'red' , bottom: '0px'}}>{errors.cnpj.message}</p>
                            )}
                        </BoxForm>
                    </DivContainer>

                    <DivContainer>
                        <BoxForm>
                            <Label>E-mail*</Label>
                            <Input
                                type='email'
                                id='email'
                                // name='email'
                                placeholder='alex.heisenberg@geekblog.com'
                                {...register('email', {required: true})}
                                style={{ borderColor: errors.email ? 'red' : '' }}
                            />
                            <em style={{marginTop: '4px', marginLeft: '16px', fontSize: '12px', fontWeight: '400'}}>
                                É para este e-mail que vamos enviar as confirmações de reserva*
                            </em>
                            {errors.email?.type === 'required' && (
                                <p style={{ color: 'red', bottom: '16px' }}>{errors.email.message}</p>
                            )}
                        </BoxForm>
                        <BoxForm>
                            <Label>Telefone*</Label>
                            <ExclusiveRowBox>
                                <BoxForm>
                                    <select
                                        id='ddiNumber'
                                        // name='ddiNumber'
                                        className='DDI'
                                        {...register('ddiNumber', {required:'true'})}
                                        style={{ borderColor: errors.ddiNumber ? 'red': '' }}
                                    >
                                        <option value=''>
                                            --
                                        </option>
                                        <option value={+55}>+55</option>
                                    </select>
                                    {errors.ddiNumber?.type === 'required' && (
                                        <p style={{color: 'red', bottom: '-14px'}}>{errors.ddiNumber.message}</p>
                                    )}
                                </BoxForm>
                                <BoxForm>
                                    <Input
                                        type='text'
                                        id='phone'
                                        // name='phone'
                                        className='Phone'
                                        maxLength={15}
                                        placeholder='(81) 9 9999-9999'
                                        {...register('phone', {required: 'true'})}
                                        style={{ borderColor: errors.phone ? 'red': '' }}
                                    />
                                    {errors.phone?.type === 'required' && (
                                        <p style={{ color: 'red', bottom: '4px' }}>{errors.phone.message}</p>
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
                                style={{ borderColor: errors.address?.cep ? 'red' : '' }}
                            />
                            <span>
                                <a
                                    href="https://buscacepinter.correios.com.br/app/endereco/index.php"
                                    target='_blank'
                                    rel='noreferrer'
                                    style={{color: '#007a6c', marginLeft: '320px'}}
                                >
                                    Pesquisar CEP
                                </a>
                            </span>
                            {errors.address?.cep?.type === 'required' && (
                                <p style={{ color: 'red', bottom: '18px' }}>{errors.address.cep.message}</p>
                            )}
                        </BoxForm>
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
                                <p style={{ color: 'red', bottom: '18px' }}>{errors.address.street.message}</p>
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
                                <p style={{ color: 'red', bottom: '2px' }}>{errors.address.number.message}</p>
                            )}
                        </BoxForm>
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
                                <p style={{ color: 'red', bottom: '-2px' }}>{errors.address.complement.message}</p>
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
                                <p style={{ color: 'red', bottom: '-2px' }}>{errors.address.neighborhood.message}</p>
                            )}
                        </BoxForm>
                        <BoxForm>
                            <Label>Estado*</Label>
                            <ExclusiveRowBox>
                                <select
                                    id='state'
                                    className='UF'
                                    {...register('address.state', {required:'true'})}
                                    style={{ borderColor: errors.address?.state ? 'red': '' }}
                                >
                                    <option value=""> </option>
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
                                    <p style={{ color: 'red', bottom: '-19px'}}>{errors.address.state.message}</p>
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
                                    <p style={{ color: 'red', bottom: '-2px' }}>{errors.address.city.message}</p>
                                )}
                        </BoxForm>
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