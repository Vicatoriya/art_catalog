import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 50px 0;
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
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  & h3 {
    font-size: 20px;
    color: rgba(224, 164, 73, 1);
    margin-bottom: 5px;
  }

  & #date {
    font-size: 17px;
    font-weight: bold;
    margin-bottom: 40px;
  }
`;

export const Overview = styled.div`
  list-style: none;
  color: #666;
  line-height: 1.8;

  & strong {
    color: rgba(224, 164, 73, 1);
  }

  & li {
    margin-bottom: 5px;
  }
`;
