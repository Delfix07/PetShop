import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"

export default function SearchBar({onSearch}){
    const [search, setSearch] = useState("");
    useEffect(() => {
        const timer = setTimeout(() => {
            onSearch(search.trim());
        }, 400);
    return () => clearTimeout(timer);
    }, [search, onSearch]);

    return(
        <div className="searchBar">
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search..."/>
            <button type="button" onClick={() => onSearch(search.trim())}><FaSearch /></button>
        </div>
    )
    
    
}