import { useSelector } from "react-redux";
import { Heading } from "../../atoms/Index.js";
import { CartItem } from "../../molecules/Index.js";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

export default function Cart() {
    const navigate = useNavigate()
    const cart = useSelector(state => state.cart.items)
    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )
    if (cart.length === 0) {
        return (
            <main className="cartPage emptyCart">
                <div className="emptyCartCard">
                    <Heading size="h2" text="Your cart is empty" />
                    <p>You haven't added any products yet.</p>
                    <button
                        type="button"
                        onClick={() => navigate("/products")}
                    >Continue Shopping</button>
                </div>
            </main>
        )
    }

    return (
        <main className="cartPage">
            <div className="cartHeader">
                <Heading size="h1" text="Shopping Cart" />
                <p>Review your products before checkout</p>
            </div>
            <div className="cartContent">
                <section className="cartItems">
                    {cart.map(item => (
                        <CartItem
                            key={item._id}
                            item={item}
                        />
                    ))}
                </section>
                <aside className="cartSummary">
                    <h2>Order Summary</h2>
                    <div className="summaryLine">
                        <span>Products</span>
                        <span>{cart.length}</span>
                    </div>
                    <div className="summaryTotal">
                        <span>Total</span>
                        <strong>${total}</strong>
                    </div>
                    <button
                        type="button"
                        className="checkoutButton"
                        onClick={() => navigate("/checkout")}
                    >Checkout</button>
                    <button
                        type="button"
                        className="continueButton"
                        onClick={() => navigate("/products")}
                    >Continue Shopping</button>
                </aside>
            </div>
        </main>
    )
}