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
export const GalleryItemInfo = styled.div`
  padding: 15px;
  text-align: left;

  & p {
    margin: 0;
    font-size: 14px;
    color: #333;
  }

  & p span {
    color: orange;
    font-weight: bold;
  }
`;

export const Span = styled.span`
  font-size: 12px;
  color: grey;
  display: block;
  margin-top: 5px;
  color: orange;
`;

export const FavIcon = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: white;
  border-radius: 50%;
  padding: 5px 7px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);

  & img {
    width: 20px;
    height: 20px;
  }
`;
