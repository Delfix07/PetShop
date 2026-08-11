import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";

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
        <div>
            <h1>My Orders</h1>
            {error && <p>{error}</p>}
            {orders.length === 0 ? (
                <p>You haven't made any orders yet.</p>
            ) : (
                <div>
                    {orders.map(order => (
                        <div key={order._id}>
                            <h3>Order: {order._id}</h3>
                            <p> Products: {order.products.length}</p>
                            <p>Total: ${order.finalPrice}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}