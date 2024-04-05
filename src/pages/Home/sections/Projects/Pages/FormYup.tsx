import React, { useState } from "react";
import BusinessRegistrationForm, { CompanyData } from "../BusinessRegistrationForm/BusinessRegistrationForm";
import BusinessStyledTable from "../BusinessStyledTable/BusinessStyledTable";
import { BodyPage, Title } from "./styles";
import { Link } from "react-router-dom";

const FormYup: React.FC = () => {
    const [companyData, setCompanyData] = useState<CompanyData[]>([]); // Estado para armazenar os dados das empresas

    const handleAddCompany = (newCompany: CompanyData) => {
        setCompanyData([...companyData, newCompany]); // Adiciona uma nova empresa aos dados existentes
    };

    return (
        <BodyPage>
            <Title>Registro de Empresa</Title>
            <BusinessRegistrationForm onAddCompany={handleAddCompany}/>

            <Title>Tabela de Informações</Title>
            <BusinessStyledTable companyData={companyData} /> {/* Passar os dados da empresa como propriedade */}

            <div style={{width: '100%', marginTop: '400px', textAlign: 'center'}}>
                <Link to={"/"} style={{textDecoration: 'underline', color: 'black', fontSize: '20px'}}><p>Voltar pra Home</p></Link>
                <p>
                    Esse é um pequeno escopo do projeto iniciado em 02/04/2024, ainda iremos fazer a base de dados e o backend
                    dessa parte da aplicação! Mas como estamos com outras demandas fizemos algo simples, para mostrar parte de
                    nossas habilidades.
                </p>
            </div>

        </BodyPage>
    )
}

export default FormYup;