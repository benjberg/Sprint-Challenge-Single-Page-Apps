import React from "react";
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';

export default function LocationCard(props) {
  return (
    <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>{props.name}</CardTitle>
              <CardText>{props.type} </CardText>
              <CardText>{props.dimension}</CardText> 
            </Card>
          </Col>
          </Row>
      );
}
