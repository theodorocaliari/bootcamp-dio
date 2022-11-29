import styled from "styled-components";

//const SharedCss = css``;

export const CardContainer = styled.div`
  width: 100%;
  background: #3b4651;
  position: relative;
  margin-bottom: 24px;
  border-radius: 10px;
`;

export const ImageBackground = styled.div`
  width: 100%;
  height: 180px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: url(${(props) => props.background.image}) no-repeat 100% / cover;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 12px;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 12px;

  div {
    margin-left: 12px;
  }

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: #fff;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.5;
    color: #fff;
  }
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  border: 2px solid #fff;
`;

export const PostInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: #fff;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  }
`;

export const HasInfo = styled.div`
  margin-bottom: 12px;

  h4 {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.5;
    color: #fff;
  }

  p {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
  }
`;
