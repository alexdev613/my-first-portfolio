import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #232323;
  color: #fff;
  padding: 3.6rem 0;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  width: 100%;
  padding: 0 1rem;
  margin-bottom: 2rem;
  border: 1px solid black;
  display: flex;
  flex-direction: column;

  @media (min-width: 200px) {
    width: 100%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
  }

  @media (min-width: 600px) {
    width: 50%;
  }

  @media (min-width: 900px) {
    width: 25%;
    align-items: normal;
    text-align: justify;
  }
`;

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

export const Menu = styled.ul`
  list-style: none;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
`;

export const CustomizedLink = styled.a<{
    textDecoration: string,
    color: string,
    fontSize: string
  }>`
    /* color: #fff; */
    font-size: ${props => props.fontSize};
    color: ${props => props.color};
    text-decoration: ${props => props.textDecoration};
    transition: color 0.3s;

    &:hover {
      color: #ccc;
    }
`;

export const Image = styled.img`
  max-width: 100%;
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const SocialsList = styled.div`
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 360px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    
  }
`;

export const SocialIcon = styled.div`
  width: 35px;
  height: 35px;
  padding-top: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 35px;
  background: #ddd;
  margin: 10px;
  border-radius: 5px;
  cursor: pointer;
  transition: background .3s linear;

  &:hover {
    background: #444;
  }
`;

export const IconLink = styled.a`
    color: #000;
    font-size: 1.5rem;
    transition: color .3s linear;

    &:hover {
        color: #fff;
    }
`;

export const Copyright = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    user-select: none; // não deixa copiar o texto escrito! Só por charme

    span {
        color: #fff;
        font-size: 0.925rem;
        margin: 5px;
        font-weight: 500;
    }

    p {
      padding: 0 1.2rem;
      color: #eee;
      font-size: 0.825rem;
    }
`;

export const GoToTop = styled.div`
  position: absolute;
  background-color:#465975;
  width: 72px;
  padding-top: 8px;
  color: white;
  height: "57px";
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
  left: 65px;
  margin: 0px;
  padding: 10px;
  height: 57px;

  a {
    color: inherit; // vai herdar a cor do pai direto se não tiver cor definida no pai direto, herdará de outro pai
    font-weight: 900;
    text-decoration: none;
  }

  @media (max-width: 400px) {
    left: 25px;
  }
`;
