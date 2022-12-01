import React from "react";
import {Container, NameText, Progress, UserPicture} from "../UserInfo/userinfo-style";
import { IUserInfo } from "./types";

const UserInfo = ({nome, image, percent}:IUserInfo) => {
  return(
    <>
      <Container>
        <UserPicture src={image} />
        <div>
          <NameText>
            {nome}
          </NameText>
          <Progress percentual={percent} />
        </div>
      </Container>
    </>
  );
}

export {UserInfo};