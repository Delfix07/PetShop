import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';

import Home from "./components/page/home/Home.jsx";
import Register from './components/page/register/Register.jsx';
import Login from "./components/page/Login/Login.jsx";
import Catalog from './components/page/catalog/Catalog.jsx';
import ProductDetails from './components/molecules/ProductDetails.jsx';
import Cart from './components/page/cart/cart.jsx';

function App(){
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/products" element={<Catalog/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
    </Routes>
    )

}
export default App