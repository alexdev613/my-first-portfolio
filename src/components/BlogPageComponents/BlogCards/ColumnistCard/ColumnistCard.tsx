import { BoxInfo, ColumnistsName, Container, Content, ImageCharacter } from "./styles";

const ColumnistCard = () => {
  return (
    <Container>
      <Content>
        <ImageCharacter />
        <BoxInfo>
          <ColumnistsName>Alex Nascimento</ColumnistsName>
        </BoxInfo>
      </Content>
    </Container>
  )
}

export default ColumnistCard;