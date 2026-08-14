import { Order, Products } from "../../models/index.js"

export default async function createOrder(newOrder) {
    for (const item of newOrder.products) {
        const product = await Products.findById(item.product)
        if (!product) {
            throw new Error(`Product ${item.product} not found`)
        }
        if (product.stock < item.quantity) {
            throw new Error(
                `Not enough stock for product: ${product.name}`
            )
        }
        product.stock -= item.quantity
        await product.save()
    }
    const orderCreated = await Order.create(newOrder)
    return orderCreated
}