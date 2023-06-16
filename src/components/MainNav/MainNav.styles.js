import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainNavList = styled.ul`
  width: 250px;
  display: flex;
  gap: 50px;
  margin-left: 0;
`;

export const MainNavLink = styled(NavLink)`
  font-weight: 700;
  color: #1e1823;

  &.active {
    color: rgb(247, 124, 145);
  }
`;
