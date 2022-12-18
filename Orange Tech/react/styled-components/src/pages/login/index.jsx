import { Link, useNavigate } from 'react-router-dom';
import { MdEmail, MdLock } from "react-icons/md";
import { Header } from "../../components/Header/header-component";
import { Input } from "../../components/Input/input-component";
import { Button } from "../../components/Button/btn-component";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper} from "../login/login-style";

import { api } from "../../services/api";

const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatorio"),
  password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatorio"),
}).required();

const Login = () => {
  const navigate = useNavigate();

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });
  
  const onSubmit = async formData => {
    try{
      const { data } = await api.get(`users?email=${formData.email}&senha=${formData.password}`);
      if(data.length === 1){
        navigate("/feed");
      }
      else{
        alert("Email ou senha inválido.");
      }
    }
    catch{
      alert("Houve um erro, tente novamente.")
    }
  };

  return (
  <>
    <Header />
      <Container>
        <Column>
          <Title>A plataforma para voce aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.</Title>
        </Column>
        <Column>
          <TitleLogin>Faça seu cadastro.</TitleLogin>
          <SubtitleLogin>Faça seu login e make de change._</SubtitleLogin>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="primary" type="submit"/>
          </form>
          <Row>
            <EsqueciText>Esqueci minha Senha</EsqueciText>
            <a href="/singup"><CriarText>Criar Conta</CriarText></a>
          </Row>

        </Column>
      </Container>
    
  </>
  )
};


export { Login };