import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="navBar"> 
            <link to="/">
                <img id="logo" src="" alt="logo"/>
            </link>
    
            <input className="search" type="text" placeholder="Search..." onChange={() => {}}></input>
            <button className="user" onClick={() => {}} type="button"><img className="user" src="" alt=""/></button>
            <button className="options" onClick={() => {}} type="button"><img className="options" src="" alt=""/></button>
        </div>
    );
}

//modificar?? ver en bootstrap react