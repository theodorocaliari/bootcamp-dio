import React from "react";
import logoDio  from "../../images/logo.svg";
import { Button } from "../Button/btn-component";
import {
  Wrapper,
  Container,
  Row,
  SearchContainer,
  Menu,
  MenuRight,
  Input,
  Logo
} from "./header-styles";

const Header = () => {
  return (
  <>
    <Wrapper>
      <Container>
        <Row>
          <Logo src={logoDio} alt="Logo DIO"/>
          <SearchContainer>
            <Input placeholder="Buscar..." />
          </SearchContainer>
          <Menu href="#">Live Code</Menu>
          <Menu href="#">Global</Menu>
        </Row>
        <Row>
          <MenuRight href="#">Home</MenuRight>
          <Button title="Entrar"></Button>
          <Button title="Cadastrar"></Button>
        </Row>
      </Container>
    </Wrapper>
  </>
  )
}

export { Header };