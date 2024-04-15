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
          <TableHeaderCell onlyWeb>CNPJ</TableHeaderCell>
          <TableHeaderCell>E-mail</TableHeaderCell>
          <TableHeaderCell>Telefone</TableHeaderCell>
          <TableHeaderCell onlyWeb>Endereço</TableHeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {companyData.map((company, index) => (
          <TableRow key={index}>
            <TableDataCell minWidth="140px">{company.company}</TableDataCell>
            <TableDataCell onlyWeb minWidth="140px">{company.cnpj}</TableDataCell>
            <TableDataCell>{company.email}</TableDataCell>
            <TableDataCell minWidth="140px">(+{company.ddiNumber}) {company.phone}</TableDataCell>
            <TableDataCell onlyWeb minWidth="280px">
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
