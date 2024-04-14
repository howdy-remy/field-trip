import styled from "styled-components";

export const CategoryHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;

  width: 100%;
  padding: 8px 0;

  border-top: 1px solid ${({theme}) => theme.colors.black};

  font-family: ${({theme}) => theme.fonts.bioRhyme};
  font-size: 24px;
  font-weight: 800;
  color: ${({theme}) => theme.colors.black};
`