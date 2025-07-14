import React from 'react'
import { Container,Card,Row,Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const Offercard = ({icons,text,Title}) => {
  return (
    <Card className='h-100 shadow-sm' style={{minWidth:'100%'}}>
   <Card.Body>
  <Row className="align-items-center">
    <Col >
    <FontAwesomeIcon icon={icons} className='text-primary p-4' style={{fontSize:'50px'}}/>
    <Card.Title className="mb-2">{Title}</Card.Title>
    <Card.Text className='text-muted p-2'>{text}</Card.Text>
    </Col>
  </Row>
   </Card.Body>
    </Card>
  )
}

export default Offercard
