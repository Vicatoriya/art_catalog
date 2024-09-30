import styled from 'styled-components';

export const GalleryItemInfo = styled.div`
  padding: 15px;
  text-align: left;
  padding-right: 35px;
  & p {
    margin: 0;
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }

  & p span {
    font-weigth: normal;
    color: rgba(224, 164, 73, 1);
    font-weight: bold;
  }
`;

export const Span = styled.span`
  font-size: 13px;
  display: block;
  margin-top: 5px;
`;
