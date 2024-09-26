import React from 'react';
import { Container } from './styled';
import Heading from '../Heading';
export default function OtherWorks() {
  return (
    <Container>
      <Heading text="Other works for you" />
      <div className="works-grid">
        <div className="work-item">
          <img src="charles-v.jpg" alt="Charles V" />
          <p>
            Charles V, bust length... <br />
            <span>Giovanni Britto</span>
          </p>
          <span className="public">Public</span>
        </div>
        <div className="work-item">
          <img src="charles-v.jpg" alt="Charles V" />
          <p>
            Charles V, bust length... <br />
            <span>Giovanni Britto</span>
          </p>
          <span className="public">Public</span>
        </div>
      </div>
    </Container>
  );
}
