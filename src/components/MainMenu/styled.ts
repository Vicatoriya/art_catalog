import styled from 'styled-components';

export const Navbar = styled.div`
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
  background-color: #333;
  color: rgb(248, 248, 248);
  min-width: 0px;
  min-height: 0px;
  flex-direction: row;
  justify-content: flex-start;
  padding: 20px 60px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 16px;
  z-index: 500;
`;
