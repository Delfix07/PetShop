import {Heading, Paragraph} from "../atoms";
import { Link } from "react-router-dom";
import "./ProductCard.css";

export default function ProductCard({
    _id, name, description, image, price, className = ""
}){
    return(
        <article className={`productCard ${className}`}>
            <img
                src={image?.[0] || null}
                alt={name || "Product image"}
            />
            <Heading size="h4" text={name} />
            <Paragraph text={description} />
            <Heading size="h6" text={`$${price}`} />
            <Link to={`/products/${_id}`}>View details</Link>
        </article>
    )
}