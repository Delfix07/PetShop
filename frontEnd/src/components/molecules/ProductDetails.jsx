import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import { Heading } from "../atoms";
import {Paragraph} from "../atoms";

export default function ProductDetails (){
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    const getProduct = async () => {
    try {
        const response = await axios.get(
            `http://localhost:3000/products/${id}`
        );
        setProduct(response.data)
    } catch(error) {

        console.error(error)

    }
}
    useEffect(() => {
    getProduct();
    }, [id]);

    if (!product) {
        return <p>Loading...</p>;}
    return (
        <div className="product-detail">
            <img
                src={product.image}
                alt={product.name}/>
            <Heading size="h1" text={product.name} />
            <Paragraph text={product.description} />
            <Heading size="h2" text={`$${product.price}`} />
            <p>Brand: {product.brand}</p>
            <p>Category: {product.category}</p>
            <p>Stock: {product.stock}</p>
            <Button >Add to cart</Button>
        </div>
    );

} 
 //onClick={} Agregar al button una vez este listo el cart