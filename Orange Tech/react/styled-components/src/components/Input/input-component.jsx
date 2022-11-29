import React from "react";
import {IconContainer, InputContainer, InputText, ErrorText } from "./input-styles";
import { Controller } from "react-hook-form";

const Input = ({leftIcon, name, control, errorMessage, ...rest}) =>{
  return(
    <>
      <InputContainer>
        { leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null }
        <Controller
          name={name}
          control={control}
          render={({ field }) => <InputText {...field} {...rest} />}
        />
          
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}

    </>
  );
}

export { Input };