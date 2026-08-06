import { useState, useEffect } from "react";
import axios from "axios"
import ProductCard from "../../../components/molecules/ProductCard.jsx"
import CategoryFilter from "../../organisms/categoryFiler.jsx";


export default function Catalog (){
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [selectedCategory, setSelectedCategory] = useState("All")

    const getProducts = async () => {
        try{
            const response = await axios.get("http://localhost:3000/products")
            setProducts(response.data)
        }catch(error){
            console.error("Error fetching products", error)
        }
    }

    const getCategories = async () => {
        const response = await axios.get("http://localhost:3000/categories")
        setCategories(response.data)
    };

    useEffect(() => {

        const loadData = async () => {
            try {
                await Promise.all([
                    getProducts(),
                    getCategories()
                ]);
            } catch (error) {
                console.error("Error loading catalog:", error);
            }
        };

        loadData()
    }, []);

    const filteredProducts =
        selectedCategory === "All"
            ? products
            : products.filter(
                product => product.category === selectedCategory
            );

    return (
    <div className="catalogPage">
       <CategoryFilter
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
            />

        <div className="catalog">
            {products.map(product => (
                <ProductCard
                    key={product._id}
                    title={product.name}
                    description={product.description}
                    imgSource={product.image}
                    price={product.price}
                />
            ))}
        </div> 
    </div>
);
}