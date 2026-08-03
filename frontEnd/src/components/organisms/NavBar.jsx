import { Link } from "react-router-dom";
import SearchBar from "../molecules/SearchBar.jsx";
import Burguer from "../molecules/Burguer.jsx";

export default function NavBar(){
    return(
        <div className="navBar"> 
            <Link to="/">
                <img id="logo" src="" alt="logo"/>
            </Link>
        <SearchBar/>

        <Link to="/cart">
            <button className="cart" type="button">🛒</button>
        </Link>
        <Burguer/>

        </div>
    );
}

//modificar?? ver en bootstrap react