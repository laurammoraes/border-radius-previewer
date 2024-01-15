import { useState } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import './App.css';

function App() {
  const [topLeft, setTopLeft] = useState('0');
  const [topRight, setTopRight] = useState('0');
  const [bottomLeft, setBottomLeft] = useState('0');
  const [bottomRight, setBottomRight] = useState('0');
  
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <div aria-label='Box' 
            style={{ 
              backgroundColor: 'cornflowerblue', 
              width: '200px', 
              height: '200px', 
              borderRadius:`${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`
            }}
          />
        </Col>
        <Col md={6}>
          <input
          type="number"
          aria-label='Top Left'
          value={topLeft}
          onChange={(e) => setTopLeft(e.target.value)}
          />
          <input
          type="number"
          aria-label='Top Right'
          value={topRight}
          onChange={(e) => setTopRight(e.target.value)}
          />
          <input
          type="number"
          aria-label='Bottom Left'
          value={bottomLeft}
          onChange={(e) => setBottomLeft(e.target.value)}
          />
          <input
          type="number"
          aria-label='Bottom Right'
          value={bottomRight}
          onChange={(e) => setBottomRight(e.target.value)}
          />
        </Col>
      </Row>
     
      
      <pre aria-label='Code' 
        onClick={() => navigator.clipboard.writeText(`Border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`)}
        >
        {`Border-radius: ${topLeft}% ${topRight}% ${bottomRight}% ${bottomLeft}%`}
      </pre>
    </Container>
  );
}

export default App;
