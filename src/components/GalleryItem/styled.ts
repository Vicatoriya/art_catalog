import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
    display:flex;
    flex-direction:column;
    position: relative;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 250px;
    overflow:hidden;
    transition: transform 0.3s ease;
    height:420px;
    &:hover: transform: scale(1.05);
`;
export const Image = styled.img`
  width: 100%;
  flex: 1;
  object-fit: cover;
`;
