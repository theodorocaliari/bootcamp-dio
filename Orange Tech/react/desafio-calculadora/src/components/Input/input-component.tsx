import { InputContainer } from "./input-styled";

interface IInput{
  value?:string;
  disabled?:string;
}

export default function Input({value}:IInput){
  return (
  <>
    <InputContainer>
      <input readOnly type="text" value={value} />
    </InputContainer>
  </>
  )
}