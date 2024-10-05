import styled from 'styled-components';

export const InfoWrapper = styled.div`
  padding: 15px;
  text-align: left;
  height: 20%;
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

  @media (max-width: 420px) {
    height: 25%;
    padding: 10px;
    font-size: 14px;
    #date {
      font-size: 12px;
      margin-top: 3px;
    }
  }
`;

export const SingleLineEllipsis = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
