import React, {Component } from 'react';
import { Container, Jumbotron } from 'react-bootstrap';



function App() {
  return (
    <div >
    <Jumbotron>
    <Container>
  <h1>Search App</h1>
  <p>
    This is a simple search app.
  </p>
  
    {/* <Button variant="primary">Learn more</Button> */}
    </Container>
</Jumbotron>
    </div>
  );
}

export default App;
