import React, { Component } from 'react';
import './App.css';
import Navigation from '../src/components/navigation/navigation.js';
import Title from '../src/components/title/title.js';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return ( 
    <Container>
      <Col lg="2" sm="12" className="">
        <Title></Title>            
      </Col>    
      <Row>
        <Col>
          <Navigation></Navigation>  
        </Col>
        <Col>
        
        </Col>
      </Row>     
      <Navigation></Navigation>
    </Container>
    )
  }
}

export default App;
