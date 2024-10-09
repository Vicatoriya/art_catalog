import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 15px;
  position: relative;
  cursor: pointer;
  & #main_pic {
    min-width: 80px;
    width: 80px;
    height: 80px;
    object-fit: cover;
  }
`;
