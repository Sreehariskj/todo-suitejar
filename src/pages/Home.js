import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import PageSeparator from '../components/PageSeparator'
import Todo from '../components/Todo'
import TodoList from '../components/TodoList'

const Home = () => {
  return (
    <Container>
    <Row>
      <Col md={6}><Todo/></Col>
      <Col md={1}><PageSeparator/></Col>
      <Col md={5}><TodoList/></Col>
    </Row>
    </Container>
  )
}

export default Home