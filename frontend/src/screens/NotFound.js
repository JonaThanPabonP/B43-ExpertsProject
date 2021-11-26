import React from "react";
import {Alert} from 'react-bootstrap'

const Home = () => {
  return (
    <>
      <Alert key="1" variant="danger">
        Not Found
        <Alert.Link href="/">Volver</Alert.Link>
      </Alert>
    </>
  );
};

export default Home;
