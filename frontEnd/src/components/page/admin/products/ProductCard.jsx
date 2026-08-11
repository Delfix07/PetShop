export default function ProductCard({
    product,
    deleteProduct,
    setEditId,
    setNewProduct
}) {

    function editProduct() {
        setEditId(product._id)
        setNewProduct({
            name: product.name,
            description: product.description,
            price: product.price,
            petType: product.petType,
            stock: product.stock,
            category: product.category,
            brand: product.brand,
            image: product.image
        })
    }

    return (
        <div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Category: {product.category}</p>
            <p>Brand: {product.brand}</p>
            <button onClick={editProduct}>Edit</button>
            <button onClick={() => deleteProduct(product._id)}>Delete</button>
        </div>
    )
} 