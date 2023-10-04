import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';


function Restaurantcard({data}) {
   // console.log(data);
  return (
    <Col className='p-3' sm={12} md={6} lg={4} xl={3}>
   {/* style={{textDecoration:"none"}} > */}
    
      <Container>
      <Card className='mt-4 text-center' style={{ width: '100%' }}>
      <Card.Img className='p-2 rounded-pill' variant="top" src={data.photograph} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.neighborhood}
        </Card.Text>
        <Link  to={`view-restaurant/${data.id}`}> <Button variant="primary">View</Button></Link>
      </Card.Body>
    </Card>
     </Container>
   
   {/* </Link> */}
   </Col>
  )
}

export default Restaurantcard
