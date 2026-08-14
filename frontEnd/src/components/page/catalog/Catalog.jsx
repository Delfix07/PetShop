import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "../../../components/molecules/Index.js";
import { CategoryFilter } from "../../organisms/index.js";
import {PetTypeFilter} from "../../organisms/index.js";
import { Heading } from "../../atoms";
import { useSearchParams } from "react-router-dom";
import "./Catalog.css";

export default function Catalog() {
    const [searchParams] = useSearchParams()
    const categoryFromUrl = searchParams.get("category")
    const petTypeFromUrl = searchParams.get("petType")
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState(
    categoryFromUrl || "All"
    )
    const [selectedPetType, setSelectedPetType] = useState(
        petTypeFromUrl || "All"
    )

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
        setSelectedCategory(categoryFromUrl || "All")
    }, [categoryFromUrl])

    useEffect(() => {
        setSelectedPetType(petTypeFromUrl || "All")
    }, [petTypeFromUrl])
    
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

    const filteredProducts = products.filter((product) => {
    const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

    const matchesPetType =
    selectedPetType === "All" ||
    product.petType?.some(
        type => type.toLowerCase() === selectedPetType.toLowerCase()
    )
    return matchesCategory && matchesPetType
    })

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
            <PetTypeFilter
                selectedPetType={selectedPetType}
                onPetTypeChange={setSelectedPetType}
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