import styled from "styled-components";

export const Container = styled.div`
  background:var(--color-4);
  padding:50px;
  width:100%;

  display:flex;
  align-items:center;
  justify-content:center;
`

export const Content = styled.div`
  background:#fff;
  width:40%;
  min-height:300px;
`

export const ButtonGrid = styled.div`
  display:grid;
  grid-template-columns:repeat(4, 1fr);
  gap:10px;
  padding:10px;
`