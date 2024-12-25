import React from 'react'
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import HtmlLogo from '../assets/img/HtmlLogo.png';
import ReactLogo from '../assets/img/React.png';
import TsLogo from '../assets/img/SassLogo.png';
import SassLogo from '../assets/img/TsLogo.png';
import JsLogo from '../assets/img/JsLogo.png';
import CssLogo from '../assets/img/CssLogo.png';
import JavaLogo from '../assets/img/JavaLogo.png';


export const Skills = () => {

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                        <h2>
                            My skills
                        </h2>
                        <p>I tutaj coś o skillach trzeba napisać, też raczej długiego, ale się zobaczy wsm</p>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img className='logo-img' src={HtmlLogo} />
                                <h5>I tu opis</h5>
                            </div>
                            <div className='item'>
                                <img className='logo-img' src={JsLogo} />
                                <h5>I tu opis 2</h5>
                            </div>
                            <div className='item'>
                                <img className='logo-img' src={CssLogo} />
                                <h5>I tu opis 2</h5>
                            </div>
                            <div className='item'>
                                <img className='logo-img' src={ReactLogo} />
                                <h5>I tu opis 2</h5>
                            </div>
                            <div className='item'>
                                <img className='logo-img' src={SassLogo}/>
                                <h5>I tu opis 3</h5>
                            </div>
                            <div className='item'>
                                <img className='logo-img' src={TsLogo} />
                                <h5>I tu opis 4</h5>
                            </div>
                            <div className='item'>
                                <img className='logo-img' src={JavaLogo} />
                                <h5>I tu opis 4</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>
  )
}
