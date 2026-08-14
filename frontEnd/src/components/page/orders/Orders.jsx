import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import "./Orders.css"

export default function Orders() {
    const currentUser = useSelector(
        state => state.user.currentUser
    )
    const [orders, setOrders] = useState([])
    const [error, setError] = useState("")
    useEffect(() => {
        if (currentUser) {
            getOrders()
        }
    }, [currentUser])

    async function getOrders() {
        try {
            const response = await axios.get(
                `http://localhost:3000/orders/user/${currentUser.id}`
            )
            setOrders(response.data)
        } catch (error) {
            console.error(error)
            setError("Error loading orders")
        }
    }

    return (
        <main className="ordersPage">
            <header className="ordersHeader">
                <h1>My Orders</h1>
                <p>Check your purchase history</p>
            </header>
            {error && (
                <p className="ordersError">{error}</p>
            )}
            {orders.length === 0 ? (
                <div className="ordersEmpty">
                    <h2>No orders yet</h2>
                    <p>You haven't made any orders yet.</p>
                </div>
            ) : (
                <section className="ordersList">
                    {orders.map(order => (
                        <article
                            className="orderCard"
                            key={order._id}
                        >
                            <div className="orderInfo">
                                <div>
                                    <span className="orderLabel">Order</span>
                                    <h3>#{order._id}</h3>
                                </div>
                                <div className="orderStatus">Completed</div>
                            </div>
                            <div className="orderDetails">
                                <div className="orderDetail">
                                    <span>Products</span>
                                    <strong>{order.products.length}</strong>
                                </div>
                                <div className="orderDetail">
                                    <span>Total</span>
                                    <strong className="orderPrice">${order.finalPrice}</strong>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            )}
        </main>
    )
}