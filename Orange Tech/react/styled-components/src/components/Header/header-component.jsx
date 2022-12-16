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
  Logo,
  UserPicture,
  Column
} from "./header-styles";

const Header = ({autenticado}) => {
  return (
  <>
    <Wrapper>
      <Container>
        <Row>
          <Logo src={logoDio} alt="Logo DIO"/>
          {autenticado ? (
            <>
              <SearchContainer>
                <Input placeholder="Buscar..." />
              </SearchContainer>
              <Menu href="#">Live Code</Menu>
              <Menu href="#">Global</Menu>
            </>
          ) : null}

        </Row>
        <Row>

          {autenticado ? (
            <>
            <UserPicture src="https://github.com/theodorocaliari.png" />
            </>
          ) : 
          
          <>
            <MenuRight href="/">Home</MenuRight>
            <Button title="Entrar"></Button>
            <Button title="Cadastrar"></Button>
          </> }

        </Row>
      </Container>
    </Wrapper>
  </>
  )
}

export { Header };