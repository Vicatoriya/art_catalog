import styled from 'styled-components';

export const InfoWrapper = styled.div`
  padding: 15px 30px 15px 15px;
  text-align: left;

  #title {
    margin: 0;
    color: rgba(51, 51, 51, 1);
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
    padding: 10px 30px 10px 15px;
  }
`;
