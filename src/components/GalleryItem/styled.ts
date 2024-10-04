import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    background-color: white;
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
export const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;

  @media (max-width: 420px) {
    height: 75%;
  }
`;
