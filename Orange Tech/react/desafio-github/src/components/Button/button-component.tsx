import React from 'react';
import { ButtonContainer } from './button-styles';

interface IButton{
  label?: string;
  onClick: () => void;
}

export default function Button({label, onClick}:IButton){
  return(
    <ButtonContainer onClick={onClick}>
      {label}
    </ButtonContainer>
  )
}
