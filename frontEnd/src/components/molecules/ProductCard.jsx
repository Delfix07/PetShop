import {Heading, Paragraph} from "../atoms";
import { Link } from "react-router-dom";

export default function ProductCard({
    _id, name, description, image, price, className = ""
}){
    return(
        <article className={className}>
            <Heading size="h4" text={name} />
            <img src={image || null} alt={name || "Product image"} />
            <Paragraph text={description} />
            <Heading size="h6" text={`$${price}`} />
            <Link to={`/products/${_id}`}>View details</Link>
        </article>
    )
}