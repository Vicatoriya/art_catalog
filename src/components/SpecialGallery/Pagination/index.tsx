import React from "react";
import {Container} from "./styled";
import PaginationItem from "./PaginationItem";
export default function Pagination() {
  return (
    <Container>    
    {/* <PaginationItem  index="1" /> */}
    <a href="#" className="page-number active">1</a>
    <a href="#" className="page-number">2</a>
    <a href="#" className="page-number">3</a>
    <a href="#" className="page-number">4</a>
    <a href="#" className="next-page">➤</a>
    </Container>
  )};