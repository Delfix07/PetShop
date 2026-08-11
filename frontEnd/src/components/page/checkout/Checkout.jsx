import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { clearCart } from "../../../redux/slices/cartSlice";

export default function Checkout() {
    const cart = useSelector(state => state.cart.items)
    const currentUser = useSelector(state => state.user.currentUser)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )
    async function confirmOrder() {
        try {
            const response = await axios.post(
                "http://localhost:3000/orders",
                {
                    user: currentUser.id,
                    products: cart.map(item => ({
                        product: item._id,
                        quantity: item.quantity
                    })),
                    finalPrice: total
                }
            )
            console.log("Order created:", response.data);
            dispatch(clearCart())
            navigate("/products")
        } catch (error) {
            console.error("Error creating order:", error);
        }
    }

    if (cart.length === 0) {
        return (
            <div>
                <h2>Your cart is empty</h2>
                <button
                    type="button"
                    onClick={() => navigate("/products")}
                >Continue Shopping</button>
            </div>
        )
    }

    if (!currentUser) {
        return (
            <div>
                <h2>You must be logged in to checkout</h2>
                <p>Please log in to complete your purchase.</p>
                <button
                    type="button"
                    onClick={() => navigate("/login", { state: { from: "/checkout" } })}
                >Log In</button>
                <button
                    type="button"
                    onClick={() => navigate("/cart")}
                >Back to Cart</button>
            </div>
        )
    }

    return (
        <div>
            <h1>Checkout</h1>
            {cart.map(item => (
                <div key={item._id}>
                    <h3>{item.name}</h3>
                    <p>{item.name} x {item.quantity}</p>
                    <p>${item.price * item.quantity}</p>
                </div>
            ))}
            <h2>Total: ${total}</h2>
            <button
                type="button"
                onClick={confirmOrder}
            >Confirm Order</button>
            <button
                type="button"
                onClick={() => navigate("/cart")}
            >Back to Cart</button>
        </div>
    )
}