import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../../components/molecules/Index.js";
import { CategoryFilter } from "../../organisms/index.js";
import { Heading } from "../../atoms";
import "./Catalog.css";

export default function Catalog() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")

    const getProducts = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/products"
            )
            setProducts(response.data)
        } catch (error) {
            console.error(
                "Error fetching products",
                error
            )
        }
    }
    const getCategories = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/categories"
            )
            setCategories(response.data)
        } catch (error) {
            console.error(
                "Error fetching categories",
                error
            )
        }
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                await Promise.all([
                    getProducts(),
                    getCategories()
                ])
            } catch (error) {
                console.error(
                    "Error loading catalog:",
                    error
                )
            }
        }
        loadData()
    }, [])

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter(
                product =>
                    product.category === selectedCategory
            )

    return (
        <main className="catalogPage">
            <div className="catalogHeader">
                <Heading
                    size="h1"
                    text="Our Products"
                />
                <p>Find everything your pet needs</p>
            </div>

            <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

            <div className="catalog">
                {filteredProducts.map(product => (
                    <ProductCard
                        key={product._id}
                        _id={product._id}
                        name={product.name}
                        description={product.description}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </div>
        </main>
    )
}