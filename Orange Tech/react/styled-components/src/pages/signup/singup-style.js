import styled, { css } from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 300px;
`;

export const Wrapper = styled.div`
  max-width: 300px;
`;

export const Column = styled.div`
  flex: 1;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  //justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
`;

//https://stackoverflow.com/questions/56651064/changing-tag-type-when-extending-component-in-styled-components
const ReaproveitandoCss = css`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  //width: 320px;
  //margin-bottom: 20px;
  line-height: 1.5;
  color: #fff;
`;

export const Title = styled.h2`
  ${ReaproveitandoCss}
`;

export const TitleLogin = styled.p`
  ${ReaproveitandoCss}
  margin-bottom: 0;
`;

export const SubtitleLogin = styled.p`
  ${ReaproveitandoCss}
  font-weight:normal;
  font-size: 16px;
  margin-bottom: 35px;
`;

export const EsqueciText = styled.p`
  ${ReaproveitandoCss}
  font-size: 14px;
  margin-bottom: unset;
  width: unset;
  color: #e5e044;
`;

export const CriarText = styled(EsqueciText)`
  width: unset;
  color: #e23dd7;
`;
