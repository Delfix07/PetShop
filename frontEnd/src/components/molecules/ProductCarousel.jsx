import Carousel from "react-bootstrap/Carousel";

export default function ProductCarousel({ images, productName }) {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img
                        src={image}
                        alt={`${productName} ${index + 1}`}
                        width="100%"
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    )
}