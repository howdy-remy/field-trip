import styled, { css } from 'styled-components';
import { Case } from '../../types';
import { Menu } from '@headlessui/react';

type ItemWrapperProps = {
  $canEdit: boolean;
  $canDrag: boolean;
  $itemCase: Case | null
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
  display: grid;
  grid-template-columns: 16px 1fr max-content 90px 48px 20px;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 36px;

  background-color: ${({theme}) => theme.colors.white};

  ${({$canDrag, $canEdit, $itemCase}) => {
    if(!$canDrag && !$canEdit && !$itemCase) {
      return css`grid-template-columns: 1fr 90px 48px;`
    } else if(!$canDrag && !$itemCase) {
      return css`grid-template-columns: 1fr 90px 48px 20px;`
    } else if (!$canEdit && !$itemCase) {
      return css`grid-template-columns: 16px 1fr 90px 48px;`
    } else if(!$canDrag && !$canEdit) {
        return css`grid-template-columns: 1fr max-content 90px 48px;`
    } else if (!$canDrag) {
      return css`grid-template-columns: 1fr max-content 90px 48px 20px;`
    } else if (!$canEdit) {
      return css`grid-template-columns: 16px 1fr max-content 90px 48px;`
    } else if (!$itemCase) {
      return css`grid-template-columns: 16px 1fr 90px 48px 20px;`
    }
  }}

`

export const DragHandleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 100%;

  &:hover {
    cursor: grab;
  }
`

export const Value = styled.div`
  font-family: ${({theme}) => theme.fonts.ibmMono};
  font-style: italic;
  text-align: right;
`

export const MoreButton = styled(Menu.Button)`
  all: unset;
  height: 20px;
  width: 20px;
  border-radius: 4px;

  background-color: ${({theme}) => theme.colors.blue300};
  &:hover {
    background-color: ${({theme}) => theme.colors.blue500};
    cursor: pointer;
  }
`

export const MenuWrapper = styled.div`
  position: relative;
`

export const MenuItems = styled(Menu.Items)`
  position: absolute;
  right: 0; 
  top: 30px;
  z-index: 10;

  padding: 16px 12px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
`

export const MenuItem = styled(Menu.Item)`
  display: block;
  width: max-content;

  color: ${({theme}) => theme.colors.blue700};
  font-weight: 800;
  text-decoration: none;

  cursor: pointer;
  &:hover {
    color: ${({theme}) => theme.colors.blue500};
  }
`