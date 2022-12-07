import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding:10px;
  font-size:1.2rem;
  font-weight:bold;
  border:1px solid #cdcdcd;

  &:hover{
    cursor:pointer;
    opacity:.6;
  }

  &[disabled]{
    cursor:default;

    &:hover{
      opacity:1;
    }
  }

`
