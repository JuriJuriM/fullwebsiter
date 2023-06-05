import React, { Component } from 'react'
import { FormControl, Navbar, Nav, Button, Form, Container } from 'react-bootstrap'
import Logo from '../Assets/Img/Flogo.png'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from '../Pages/Home'
import About from '../Pages/About'
import Contacts from '../Pages/Contacts'
import Blog from '../Pages/Blog'

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar className='navbar' collapseOnSelect expand='md' bg='dark' variant='dark' >
          <Container className='container'>
            <Navbar.Brand href='/'>
              <img
                src={Logo}
                height='30'
                className='d-inline-block align-top'
                alt='Logo'
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto' >
                <Nav.Link href='/'>Home</Nav.Link>
                <Nav.Link href='/about'>About us</Nav.Link>
                <Nav.Link href='/contacts'>Contacts</Nav.Link>
                <Nav.Link href='/blog'>Blog</Nav.Link>
              </Nav>
              <Form className='d-flex'>
                <FormControl
                  type='text'
                  placeholder='Search'
                  className='me-2'
                />
                <Button variant='outline-info'>Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar >

        <Router className='router'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Contacts />} />
            <Route path='/blog' element={<Blog />} />
          </Routes>
        </Router>
      </>
    )
  }
}
