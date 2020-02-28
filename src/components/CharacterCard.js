import React from "react";
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';


export default function CharacterCard(props) {
  return (
<Row>
      <Col sm="6">
        <Card body>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.gender} </CardText>
          <CardText>{props.status}</CardText> 
        </Card>
      </Col>
      </Row>
  );
};

  
