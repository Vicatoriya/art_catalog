import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  position: relative;
  cursor: pointer;
  & #main_pic {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin-right: 15px;
  }
`;

export const CardInfo = styled.div`
  flex-grow: 1;

  & h2 {
    font-size: 16px;
    margin-bottom: 8px;
    color: #333;
  }

  & p {
    font-size: 14px;
    color: rgba(241, 121, 0, 1);
  }
  & #status {
    font-weight: bold;
    color: #333;
  }
`;

export const Status = styled.p``;
