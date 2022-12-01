import styled, { css } from "styled-components";
import { IButtonStyled } from "./types";

export const ButtonContainer = styled.button<IButtonStyled>`
  background: ${({variant}) => (variant === "primary " ? "red" : "blue")};
  background: #565656;
  border-radius: 22px;
  position: relative;

  color: #fff;
  padding: 2px 12px;
  min-width: 120px;
  width: 100%;

  ${(props) => {
    return (
      props.variant !== "secondary" &&
      css`
        min-width: 167px;
        height: 33px;
        background: #e4105d;

        &:hover {
          cursor: pointer;
          box-shadow: 0 0 20px -3px #e4105d;
        }

        &:after {
          content: "";
          position: absolute;
          border: 1px solid #e4105d;
          top: -5px;
          left: -6px;
          width: calc(100% + 10px);
          height: calc(100% + 10px);
          border-radius: 22px;
        }
      `
    );
  }};
`;
