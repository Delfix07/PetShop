import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../../redux/slices/cartSlice";

import { Heading , Paragraph} from "../atoms/Index";

export default function CartItem({item}){
    const dispatch = useDispatch()

    return (

        <article className="cartItem">
            <img src={item.image} alt={item.name}/>
            <Heading
                size="h4"
                text={item.name}
            />
            <Paragraph text={`$${item.price}`}/>
            <div className="cartQuantity">
                <button onClick={() => dispatch(decreaseQuantity(item._id))}> - </button>
                <Paragraph text={item.quantity}/>
                <button onClick={() => dispatch(increaseQuantity(item._id))}> + </button>
            </div>
            <Paragraph text={`Subtotal: $${item.price * item.quantity}`}/>
            <button onClick={() => dispatch(removeFromCart(item._id))}> Remove </button>
        </article>
    )
}