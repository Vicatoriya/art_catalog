import React from 'react';
import image from '../../assets/person.png';
import { Container, ImageSection, InfoSection, Overview } from './styled';
import FavIcon from '../FavIcon';
export default function Header() {
  return (
    <Container>
      <ImageSection>
        <img src={image} alt="Charles V" id="main" />
        <FavIcon />
      </ImageSection>
      <InfoSection>
        <div>
          <h2>Charles V, bust length, holding a sword, facing right</h2>
          <h3>Giovanni Britto</h3>
          <p id="date">1535–45</p>
        </div>
        <div>
          <h2>Overview</h2>
          <Overview>
            <li>
              <strong>Artist nationality:</strong> German
            </li>
            <li>
              <strong>Dimensions:</strong> Sheet: 19 3/8 x 13 11/16 in. (49.2 x
              34.8 cm)
            </li>
            <li>
              <strong>Credit Line:</strong> Rogers Fund, 1917
            </li>
            <li>
              <strong>Repository:</strong> Metropolitan Museum of Art, New York,
              NY
            </li>
            <li>Public</li>
          </Overview>
        </div>
      </InfoSection>
    </Container>
  );
}
