import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

export const PopupWrapper = styled.div<{ $visible: boolean }>`
  position: fixed;
  top: 20px;
  right: 20px;
  width: 300px;
  padding: 16px;
  background-color: rgba(248, 215, 218, 1);
  color: rgba(114, 28, 36, 1);
  border: 1px solid rgba(245, 198, 203, 1);
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  animation: ${(props) => (props.$visible ? fadeIn : fadeOut)} 0.3s ease-in-out;
  display: ${(props) => (props.$visible ? 'block' : 'none')};
`;

export const ErrorTitle = styled.h4`
  margin: 0 0 8px 0;
  font-size: 16px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  color: rgba(114, 28, 36, 1);
  font-size: 18px;
  cursor: pointer;
`;
