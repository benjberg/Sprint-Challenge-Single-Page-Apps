import React from "react";
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Cbod=styled(Card)`
margin: 0 auto;
border: 1px solid black;
text-align: center;
width: 50%;
`
export default function CharacterCard(props) {
  return (
<Row>
      <Col sm="6">
        <Cbod>
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.gender} </CardText>
          <CardText>{props.status}</CardText> 
        </Cbod>
      </Col>
      </Row>
  );
};

  
