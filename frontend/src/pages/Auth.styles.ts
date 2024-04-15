import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 64px;
`

export const Form = styled.form`
  width: 480px;
  padding: 24px 16px;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`

export const AuthHeader = styled.h2`
  font-family: ${({theme}) => theme.fonts.bioRhyme };
  margin: 0;
`