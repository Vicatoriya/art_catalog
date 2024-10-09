import styled from 'styled-components';

export const MenuButton = styled.button`
  display: flex;
  flex-direction: column;
  gap: 7px;
  float: left;
  margin-right: 30px;
  outline: 0;
  border: 0;
  padding: 12px;
  background: none;

  @media (max-width: 420px) {
    padding: 6px;
    gap: 5px;
    margin-right: 15px;
  }
  & span {
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  &:focus {
    border: medium none white;
    box-shadow: white 0 0 2px 2px;
    outline: 0;
  }

  &:hover {
    span:nth-of-type(1) {
      @media (max-width: 420px) {
        width: 23px;
      }
      width: 33px;
    }

    span:nth-of-type(2) {
      width: 40px;
      @media (max-width: 420px) {
        width: 28px;
      }
    }

    span:nth-of-type(3) {
      width: 30px;
      @media (max-width: 420px) {
        width: 20px;
      }
    }
  }

  &.active {
    span:nth-of-type(1) {
      transform: rotate(45deg) translate(10px, 10px);
      width: 40px;
      @media (max-width: 420px) {
        transform: rotate(45deg) translate(7px, 7px);
        width: 28px;
      }
    }

    span:nth-of-type(2) {
      opacity: 0;
      pointer-events: none;
    }

    span:nth-of-type(3) {
      transform: rotate(-45deg) translate(7px, -7px);
      width: 40px;
      @media (max-width: 420px) {
        transform: rotate(-45deg) translate(6px, -6px);
        width: 28px;
      }
    }
  }
`;

export const Bar = styled.span`
  display: block;
  width: 40px;
  height: 5px;
  background-color: white;

  @media (max-width: 420px) {
    width: 28px;
    height: 4px;
  }
`;
