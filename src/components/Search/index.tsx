import React from 'react';
import { SearchSection, Container, Input, Button } from './styled';
import StyledHeading from '../StyledHeading';
export default function Search() {
  return (
    <SearchSection>
      <StyledHeading
        text_start="Let's Find Some "
        feature="Art"
        text_end=" Here!"
      />
      <Container>
        <Input type="text" placeholder="Search Art, Artist, Work..." />
        <Button>🔍</Button>
      </Container>
    </SearchSection>
  );
}
