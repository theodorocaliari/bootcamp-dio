import React from "react";
import { Button } from "../Button";
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
} from "./styles";

const Header = () => {
<Wrapper>
  <Container>
    <Row>
      {/* <img src={} alt="logo da dio" /> */}
      <SearchContainer>
        <Input placeholder="Buscar..." />
      </SearchContainer>
      <Menu>Live Code</Menu>
      <Menu>Global</Menu>
      <Button title="Entrar"></Button>
      <Button title="Cadastrar"></Button>
    </Row>
    <Row>
      <MenuRight href="#">Home</MenuRight>
      <Button title="Entrar"></Button>
      <Button title="Cadastrar"></Button>
    </Row>
  </Container>
</Wrapper>
}

export { Header };