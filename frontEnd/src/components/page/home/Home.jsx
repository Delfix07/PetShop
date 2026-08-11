import { useEffect, useState } from "react";
import axios from "axios";
import {NavBar} from "../../organisms/index.js";
import {ProductCard, HomeCarousel} from "../../molecules/Index.js";

export default function Home(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const getProducts = async () => {
        try {
            setLoading(true)
            const response = await axios.get("http://localhost:3000/products")
            setProducts(response.data)
        } catch (error) {
            console.error(error)
        }
    };

    const handleSearch = async (text) => {
        try {
            const response = await axios.get(
                "http://localhost:3000/products",
                {
                    params: {search: text}
                }
            );
            setProducts(response.data)
        } catch (error) {
            console.error(error)
        } finally {
      setLoading(false);
    }
    };

    useEffect(() => { getProducts(); }, []);

    return (
        <>
            <NavBar onSearch={handleSearch} />
            <HomeCarousel/>
            <main className="productGrid">
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
            </main>
        </>
    )
}

