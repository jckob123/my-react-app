import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Title from '../src/components/title/title.js';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  render() {
    return ( 
    <Container>
      <Row>
        <Col lg="2" sm="12" className="">
          <Title></Title>            
        </Col>    
      </Row>
      <Row>
        <Col className="navigator justify-content-center">
          <Navigation></Navigation>  
        </Col>
        
        <Col>
        
        </Col>
      </Row>
    </Container>
    )
  }
}

export default App;
