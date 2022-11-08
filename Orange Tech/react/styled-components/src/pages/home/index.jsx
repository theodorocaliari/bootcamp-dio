import { Link } from "react-router-dom";
import { Button } from "../../components/Button/btn-component";
import { Header } from "../../components/Header/header-component";
//import imgBanner from "../../images/banner.png";

import { Container, Title, TextContent, TitleHighlight } from "./home-style";

const Home = () => {
  return(
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight><br />
            o seu futuro global agora!
          </Title>
          <TextContent>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em continuidade com os melhores experts.</TextContent>
          <TextContent>
            <Button variant="primary" title="Começar agora" />
          </TextContent>
        </div>
        <div>
          <img src="{imgBanner}" alt="banner" />
        </div>

        
      </Container>

    </>
  )
}

export { Home }

