import styled from "styled-components";

export const InputContainer = styled.div`
  //max-width: 275px;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #3b3450;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  color: #8647ad;
`;

export const InputText = styled.input`
  background: transparent;
  color: #fff;
  border: 0;
  width: 100%;
  height: 30px;
`;

export const ErrorText = styled.span`
  color: #f00;
  font-size: 12px;
  margin: 5px 0 25px;
  display: block;
`;
