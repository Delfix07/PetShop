import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice.js";
import { Heading } from "../atoms";
import {Paragraph} from "../atoms";
import {ProductCarousel} from "./Index.js"
import "./ProductDetails.css";

export default function ProductDetails (){
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const dispatch = useDispatch();

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
    console.log(product.image);

    return (
    <div className="productDetail">
        <div className="productDetailImage">
            <ProductCarousel
                images={product.image}
                productName={product.name}
            />
        </div>
        <div className="productDetailInfo">
            <Heading
                size="h1"
                text={product.name}
            />
            <Paragraph text={product.description}/>
            <Heading
                size="h2"
                text={`$${product.price}`}
            />
            <div className="productData">
                <p><strong>Brand:</strong> {product.brand}</p>
                <p><strong>Category:</strong> {product.category}</p>
                <p><strong>Stock:</strong> {product.stock}</p>
            </div>
            <button
                onClick={() => dispatch(addToCart(product))}
                disabled={product.stock === 0}
            >Add to cart</button>
        </div>
    </div>
    )
} 
