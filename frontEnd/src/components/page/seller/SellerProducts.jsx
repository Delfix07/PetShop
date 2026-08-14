import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import SellerProductCard from "../admin/products/SellerProductcard.jsx";
import ProductForm from "../admin/products/ProductForm.jsx";
import "./SellerProducts.css";

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
    <main className="sellerPage">
            {error && (<p className="sellerError">{error}</p>)}
            <header className="sellerHeader">
            <div>
                <h1>Seller Dashboard</h1>
                <p>Manage your products</p>
            </div>
            <button
                className="addProductButton"
                type="button"
                onClick={() => {
                resetForm()
                setShowForm(true) 
            }}
            >Add Product</button>
            </header>
                {showForm && (
                    <div className="sellerFormContainer">
                        <ProductForm
                            onSave={saveProduct}
                            newProduct={newProduct}
                            setNewProduct={setNewProduct}
                            editId={editId}
                            onCancel={() => setShowForm(false)}
                        />
                    </div>
                )}
            <section className="sellerProducts">
                <h2 className="sellerProductsTitle">Your Products</h2>
                {products.length > 0 ? (
                    <div className="sellerProductsGrid">
                        {products
                            .filter((product) => product)
                            .map((product) => (
                                <SellerProductCard
                                    key={product._id}
                                    product={product}
                                    deleteProduct={deleteProduct}
                                    setEditId={setEditId}
                                    setNewProduct={setNewProduct}
                                />
                            ))}
                    </div>
                ) : (
                    <p className="sellerEmpty">No products found.</p>
                )}
            </section>
    </main>
    )
}
