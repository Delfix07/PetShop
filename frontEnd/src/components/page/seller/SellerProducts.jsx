import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import ProductCard from "../admin/products/ProductCard.jsx";
import ProductForm from "../admin/products/ProductForm.jsx";

export default function Products() {
    const currentUser = useSelector(
        (state) => state.user.currentUser
    )
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
    image: [""]
    })
    const [error, setError] = useState("")
    const [showForm, setShowForm] = useState(false)

    async function getProducts() {
        try {
            const response = await axios.get(
                `http://localhost:3000/products/seller/${currentUser.id}`
            )
            setProducts(response.data)
        } catch (error) {
            console.error(error)
            setError("Error loading products")
        }
    }

    useEffect(() => {
        if (currentUser) {
            getProducts()
        }
    }, [currentUser])

    async function saveProduct(product) {
        try {
            if (editId) {
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
            } else {
                const response = await axios.post(
                    "http://localhost:3000/products",
                    {
                        ...product,
                        seller: currentUser.id
                    }
                )
                setProducts([
                    ...products,
                    response.data
                ])
            }
            setNewProduct({
                name: "",
                description: "",
                price: "",
                petType: [],
                stock: 0,
                category: "",
                brand: "",
                image: [""]
            })
        } catch (error) {
            console.error(error)
            setError("Error saving product")
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
        console.error(error)
        setError("Error deleting product")
    }
    }

    function resetForm() {
    setEditId(null)
    setNewProduct({
        name: "",
        description: "",
        price: "",
        petType: [],
        stock: 0,
        category: "",
        brand: "",
        image: [""]
    })
    }

    return (
        <div>
            {error && <p>{error}</p>}
            <button
                type="button"
                onClick={() => {
                resetForm()
                setShowForm(true)
            }}
            >Add Product</button>
            {showForm && (
                <ProductForm
                    onSave={saveProduct}
                    newProduct={newProduct}
                    setNewProduct={setNewProduct}
                    editId={editId}
                    onCancel={() => setShowForm(false)}
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
