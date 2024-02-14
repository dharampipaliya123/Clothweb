import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Style from './Navubar.module.css';
// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';



const Navubar = () => {
    return (
        <>
            <nav>
                <Navbar expand="lg" className="bg-body-tertiary p-0">
                    <Container fluid className={ Style.navubar }>
                        <Navbar.Brand href="#" className='justify-content-between'>
                            <img src="https://i.pinimg.com/originals/67/ca/4d/67ca4de8d8c5c50f20c6ef8b89babe03.jpg" className='' alt="" />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={ { maxHeight: '100px' } }
                                navbarScroll
                            >
                                <Nav.Link href="#action1">Home</Nav.Link>
                                <Nav.Link href="#action2">Men's</Nav.Link>
                                <Nav.Link href="#action3">Women's</Nav.Link>
                                <Nav.Link href="#action4">children's wear</Nav.Link>
                            </Nav>
                            <Button variant="outline-success m-2" className={ Style.navbtn }>Add</Button>
                            <Button variant="outline-success" className={ Style.navbtn }>Shop</Button>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </nav>








            {/* <div class="footer">
                <div class="container">
                    <div class="row">
                        <div class="footer-col-1">
                            <h3>Download Our App</h3>
                            <p>Download App for Android and iso mobile phone.</p>
                            <div class="app-logo">
                                <img src="https://i.ibb.co/KbPTYYQ/play-store.png" alt="" />
                                <img src="https://i.ibb.co/hVM4X2p/app-store.png" alt="" />
                            </div>
                        </div>

                        <div class="footer-col-2">
                            <img src="https://i.ibb.co/j3FNGj7/logo-white.png" alt="" />
                            <p>
                                Our Purpose Is To Sustainably Make the Pleasure and Benefits of
                                Sports Accessible to the Many.
                            </p>
                        </div>

                        <div class="footer-col-3">
                            <h3>Useful Links</h3>
                            <ul>
                                <li>Coupons</li>
                                <li>Blog Post</li>
                                <li>Return Policy</li>
                                <li>Join Affiliate</li>
                            </ul>
                        </div>

                        <div class="footer-col-4">
                            <h3>Follow us</h3>
                            <ul>
                                <li>Facebook</li>
                                <li>Twitter</li>
                                <li>Instagram</li>
                                <li>YouTube</li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <p class="copyright">Copyright &copy; 2021 - Red Store</p>
                </div>
            </div> */}


        </>
    )
}

export default Navubar