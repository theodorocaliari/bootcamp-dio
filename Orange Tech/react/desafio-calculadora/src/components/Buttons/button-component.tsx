import { ButtonContainer } from "./button-styled";

interface IButton {
  label?: string;
  disabled?: string;
  onClick?: () => void;
}

export default function Button({label, onClick}:IButton) {

  return <>
  { label ? 
    <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    : 
    <ButtonContainer disabled onClick={onClick}>
      {label}
    </ButtonContainer>
  }
  </>
}