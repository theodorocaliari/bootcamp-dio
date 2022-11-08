import React from "react";
import { Button } from "../Button/btn-component";
import {
  Wrapper,
  Container,
  Row,
  Column,
  SearchContainer,
  Menu,
  MenuRight,
  UserPicture,
  Input
} from "./header-styles";

const Header = () => {
  return (
  <>
    <Wrapper>
      <Container>
        <Row>

          <SearchContainer>
            <Input placeholder="Buscar..." />
          </SearchContainer>
          <Menu>Live Code</Menu>
          <Menu>Global</Menu>

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