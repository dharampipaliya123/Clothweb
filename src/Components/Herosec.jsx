import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import Style from './Herosec.module.css'
import mens from './img/mens.jpg'

const Herosec = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item interval={ 1000 } className={ Style.slideone }>
                    <img src={ mens } alt="" />
                    {/* <img src="https://images.pexels.com/photos/1832278/pexels-photo-1832278.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" text="first slide" /> */ }
                    <Carousel.Caption>
                        <div className="slideonetax">
                            <h3>Men's Collection</h3>
                            <p>From t-shirt,jeans,jacket,shirt,watches bags sunglasses</p>
                            <button>Shop Now</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={ 500 } className={ Style.slidetwo }>
                    <img src="https://media.istockphoto.com/id/1131097418/photo/beautiful-woman-with-shopping-bags-in-the-city-sale-shopping-tourism-and-happy-people-concept.jpg?s=612x612&w=0&k=20&c=XzAFRIbtsDn4hRYNMyiNn88CuO76vqyKLFANzRzUBzE=" alt="" />
                    {/* <img src="https://tse1.mm.bing.net/th?id=OIP.IhGijgoVTEs0_4rPuUXboQHaE8&pid=Api&P=0&h=180" alt="" /> */ }
                    <Carousel.Caption>
                        <h3>Women</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className={ Style.slidethree }>
                    <img src="http://4.bp.blogspot.com/-R4uuETJmAc0/UoswCt4cCDI/AAAAAAAAAGY/IntQ998wBpk/s1600/Zara1.jpg" alt="" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default Herosec