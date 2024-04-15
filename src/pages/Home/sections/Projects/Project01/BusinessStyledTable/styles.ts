import styled from "styled-components";

interface TableDataCellProps {
  minWidth?: string; // Propriedade opcional para minWidth
  onlyWeb?: boolean;
}

interface TableHeaderCellProps {
  onlyWeb?: boolean;
}

export const TableContainer = styled.table`
  width: 100%;
  white-space: wrap;
  font-family: "Roboto", serif;
  font-size: 0.875rem;
  color: #4b5563;
  border-radius: 0.5rem;
  margin-top: 2rem;
  
  @media (max-width: 720px) {
    font-size: 0.75rem;
  }
`;

export const TableHeader = styled.thead`
  font-size: 0.675rem;
  color: #f8fafc;
  background-color: #1a202c;
  text-transform: uppercase;
`;

export const TableHeaderCell = styled.th<TableHeaderCellProps>`
  padding: 1rem 0.75rem;
  font-weight: 500;
  font-size: 0.75rem;

  @media (max-width: 720px) {
    display: ${(props) => (props.onlyWeb ? 'none': 'table-cell')};
  }
`;

export const TableBody = styled.tbody``;

export const TableRow = styled.tr`
  background-color: #ffffff;
  border-bottom: 1px solid #d2d6dc;
`;

export const TableDataCell = styled.td<TableDataCellProps>`
  padding: 1rem 0.5rem;
  color: #6b7280;
  text-align: center;
  word-wrap: break-word;

  // aplica o minWidth se a prop for fornecida
  ${({ minWidth }) => minWidth && `min-width: ${minWidth};`}

  @media (max-width: 720px) {
    display: ${(props) => (props.onlyWeb ? 'none': 'table-cell')};
  }
`;
