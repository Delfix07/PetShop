import { Link } from "react-router-dom";
import {SearchBar, Hamburguer} from "../molecules/Index.js";
import {FaShoppingCart, FaBars, FaSearch} from "react-icons/fa";
import logo from "../../assets/logo.png";

export default function NavBar({onSearch}){
    return(
        <div className="navBar"> 
            <Link to="/">
                <img id="logo" src={logo} alt="logo"/>
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