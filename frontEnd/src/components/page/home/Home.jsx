import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { NavBar } from "../../organisms/index.js";
import { ProductCard, HomeCarousel } from "../../molecules/Index.js";
import { Link } from "react-router-dom";
import {Footer} from "../../organisms/index.js"
import "./Home.css";

export default function Home() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(true)
    const getProducts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/products"
            )
            setProducts(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const getCategories = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/categories"
            )
            setCategories(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    const handleSearch = useCallback(async (text) => {
        try {
            setLoading(true)
            const response = await axios.get(
                "http://localhost:3000/products",
                {params: { search: text }}
            )
            setProducts(response.data)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        getProducts()
        getCategories()
    }, [])

    return (
        <>
        <NavBar onSearch={handleSearch} />
        <main className="homePage">
            <HomeCarousel />
            <section className="homeCategories">
                <h2>Shop by Category</h2>
                <div className="categoryCards">
                    {categories.map((category) => (
                        <Link
                            to={`/products?category=${encodeURIComponent(category.name)}`}
                            className="categoryCard"
                            key={category._id}
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </section>
            <section className="productGrid">
                {loading ? (
                    <p>Loading products...</p>
                ) : products.length === 0 ? (
                    <p>No products found.</p>
                ) : (
                    products.map((product) => (
                        <ProductCard
                            key={product._id}
                            {...product}
                        />
                    ))
                )}
            </section>
        </main>
        <Footer/>
    </>
    )
}