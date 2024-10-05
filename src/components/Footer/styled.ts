import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 90px;
  padding: 20px 0;
  background: white;

  @media (max-width: 420px) {
    img {
      width: 150px;
    }
    margin-top: 40px;
    padding: 18px 0;
  }
`;
