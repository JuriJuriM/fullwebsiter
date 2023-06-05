import React, { Component } from 'react'
import { Container, Nav, Tab, Row, Col } from 'react-bootstrap'
import first from '../Assets/Img/design.png'
import second from '../Assets/Img/team.jpg'
import third from '../Assets/Img/programming.jpg'
import fourth from '../Assets/Img/framework.png'
import fifth from '../Assets/Img/librarias.png'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Tab.Container id='ledt-tabs-example' defaultActiveKey='first'>
          <Row>
            <Col sm={3}>
              <Nav variant='pills' className='flex-column mt-2'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Design</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Team</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Programming</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fourth'>Frameworks</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='fifth'>Libraries</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className='mt-3'>
                <Tab.Pane eventKey='first'>
                  <img src={first} width={500} alt='first' />
                  <p>There’s more to great UX design than selecting pretty pictures. It’s time to stop neglecting your text layout. The art of words is all about the way that words look on the page or screen.</p>
                  <p>Since the dawn of the written language, the manner in which letters are presented and arranged has always mattered. Today is no different. This post will take a look at why text layout is important, how layout techniques have evolved, and how you can create a masterpiece.</p>
                  <p>Graphic designers are having to be more flexible than ever wearing multiple hats for any given project. Don’t worry though, copy and design go hand in hand and we are starting to see a rise in hybrid positions such as the ‘UX writer.’ *ooohhh*</p>
                </Tab.Pane>
                <Tab.Pane eventKey='second'>
                  <img src={second} width={500} alt='second' />
                  <p>Every successful company thrives on the power of teamwork. We place a high value on collaboration in our company. That is why we decided to share our best 150 teamwork quotes with you to help strengthen your team's bonding.</p>
                  <p>The evolution of mankind has always depended on joining hands with each other. From ancient pyramids to spacecrafts, everything is possible only because of teamwork. This process goes on in parallel with time.</p>
                  <p>However, at certain points, everyone working together needs a boost to keep them on track both physically and mentally. And to address it, various famous leaders from different fields have delivered powerful teamwork quotes to boost morale and keep teams united.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='third'>
                  <img src={third} width={500} alt='third' />
                  <p>Computer programming can be understood as both a kind of writing and a special class of human labor activity facilitating the automation of other human labor activities, not excluding itself. </p>
                  <p>From the very beginning of the history of computer programming, it was recognized that the technical logic of programming is a logic of automation, indeed, a logic of self-automation or even recursive automation.</p>
                  <p>This article suggests that a syntactic feature common to all programming languages used today serves as a register of this logic of automation, leaving traces in code that are legible if one knows where to look.</p>
                  <p>At their most interesting, in patterns of use to which a managerial discourse of software craftspersonship is actively hostile, yet to which so-called literate programming practice is indifferent, program comments are traces of a mode of technical labor whose privilege and precarity both rest on its obscurity, an obscurity in no way resistant to reading.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fourth'>
                  <img src={fourth} width={500} alt='fourth' />
                  <p>The Text Services Framework is designed to offer advanced language and word processing features to applications.</p>
                  <p>It supports features such as multilingual support, keyboard drivers, handwriting recognition, speech recognition, as well as spell checking and other text and natural language processing functions. It is also downloadable for older Windows operating systems.</p>
                  <p>The Language Bar enables text services to add UI elements to the toolbar and enables these elements when an application has focus. From the Language Bar, users can select the input language, and control keyboard input, handwriting recognition and speech recognition.</p>
                  <p>The language bar also provides a direct means to switch between installed languages, even when a non-TSF-enabled application has focus.</p>
                </Tab.Pane>
                <Tab.Pane eventKey='fifth'>
                  <img src={fifth} width={500} alt='fifth' />
                  <p>There are many big and small libraries everywhere in our country. They have millions of books in different languages. You can find there the oldest and the newest books.</p>
                  <p>The school library where Oleg studies is good. It is a large clean room. There are four big windows in it. The walls are light blue. There are a lot of shelves full of books. You can find books on literature, physics, history, chemistry, geography, biology and other subjects. There are books in English, too.</p>
                  <p>On the table near the window you can always see beautiful spring and autumn flowers.</p>
                  <p>On the walls you can see pictures of some great writers and poets.
                    On the table near the window you can always see beautiful spring and autumn flowers.</p>
                  <p>Oleg likes to go to the library. He can always find there something new, something he needs.</p>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    )
  }
}
