import styled, { css } from "styled-components";

export const Button = styled.button<{
  variant: 'primary' | 'secondary' | 'outline'
}>`
  all: unset;
  height: 28px;
  padding: 0 12px;
  border-radius: 4px;
  text-decoration: none;

  font-family: ${({theme}) => theme.fonts.ibmSans};
  font-size: 14px;
  font-weight: 800;
  
  &:hover {
    background-color: ${({theme}) => theme.colors.blue500};
    cursor: pointer;
  };

  ${({theme, variant}) => 
     variant === 'primary' ?
      css`
        background-color: ${theme.colors.blue700};
        color: ${theme.colors.white};
        &:hover {
          background-color: ${theme.colors.blue500};
        };
      `
    : variant === 'secondary' ?
      css`
        background-color: ${theme.colors.blue100};
        color: ${theme.colors.blue700};
        &:hover {
          background-color: ${theme.colors.blue300};
        };
      `
    : css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.black};
        border: 1px solid ${theme.colors.black};
        &:hover {
          background-color: ${theme.colors.blue100};
        };
    `
  }
`