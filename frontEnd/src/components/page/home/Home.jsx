import { useEffect, useState } from "react";
import axios from "axios";
import NavBar from "../../organisms/NavBar.jsx";
import ProductCard from "../../molecules/ProductCard.jsx";

export default function Home(){
    const [products, setProducts] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/products");
            setProducts(response.data);
        } catch (error) {
            console.error(error);
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
            setProducts(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => { getProducts(); }, []);

    return (
        <>
            <NavBar onSearch={handleSearch} />

            {products.map(product => (
                <ProductCard
                    key={product._id}
                    product={product}
                />
            ))}
        </>
    );
}