import React from "react";
import { CompanyData } from "../BusinessRegistrationForm/BusinessRegistrationForm";
import {
    TableBody,
    TableContainer,
    TableDataCell,
    TableHeader,
    TableHeaderCell,
    TableRow
} from "./styles";

interface BusinessStyledTableProps {
  companyData: CompanyData[];
}
// Componente BusinessStyledTable tipado
const BusinessStyledTable: React.FC<BusinessStyledTableProps> = ({ companyData }) => {
   
  return (
    <TableContainer>
      <TableHeader>
        <tr>
          <TableHeaderCell>Nome da Empresa</TableHeaderCell>
          <TableHeaderCell>CNPJ</TableHeaderCell>
          <TableHeaderCell>E-mail</TableHeaderCell>
          <TableHeaderCell>Telefone</TableHeaderCell>
          <TableHeaderCell>Endereço</TableHeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {companyData.map((company, index) => (
          <TableRow key={index}>
            <TableDataCell>{company.company}</TableDataCell>
            <TableDataCell>{company.cnpj}</TableDataCell>
            <TableDataCell>{company.email}</TableDataCell>
            <TableDataCell>{company.phone}</TableDataCell>
            <TableDataCell minWidth="360px">
              {`${company.address.street},
              ${company.address.number},
              ${company.address.complement},
              ${company.address.neighborhood},
              ${company.address.city} - ${company.address.state},
              ${company.address.cep}`}
           </TableDataCell>
          </TableRow>
        ))}
      </TableBody>
    </TableContainer>
  );
};

export default BusinessStyledTable;
