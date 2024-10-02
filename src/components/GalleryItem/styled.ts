import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    position:relative;
    flex-direction:column;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 260px;
    transition: transform 0.3s ease;
    height:400px;
    &:hover: transform: scale(1.05);
    overflow:hidden;
    cursor: pointer;
`;
export const Image = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
`;
