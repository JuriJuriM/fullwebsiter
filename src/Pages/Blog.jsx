import React, { Component } from 'react'
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap'
import js from '../Assets/Img/js.png'
import html from '../Assets/Img/html.jpg'
import python from '../Assets/Img/python.jpg'

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md='9'>
            <Card className='m-5'>
              <img
                width={150}
                height={150}
                className='mr-3'
                src={html}
              />
              <Card.Body>
                <h5>Block post</h5>
                <p>One of HTML's main jobs is to give text structure so that a browser can display an HTML document the way its developer intends. This article explains the way HTML can be used to structure a page of text by adding headings and paragraphs, emphasizing words, creating lists, and more.</p>
              </Card.Body>
            </Card>
            <Card className='m-5'>
              <img
                width={150}
                height={150}
                className='mr-3'
                src={js}
              />
              <Card.Body>
                <h5>Block post</h5>
                <p>Next, we'll turn our attention to strings — this is what pieces of text are called in programming. In this article, we'll look at all the common things that you really ought to know about strings when learning JavaScript, such as creating strings, escaping quotes in strings, and joining strings together.</p>
              </Card.Body>
            </Card>
            <Card className='m-5'>
              <img
                width={150}
                height={150}
                className='mr-3'
                src={python}
              />
              <Card.Body>
                <h5>Block post</h5>
                <p>Patterns within written text are not the same across all authors or languages.This allows linguists to study the language of origin or potential authorship of texts where these characteristics are not directly known such as the Federalist Papers of the American Revolution.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md='3'>
            <h5 className='text-center m-5'>Categories</h5>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>Html/Css</ListGroup.Item>
                <ListGroup.Item>Js</ListGroup.Item>
                <ListGroup.Item>Python</ListGroup.Item>
              </ListGroup>
            </Card>
            <Card className='mb-5 mt-3'>
              <Card.Body>
                <Card.Title>Side widget</Card.Title>
                <Card.Text>Card is a build-in widget and a most used widget in flutter. The card has a rounded corners around it with a slight elevation to give it a smooth and user-friendly look to the application. It has many customized properties like color, shape etc which can be used accordingly.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
