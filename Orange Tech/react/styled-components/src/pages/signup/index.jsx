import { Header } from "../../components/Header/header-component";
import { Container,Title,TitleLogin,SubtitleLogin,Wrapper,Column,Row } from "./singup-style";
import { MdPerson, MdEmail, MdLock } from "react-icons/md";
import { Input } from "../../components/Input/input-component";
import { Button } from "../../components/Button/btn-component";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  email: yup.string().email("E-mail inválido").required("Campo obrigatorio"),
  password: yup.string().min(3, "No mínimo 3 caracteres").required("Campo obrigatorio"),
}).required();

const Singup = () =>{

  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return(
    <>
      <Header />
      <Container>
        <Column>
          <Title>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais rápido nas empresas mais desejadas.

          </Title>
        </Column>
        <Column>
        <TitleLogin>Comece agora grátis.</TitleLogin>
          <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
          <form>
            <Input name="nome" errorMessage={errors?.email?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson />}/>
            <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="E-mail" leftIcon={<MdEmail />}/>
            <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
            <Button title="Entrar" variant="primary" type="submit"/>
          </form>
          <Row>

          <SubtitleLogin>
            Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.
          </SubtitleLogin>
          <SubtitleLogin>
            Já tenho conta. Fazer login
          </SubtitleLogin>    
          </Row>
        </Column>

      </Container>
    </>
  );
}

export { Singup }