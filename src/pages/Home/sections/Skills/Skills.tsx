import React from 'react';
import {
  SkillsContainer,
  SkillsBox,
  SkillName,
  SkillValueContainer,
  SkillValue,
  Container,
  Content,
  CardSkills,
  SkillPercent,
} from './styles';

interface SkillProps {
  name: string;
  value: string;
  percent: string;
}

const Skill: React.FC<SkillProps> = ({ name, value, percent }) => {
  return (
    <>
      <SkillName>{name}</SkillName>
      <SkillsBox>
      <SkillValueContainer>
        <SkillValue value={value} />
      </SkillValueContainer>
      <SkillPercent>{percent}</SkillPercent>
    </SkillsBox>
    </>
  );
};

const Skills: React.FC = () => {
  return (
    <Container>
        <h1>Habilidades/Skills</h1>
        <Content>
            <CardSkills>
              <SkillsContainer>
                  <Skill name="Html" value="94%" percent="94%" />
                  {/* Adicione mais Skills aqui conforme necessário */}
                  <Skill name="CSS" value="87%" percent='87%'/>
                  <Skill name="JavaScript" value="97%" percent='97%' />
                  <Skill name="TypeScript" value="96%" percent="96%"/>
                  <Skill name="Styled-Components" value="87%" percent="87%" />
                  <Skill name="Tailwind" value="67%" percent="67%" />
                  <Skill name="Figma" value="58%" percent="58%" />
              </SkillsContainer>
            </CardSkills>

            <CardSkills>
              <SkillsContainer>
                  <Skill name="React" value="82%" percent="82%" />
                  <Skill name="Next" value="33%" percent='33%'/>
                  <Skill name="Vue" value="10%" percent="10%" />
                  <Skill name="Componentização" value="96%" percent="96%"/>
                  <Skill name="Material UI" value="66%" percent='66%' />
                  <Skill name="Estrutura de Dados" value="70%" percent="70%" />
                  <Skill name="Git" value="63%" percent="63%" />
              </SkillsContainer>
            </CardSkills>

            <CardSkills>
              <SkillsContainer>
                  <Skill name="Comunicação Técnica" value="96%" percent="96%"/>
                  <Skill name="Assertividade" value="94%" percent="94%" />
                  <Skill name="Acessibilidade" value="87%" percent='87%'/>
                  <Skill name="Clean Code" value="97%" percent='97%' />
                  <Skill name="Resolução de Problemas" value="73%" percent="73%" />
                  <Skill name="Organização" value="76%" percent="76%"/>
                  <Skill name="Criatividade" value="82%" percent="82%"/>
              </SkillsContainer>
            </CardSkills>
        </Content>
    </Container>
  );
};

export default Skills;
