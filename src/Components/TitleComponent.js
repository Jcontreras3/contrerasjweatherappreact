import React from 'react'
import { Row, Col} from "react-bootstrap";
import { Icon } from "@iconify/react";
export default function TitleComponent() {
  return (
    <Row>
    <Col md={4} className="weatherTitleCol">
      <Icon className="iconColor" icon="ri:sun-cloudy-fill" />
      <p className="titleTxt">JJ's Weather App</p>
    </Col>
  </Row>
  )
}
