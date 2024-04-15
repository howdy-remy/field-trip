import styled from "styled-components";

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 4px;
  font-size: 11px;
  font-weight: 800;
`

export const StyledInput = styled.input`
  all: unset;

  display: flex;
  align-items: center;

  width: calc(100% - 24px);
  height: 28px;
  padding: 0 12px;
  border-radius: 4px;
  background-color: ${({theme}) => theme.colors.blue000};

  font-size: 14px;
`

export const ErrorMessage = styled.p`
  margin-top: 4px;
  font-size: 11px;
  font-weight: 800;
  color: ${({theme}) => theme.colors.red};
`