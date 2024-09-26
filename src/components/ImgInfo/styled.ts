import styled from 'styled-components';

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
  font-size: 13px;
  font-weight: bold;
  display: block;
  margin-top: 5px;
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
