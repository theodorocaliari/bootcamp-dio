import { Card } from "../../components/Card/card-component";
import { UserInfo } from "../../components/UserInfo/userinfo-component";
import { Header } from "../../components/Header/header-component";
import { Container,Column,Title,TitleHighlight } from "./feed-style";

const Feed = () => {
  return(
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight>
            # Ranking top 5 da semana
          </TitleHighlight>
          <UserInfo percent={35} nome="Theodoro Caliari" image="https://github.com/theodorocaliari.png" />
        </Column>


      </Container>
    </>
  );
}

export { Feed }