import { InputContainer } from './input-styles';

interface IInput{
  value?:string;
  onChange?: (event:React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({value, onChange}:IInput){
  return(
    <InputContainer>
      <input value={(!value) ? "pablohdev/dio-clone" : value} onChange={onChange} />
    </InputContainer>
  )
}
