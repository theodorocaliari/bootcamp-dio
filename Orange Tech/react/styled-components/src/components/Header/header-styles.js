import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  background: #151515;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  width: 175px;
  height: 30px;
  background: #2d2d37;
  border-radius: 8px;
  padding: 2px 5px;
  margin: 0 12px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.a`
  font-family:"Open Sans", 
  font-style:normal;
  font-size:12px;
  line-height:1.5;
  color:#fff;
  margin-right:12px;
  text-decoration:none;
`;

export const MenuRight = styled.a`
  font-family:"Open Sans", 
  font-style:normal;
  font-size:12px;
  line-height:1.5;
  color:#fff;
  margin-right:12px;
  text-decoration:none;
`;

export const UserPicture = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50px;
  border: 2px solid #fff;
`;

export const Input = styled.input`
  background: transparent;
  flex: 1;
  border: 0;
  color: #fff;
`;
