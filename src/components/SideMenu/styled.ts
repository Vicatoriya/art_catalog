import styled, { css } from 'styled-components';
import arrow from '../../assets/arrow.svg';

interface MenuProps {
  open: boolean;
}

export const Menu = styled.nav<MenuProps>`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 293;
  display: block;
  width: 400px;
  margin-top: 0px;
  padding-top: 110px;
  padding-right: 0px;
  align-items: stretch;
  background-color: #333;
  transform: translateX(-100%);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);

  @media (max-width: 420px) {
    width: 50%;
    padding-top: 80px;
  }
  ${(props) =>
    props.open &&
    css`
      transform: translateX(0);
    `}
`;

export const MenuLink = styled.a`
  position: relative;
  display: block;
  text-align: left;
  max-width: 100%;
  margin-top: 25px;
  margin-bottom: 25px;
  padding-left: 16%;
  background-image: url(${arrow});
  background-position: 85% 50%;
  background-size: 36px;
  background-repeat: no-repeat;
  transition: background-position 300ms cubic-bezier(0.455, 0.03, 0.515, 0.955);
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  line-height: 120%;
  font-weight: 500;

  &:hover {
    background-position: 90% 50%;
  }

  @media (max-width: 420px) {
    font-size: 22px;
    background-size: 26px;
  }
`;
