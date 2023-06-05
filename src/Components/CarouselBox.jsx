import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import moneyone from '../Assets/Img/money.jpg'
import moneytwo from '../Assets/Img/money2.jpeg'
import moneythree from '../Assets/Img/money3.jpg'

export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={moneyone}
            alt='money'
          />
          <Carousel.Caption>
            <h3 className='black'>Money true</h3>
            <p className='black'>A new study from Cambridge University suggests that money can buy you happiness.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={moneytwo}
            alt='money'
          />
          <Carousel.Caption>
            <h3 className='black'>Money true</h3>
            <p className='black'>A new study from Cambridge University suggests that money can buy you happiness.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={moneythree}
            alt='money'
          />
          <Carousel.Caption>
            <h3>Money true</h3>
            <p>A new study from Cambridge University suggests that money can buy you happiness.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}
