import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Results from "../components/Results";

const SearchResults = () => {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Results />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SearchResults;
