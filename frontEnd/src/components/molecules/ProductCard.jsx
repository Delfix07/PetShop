import {Heading, Paragraph} from "../atoms";
import { Link } from "react-router-dom";

export default function ProductCard({
    name, description, image, price, className = ""
}){
    return(
        <article className={className}>
            <Heading size="h4" text={name}/>
            <img src={image}/>
            <Paragraph text={description}/>
            <Heading size="h6" text={`$${product.price}`}/>
            <Link to={`/products/${product._id}`}>View details</Link>
        </article>
    );
}