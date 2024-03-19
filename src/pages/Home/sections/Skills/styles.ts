import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: fit-content;
    padding: 1.875rem;
    width: auto;
    background-color: beige;
    border-top: 3px solid black;
    border-bottom: 3px solid black;

    h1 {
        display: flex;
        justify-content: center;
        font-size: 1.625rem;
        font-weight: 700;
        margin-bottom: 1.875rem;
        color: #222;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    min-width: 230px;
    height: fit-content;
    padding: 1.25rem;
    background-color: #fff;
    border: 1px solid #bdbdbd;
    border-radius: 1.875rem;

    @media (max-width:900px) {
      flex-direction: column;
      align-items: center;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 700;
        margin-bottom: 1.875rem;
        color: #666666;
    }
`;

export const CardSkills = styled.div`
    display: flex;
    justify-content: space-between;
    /* box-sizing: border-box; */
    width: 600px;
    margin: 0 10px;
    height: fit-content;
    min-width: 241.5px;
    border: 1px solid #bdbdbd;
    border-radius: 1.875rem;

    @media (max-width: 900px) {
      width: 100%;
      margin: 20px 0;
      min-width: 210px;
    }

    h4 {
        font-size: 1.1em;
        text-transform: uppercase;
        letter-spacing: 0.25em;
        color: #fff;
        background: #231fbf;
        font-weight: 600;
        padding: 0 15px;
        margin-top: 40px;
        display: inline-flex;
    }
`;

export const SkillsContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* gap: 2px; */
  margin: 12px 28px;
`;

export const SkillsBox = styled.div`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 7fr 1fr;
`;

export const SkillName = styled.p`
  color: #333;
  font-weight: 600;
  height: 0.2rem;
`;

export const SkillValueContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10px;
  background-color: #eee;
`;

export const SkillValue = styled.div<{ value: string }>`
  position: absolute;
  width: ${props => props.value};
  height: 100%;
  background: #231fbf;
`;

export const SkillPercent = styled.p`
  color: #111;
  font-weight: 600;
  padding-left: 12px;
`;
