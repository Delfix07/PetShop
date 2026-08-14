import "./SellerProductCard.css";

export default function SellerProductCard({
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
        <div className="sellerProductCard">
            <div className="sellerProductInfo">
                <h3>{product.name}</h3>
                <p className="productDescription">{product.description}</p>
                <p className="productPrice">${product.price}</p>
                <div className="productData">
                    <p>
                        <span>Stock</span>
                        {product.stock}
                    </p>
                    <p>
                        <span>Category</span>
                        {product.category}
                    </p>
                    <p>
                        <span>Brand</span>
                        {product.brand}
                    </p>
                </div>
            </div>
            <div className="sellerProductActions">
                <button
                    className="editButton"
                    onClick={editProduct}
                >Edit</button>
                <button
                    className="deleteButton"
                    onClick={() =>
                        deleteProduct(product._id)
                    }
                >Delete</button>
            </div>
        </div>
    )
}