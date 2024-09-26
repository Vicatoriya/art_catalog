import React from 'react';
import { Container } from './styled';
import Heading from '../Heading';
export default function OtherWorks() {
  return (
    <Container>
      <Heading text="Other works for you" />
      <div className="card">
        <img src="image.png" alt="Charles V" className="card-image" />
        <div className="card-info">
          <h2>Charles V, bust length...</h2>
          <p>Giovanni Britto</p>
          <p className="status">Public</p>
        </div>
        <div className="bookmark"></div>
      </div>{' '}
      <div className="card">
        <img src="image.png" alt="Charles V" className="card-image" />
        <div className="card-info">
          <h2>Charles V, bust length...</h2>
          <p>Giovanni Britto</p>
          <p className="status">Public</p>
        </div>
        <div className="bookmark"></div>
      </div>
    </Container>
  );
}
