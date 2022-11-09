import { Link } from 'react-router-dom';
import { MdEmail, MdLock } from "react-icons/md";
import { Header } from "../../components/Header/header-component";
import { Input } from "../../components/Input/input-component";
import { Button } from "../../components/Button/btn-component";

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "../login/login-style";

const Login = () => {
  return (
  <>
    <Header />
      <Container>
        <Column>
          <Title>A plataforma para voce aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
        <Wrapper>
          <TitleLogin>Faça seu cadastro.</TitleLogin>
          <SubtitleLogin>Faça seu login e make de change._</SubtitleLogin>
          <form action="">
            <Input placeholder="E-mail" leftIcon={<MdEmail />}/>
            <Input placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="primary" />
          </form>
          <Row>
            <EsqueciText>Esqueci minha Senha</EsqueciText>
            <CriarText>Criar Conta</CriarText>
          </Row>
        </Wrapper>

        </Column>
      </Container>
    
  </>
  )
};


export { Login };