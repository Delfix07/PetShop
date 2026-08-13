import { Link } from "react-router-dom";
import {SearchBar, Hamburguer} from "../molecules/Index.js";
import {FaShoppingCart} from "react-icons/fa";
import logo from "../../assets/logo.png";
import "./NavBar.css"
export default function NavBar({onSearch}){
    return(
        <div className="navBar"> 
            <Link to="/">
                <img id="logo" src={logo} alt="logo" height="60"/>
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