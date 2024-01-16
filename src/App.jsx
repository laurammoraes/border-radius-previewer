import { useState } from 'react';
import {Col, Container, Row, Form, Alert} from 'react-bootstrap';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import './App.css';

function App() {
  const [topLeft, setTopLeft] = useState('0');
  const [topRight, setTopRight] = useState('0');
  const [bottomLeft, setBottomLeft] = useState('0');
  const [bottomRight, setBottomRight] = useState('0');
  const borderRadius = `${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`;
  
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <div aria-label='Box' 
            style={{ 
              backgroundColor: 'cornflowerblue', 
              width: '200px', 
              height: '200px', 
              borderRadius: borderRadius
            }}
          />
        </Col>
        <Col md={6}>
          <Row className='my-3'>
            <Col md={6}>
              <Form.Label>Top Left</Form.Label>
              <Form.Control
              type="number"
              aria-label='Top Left'
              value={topLeft}
              onChange={(e) => setTopLeft(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Top Right</Form.Label>
              <Form.Control
              type="number"
              aria-label='Top Right'
              value={topRight}
              onChange={(e) => setTopRight(e.target.value)}
              />
            </Col>
          </Row>
          <Row className='my-3'>
            <Col md={6}>
              <Form.Label>Bottom Left</Form.Label>
              <Form.Control
              type="number"
              aria-label='Bottom Left'
              value={bottomLeft}
              onChange={(e) => setBottomLeft(e.target.value)}
              />
            </Col>
            <Col md={6}>
              <Form.Label>Bottom Right</Form.Label>
              <Form.Control
              type="number"
              aria-label='Bottom Right'
              value={bottomRight}
              onChange={(e) => setBottomRight(e.target.value)}
              />
            </Col>
          </Row>
          <OverlayTrigger
            placement='top'
            overlay={
              <Tooltip >
                Click to Copy
              </Tooltip>
            }
          >
            <Alert variant='info' 
            className='my-4 hover' 
            onClick={() => navigator.clipboard.writeText(`Border-radius: ${borderRadius}`)}
            >
              <pre aria-label='Code' >
                {`Border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`}
              </pre>
            </Alert>
          </OverlayTrigger>

              
         
        </Col>
      </Row>
     
      
   
    </Container>
  );
}

export default App;
