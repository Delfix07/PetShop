import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard.jsx";
import ProductForm from "./ProductForm.jsx";

export default function Products() {
    const [products, setProducts] = useState([])
    const [editId, setEditId] = useState(null)
    const [newProduct, setNewProduct] = useState({
        name: "",
        description: "",
        price: "",
        petType: [],
        stock: 0,
        category: "",
        brand: "",
        image: ""
    })
    const [error, setError] = useState("");

    async function getProducts() {
        try {
            const response = await axios.get(
                "http://localhost:3000/products"
            )
            setProducts(response.data)

        } catch (error) {
            console.error(error)
            setError("Error loading products")
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    async function updateProduct(product) {

        try {
            const response = await axios.put(
                `http://localhost:3000/products/${editId}`,
                product
            )

            setProducts(
                products.map((currentProduct) =>
                    currentProduct._id === editId
                        ? response.data
                        : currentProduct
                )
            )

            setEditId(null)

            setNewProduct({
                name: "",
                description: "",
                price: "",
                petType: [],
                stock: 0,
                category: "",
                brand: "",
                image: ""
            })

        } catch (error) {
            console.error(error)
            setError("Error updating product")
        }
    }

    async function deleteProduct(id) {

        try {
            await axios.delete(
                `http://localhost:3000/products/${id}`
            )

            setProducts(
                products.filter(
                    (product) => product._id !== id
                )
            )

        } catch (error) {
            console.error(error);
            setError("Error deleting product")
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            {editId && (
                <ProductForm
                    onSave={updateProduct}
                    newProduct={newProduct}
                    setNewProduct={setNewProduct}
                    editId={editId}
                />
            )}
            <div>
                {products.length > 0 ? (
                    products.map((product) => (
                        <ProductCard
                            key={product._id}
                            product={product}
                            deleteProduct={deleteProduct}
                            setEditId={setEditId}
                            setNewProduct={setNewProduct}
                        />
                    ))
                ) : (
                    <p>No products found.</p>
                )}
            </div>
        </div>
    )
}