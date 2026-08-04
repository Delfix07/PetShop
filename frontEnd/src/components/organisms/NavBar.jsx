import { Link } from "react-router-dom";
import SearchBar from "../molecules/SearchBar.jsx";
import Hamburguer from "../molecules/Hamburguer.jsx";
import {FaShoppingCart, FaBars, FaSearch} from "react-icons/fa";

export default function NavBar({onSearch}){
    return(
        <div className="navBar"> 
            <Link to="/">
                <img id="logo" src="" alt="logo"/>
            </Link>
        <SearchBar onSearch={onSearch}/>

        <Link to="/cart">
            <button className="cart" type="button"><FaShoppingCart /></button>
        </Link>
        <Hamburguer/>

        </div>
    );
}

//modificar?? ver en bootstrap react