import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  position: fixed;
  right: 0;
  top: 0;
  left: 0;
  box-sizing: border-box;
  outline: currentcolor none medium;
  max-width: 100%;
  margin: 0;
  align-items: center;
  background-color: rgba(51, 51, 51, 1);
  color: rgb(248, 248, 248);
  flex-direction: row;
  justify-content: space-between;
  padding: 20px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;

  @media (max-width: 420px) {
    img {
      width: 150px;
    }
    padding: 18px 20px;
    justify-content: start;
  }
`;
