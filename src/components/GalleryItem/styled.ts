import styled from 'styled-components';

export const ItemWrapper = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    background: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 260px;
    transition: transform 0.5s ease-in-out;
    height:400px;
    &:hover: transform: scale(1.05);
    overflow:hidden;
    cursor: pointer;

    @media (max-width: 420px) {
      width:28%;
      height:270px;
    }
`;
export const Image = styled.img<{ $isLoading: boolean }>`
  width: 100%;
  height: 80%;
  object-fit: cover;
  display: ${(props) => (props.$isLoading ? 'none' : 'block')};

  @media (max-width: 420px) {
    height: 75%;
  }
`;
