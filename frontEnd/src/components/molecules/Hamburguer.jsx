import { useState } from "react"; 
import {useSelector, useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaBars, FaSearch } from "react-icons/fa";
import { FaUser, FaBoxOpen, FaSignOutAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";


export default function Hamburguer(){
    const [open, setOpen] = useState(false);
    const { isLogged } = useSelector(state => state.user);
    const dispatch = useDispatch();


        return (
            <>
                <button className="menuButton" onClick={() => setOpen(!open)}><FaBars /></button>

                {open && (
                    <div className="menu">

                        {isLogged ? (
                            <>
                                <Link to="/profile"><FaUser /><span>Account</span></Link>
                                <Link to="/orders"><FaBoxOpen /><span>My Orders</span></Link>
                                <button onClick={() => dispatch(logout())}><FaSignOutAlt /><span>Log Out</span></button>
                            </>
                        ) : (
                            <>
                                <Link to="/login">Log In</Link>
                                <Link to="/register">Register</Link>
                            </>
                        )}

                    </div>
                )}
            </>
    );
}