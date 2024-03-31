import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center; //horizontal
  background-color: #1f1f1f;
  padding: 20px;
  width: 100%;
`;

export const Title = styled.h1`
  margin-top: 100px;
  font-size: 4.125rem;
  line-height: 1rem;
  color: white;

  @media (max-width: 405px) {
    font-size: 3rem;
  }

  @media (max-width: 300px) {
    font-size: 2.125rem;
  }
`;

export const Subtitle = styled.h2`
  margin: 0;
  color: white;
  font-size: 1.2rem;
  font-weight: lighter;
  text-align: center;

  @media (max-width: 405px) {
    font-size: 1rem;
  }

  @media (max-width: 300px) {
    font-size: 0.75rem;
  }
`;