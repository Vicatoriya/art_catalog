import React from "react";
import {SearchSection,Heading,Feature,Container,Input,Button} from "./styled";
export default function Search() {
  return (
    <SearchSection>
    <Heading>Let’s Find Some <Feature>Art</Feature> Here!</Heading>
    <Container>
        <Input type="text" placeholder="Search Art, Artist, Work..."/>
        <Button>🔍</Button>
    </Container>
</SearchSection>
  );
}
