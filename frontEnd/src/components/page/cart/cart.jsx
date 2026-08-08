import { useSelector } from "react-redux";
import { Heading } from "../../atoms/Index.js";
import {CartItem} from "../../molecules/Index.js";

export default function Cart(){
    const cart = useSelector(state => state.cart.items)
    const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0)
    if (cart.length === 0) {
    return (
        <Heading size="h3" text="Your cart is empty"/>)
    }

    return (
        <div className="cart">
            <Heading size="h1" text="Shopping Cart"/>
            {cart.map(item => (
                <CartItem key={item._id} item={item}/>
            ))}
            <Heading size="h3" text={`Total: $${total}`}/>
        </div>
    )
}