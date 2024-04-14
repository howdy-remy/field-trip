import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100% - 64px);
  padding: 16px 32px;
`

export const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 290px;
  gap: 16px;

  width: 100%;
  max-width: 1216px;
`