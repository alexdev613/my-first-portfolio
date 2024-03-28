// Layout.tsx

import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../../../pages/Home/sections/Footer/Footer';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1300px; /* Largura máxima do conteúdo principal */
  @media (max-width: 900px) {
    flex-direction: column; /* Altera a direção para uma pilha em telas menores */
  }
`;

const SidebarWrapper = styled.div`
  width: 320px; /* Largura máxima da sidebar */
  margin-left: 20px; /* Espaço entre a sidebar e o conteúdo principal */
  @media (max-width: 900px) {
    width: 100%; /* Ocupa a largura total em telas menores */
    margin-left: 0; /* Remove a margem esquerda em telas menores */
    margin-top: 20px; /* Adiciona margem superior em telas menores */
  }
`;

const MainContent = styled.div`
  flex: 1; /* Ocupa o espaço restante disponível */
  margin-bottom: 50px;
  margin-left: 20px;
  @media (max-width: 900px) {
    width: 100%; /* Ocupa a largura total em telas menores */
    margin-left: 0; /* Remove a margem esquerda em telas menores */
  }
`;

const FooterSpace = styled.footer`
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageContainer>
      <Header />
      <ContentWrapper>
        <MainContent>{children}</MainContent>
        <SidebarWrapper>
          olá<Sidebar />olá
        </SidebarWrapper>
      </ContentWrapper>
      <FooterSpace>
        <Footer />
      </FooterSpace>
    </PageContainer>
  );
};

export default Layout;
