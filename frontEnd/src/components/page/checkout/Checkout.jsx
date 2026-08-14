import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { clearCart } from "../../../redux/slices/cartSlice";
import "./Checkout.css"

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
                console.error("Server response:", error.response?.data);

        }
    }

     if (cart.length === 0) {
        return (
            <main className="checkoutPage checkoutEmpty">
                <div className="checkoutMessage">
                    <h2>Your cart is empty</h2>
                    <p>Add some products before proceeding to checkout.</p>
                    <button
                        type="button"
                        onClick={() => navigate("/products")}
                    >Continue Shopping</button>
                </div>
            </main>
        )
    }

    if (!currentUser) {
        return (
            <main className="checkoutPage checkoutEmpty">
                <div className="checkoutMessage">
                    <h2>You must be logged in</h2>
                    <p>Please log in to complete your purchase.</p>
                    <button
                        type="button"
                        onClick={() =>
                            navigate("/login", {
                                state: { from: "/checkout" }
                            })
                        }
                    >Log In</button>

                    <button
                        type="button"
                        className="secondaryButton"
                        onClick={() => navigate("/cart")}
                    >Back to Cart</button>
                </div>
            </main>
        )
    }

    return (
        <main className="checkoutPage">
            <div className="checkoutHeader">
                <h1>Checkout</h1>
                <p>Review your order before confirming</p>
            </div>
            <div className="checkoutContent">
                <section className="checkoutProducts">
                    <h2>Your Order</h2>
                    {cart.map(item => (
                        <div
                            className="checkoutProduct"
                            key={item._id}
                        >
                            <div className="checkoutProductInfo">
                                <h3>{item.name}</h3>
                                <p>${item.price} × {item.quantity}</p>
                            </div>
                            <strong>
                                ${item.price * item.quantity}
                            </strong>
                        </div>
                    ))}
                </section>
                <aside className="checkoutSummary">
                    <h2>Order Summary</h2>
                    <div className="checkoutTotal">
                        <span>Total</span>
                        <strong>${total}</strong>
                    </div>
                    <button
                        type="button"
                        className="confirmButton"
                        onClick={confirmOrder}
                    >Confirm Order</button>
                    <button
                        type="button"
                        className="backButton"
                        onClick={() => navigate("/cart")}
                    >Back to Cart</button>
                </aside>
            </div>
        </main>
    )
}