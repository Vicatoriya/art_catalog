import styled from 'styled-components';

export const ImageWrapper = styled.section`
  display: flex;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 90px 0;
  flex-grow: 1;

  @media (max-width: 420px) {
    padding: 20px 15%;
    flex-direction: column;
  }
`;

export const ImageSection = styled.div`
  position: relative;
  flex: 1;

  & #main {
    width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

export const InfoSection = styled.div`
  flex: 2;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h2 {
    font-size: 24px;
    margin-bottom: 10px;

    @media (max-width: 420px) {
      font-size: 22px;
      margin-bottom: 5px;
    }
  }

  & h3 {
    font-size: 20px;
    color: rgba(224, 164, 73, 1);
    margin-bottom: 5px;

    @media (max-width: 420px) {
      font-size: 18px;
    }
  }

  & #date {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 40px;
    @media (max-width: 420px) {
      font-size: 15px;
      margin-bottom: 30px;
    }
  }
`;

export const Overview = styled.div`
  list-style: none;
  color: rgba(102, 102, 102, 1);
  line-height: 1.8;

  & strong {
    color: rgba(224, 164, 73, 1);
  }

  & li {
    margin-bottom: 5px;
    @media (max-width: 420px) {
      margin-bottom: 3px;
    }
  }
`;
