import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import info from "../../assets/info.png";
import ingresos from "../../assets/ingresos.png";
import nuevosIngresos from "../../assets/nuevosIngresos.png";
import promo from "../../assets/promo.png";


export default function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={promo} alt="promos"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={ingresos} alt="nuevos ingresos"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={nuevosIngresos} alt="nuevos ingresos"/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={info} alt="ubicacion del local"/>
      </Carousel.Item>
    </Carousel>
  )
}
