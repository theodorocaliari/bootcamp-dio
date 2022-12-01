import styled, { css } from "styled-components";
import { IColumn } from "./types";

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const titleCommon = css`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 24px;
  color: #fff;
`;

export const Title = styled.h3`
  ${titleCommon}
`;
export const TitleHighlight = styled.h3`
  ${titleCommon}
  color:#ffffff70;
`;

export const Column = styled.div<IColumn>`
  flex: ${({ flex }) => flex};
  padding-right: 24px;
`;
