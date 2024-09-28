import styled from 'styled-components';

export const Icon = styled.div<{ isActive: boolean }>`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: ${({ isActive }) =>
    isActive ? 'rgba(251, 215, 178, 0.3)' : 'white'};
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 2.5px 3px 0 3px;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease,
    background-color 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.95);
  }

  & img {
    width: 25px;
    height: 25px;
    transition: transform 0.3s ease;
  }
`;
