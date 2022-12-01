import React from 'react';
import { ButtonContainer } from "./btn-styles";
import { IButton } from "./types";

const Button = ({title, variant="secondary", onClick}:IButton) => {
  return (
    <ButtonContainer variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  )
}

export { Button };