import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import { Container, Row, Card, Button } from 'react-bootstrap'
import teamone from '../Assets/Img/team1.jpg'
import teamtwo from '../Assets/Img/team2.jpg'
import teamthree from '../Assets/Img/team3.jpg'

export default class Home extends Component {
  render() {
    return (
      <>
        <CarouselBox />
        <Container>
          <h2 className='text-center m-4'>Our team</h2>
          <Row md={3} className='m-4'>
            <Card bg='warning'>
              <Card.Img
                variant='top'
                src={teamone}
              />
              <Card.Body>
                <Card.Title>Developers</Card.Title>
                <Card.Text>To understand what it means to practice an Agile form of user-centered design, it is important to have a sense of what exactly Agile means and where the term came from.</Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
            <Card bg='info' border='success'>
              <Card.Img
                variant='top'
                src={teamtwo}
              />
              <Card.Body>
                <Card.Title>Developers Models and Processes</Card.Title>
                <Card.Text>This chapter touches on only the most common terms and concepts and those that might be most relevant to a user experience practitioner. I encourage everyone to spend some time exploring the many resources that are available to get a deeper understanding of the philosophy and the various methods for applying it that have grown up along the way. It is also important to recognize that there is no one single right way to implement Agile design.</Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
            <Card bg='warning'>
              <Card.Img
                variant='top'
                src={teamthree}
              />
              <Card.Body>
                <Card.Title>Developers Environment</Card.Title>
                <Card.Text>The development team has grown to more than 10 people, and the number of content assets is likely to exceed 10,000. The most noticeable difference, however, is that the development environment is becoming increasingly distributed. There may be a core team, but this is supplemented by freelance specialists from time to time, who may be working from home, and satellite development teams, who may be distributed around the world to cater to local versions of the site. It becomes increasingly important to have tools and processes to manage communications and work in this distributed, and yet still collaborative, development environment. </Card.Text>
                <Button variant='primary'>About team</Button>
              </Card.Body>
            </Card>
          </Row>
        </Container>
      </>

    )
  }
}
