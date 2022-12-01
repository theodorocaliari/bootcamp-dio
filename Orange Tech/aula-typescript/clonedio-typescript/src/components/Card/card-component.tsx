import React from 'react';
import { FiThumbsUp } from "react-icons/fi";
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture
} from "./card-styles";
import  banner  from "../../../src/images/banner.jpg";

const Card = () => {
  return(
    <>
      <CardContainer>
        <ImageBackground background={{ image: banner }}/>
        <Content>
          <UserInfo>
            <UserPicture src="https://avatars.githubusercontent.com/u/1951012" />
            <div>
              <h4>Nome Usuario</h4>
              <p>Há 8 minutos</p>
            </div>
          </UserInfo>
          <PostInfo>
            <h4>Projeto para curso de HTML e CSS</h4>
            <p>Projeto feito no curso de html e css no bootcamp da dio do Global avanade... <strong>Ver Mais</strong></p>
          </PostInfo>
          <HasInfo>
            <h4>
              #HTML #CSS #Javascript
            </h4>
            <p>
              <FiThumbsUp /> 10
            </p>
          </HasInfo>
        </Content>

      </CardContainer>
    </>
  )
}

export { Card };