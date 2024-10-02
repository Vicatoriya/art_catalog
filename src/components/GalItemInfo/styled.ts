import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  text-align: left;
  height: 20%;
  padding-right: 35px;
  #title {
    margin: 0;
    color: #333;
    font-weight: bold;
  }
  #artist {
    color: rgba(224, 164, 73, 1);
    font-weight: bold;
  }

  #date {
    font-size: 13px;
    margin-top: 5px;
  }
`;

export const SingleLineEllipsis = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
