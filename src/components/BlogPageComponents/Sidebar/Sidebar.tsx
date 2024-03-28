import styled from 'styled-components';

const SidebarWrapper = styled.div`
  width: 320px; /* Largura máxima da sidebar */
  height: 100vh; /* Altura total da tela */
  position: fixed;
  top: 0;
  right: 0px;
  background-color: #333; /* Cor de fundo da sidebar */
  z-index: 1; /* Definir um valor positivo para garantir que a sidebar esteja na parte superior */
  transition: transform 0.3s ease; /* Adiciona uma transição suave */

  h1 {
    color: white;
  }
  @media (max-width: 900px) {
    width: 100%; /* Ocupa a largura total da tela quando a largura da tela for menor que 900px */
    height: 50px; /* Altura reduzida */
    transform: translateY(-100%); /* Esconde a sidebar acima da tela */
  }
`;


const Sidebar = () => {
  return (
    <SidebarWrapper><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h1>white</h1>
    </SidebarWrapper>
  );
};

export default Sidebar;
