import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    width: 250px;
    transition: transform 0.3s ease;
    &:hover: transform: scale(1.05);
`;
export const Image = styled.img`
  width: 100%;
  height: auto;
`;
