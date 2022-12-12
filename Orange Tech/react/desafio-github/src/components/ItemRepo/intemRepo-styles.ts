import styled from "styled-components";

export const ItemContainer = styled.div`
  display:flex;
  display:column;
  width:80%;
  flex-wrap:wrap;
`;

export const ItemBox = styled.div`
  width:100%;
  padding:10px 15px;
  border-radius:5px;
  background:#1d2228;
  margin-bottom:15px;
  line-height:1.5;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  img{
    width:60px;
    border-radius:50px;
    margin-right:20px;
  }
  h3{
    font-size:1.3rem;
    color:#fafafa;
  }
  p{
    font-size:1rem;
    color:#fafafa;
  }
  .texto{
    width:100%;
    margin-bottom:10px;
  }

  .userInfo{
    display:flex;
    width:100%;
    flex-direction:column;
    flex-wrap:wrap;
  }

  .actions{
    display:flex;
    width:100%;
    flex-direction:row;
    justify-content:space-between;

    .remover{
      color:#740e03 ;
      text-decoration:none;
      padding:0;
      border:none;
      background:none;
      &:hover{
        cursor:pointer;
      }
    }
    .git-repo{
      color:#7cb342;
      text-decoration:none;
      &:hover{
        cursor:pointer;
      }
    }
  }
`;