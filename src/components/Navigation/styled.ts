import styled from 'styled-components';

export const Nav = styled.nav`
  @media (max-width: 420px) {
    display: none;
  }
  display: flex;
  align-items: center;
`;

export const NavLink = styled.a`
  &:last-child {
    margin-left: 20px;
  }
  font-size: 20px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;

  &:hover {
    color: rgba(224, 164, 73, 1);
  }
`;
