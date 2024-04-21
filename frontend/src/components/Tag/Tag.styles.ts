import styled from "styled-components";

export const Tag = styled.div<{$variant?: 'primary' | 'secondary'}>`
  height: 16px;
  padding: 0 8px;
  
  background-color: ${({theme, $variant}) => 
    $variant === 'secondary' ? theme.colors.blue500 : theme.colors.blue700
  };
  border-radius: 4px;

  font-family: ${({theme}) => theme.fonts.ibmSans};
  font-size: 11px;
  color: ${({theme}) => theme.colors.white};
`;