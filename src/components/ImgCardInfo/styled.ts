import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px;
  text-align: left;
  padding-right: 35px;
  span {
    margin: 0;
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }

  #artist {
    font-weigth: normal;
    color: rgba(224, 164, 73, 1);
    font-weight: bold;
  }
  height: min-content;
`;

export const ClampedParagraph = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Ограничение текста до 2 строк */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis; /* Добавление многоточия */
`;

export const Span = styled.span`
  font-size: 13px;
  display: block;
  margin-top: 5px;
`;
