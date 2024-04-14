import styled from "styled-components";

export const PackHeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 242px;
  gap: 16px;
  align-items: end;
  grid-column: 1 / span 2;

  width: calc(100% - 32px);
  height: 200px;
  padding: 12px 16px;
  
  background-color: ${({theme}) => theme.colors.gold100};
  border-radius: 8px;
`

export const PageTitle = styled.div`
  display: flex;
  align-items: center;

  width: calc(100% - 24px);
  height: calc(56px - 24px);
  padding: 12px;
  
  background-color: ${({ theme}) => theme.colors.blue700};
  border-radius: 8px;

  font-family: ${({theme}) => theme.fonts.bioRhyme};
  font-size: 32px;
  color: ${({theme}) => theme.colors.gold100};
  font-weight: 800;
`

export const Callout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  width: calc(100% - 24px);
  height: calc(56px - 24px);
  padding: 12px;

  border: 1px solid ${({theme}) => theme.colors.blue700};
  border-radius: 8px;
  background-color: ${({theme}) => theme.colors.white};

  font-family: ${({theme}) => theme.fonts.bioRhyme};
  font-size: 32px;
  font-weight: 800;
  color: ${({theme}) => theme.colors.blue700};

  & > span {
    font-size: 16px;
    font-weight: 400;
  }
`