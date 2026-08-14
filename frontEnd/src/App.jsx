import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';

import Home from "./components/page/home/Home.jsx";
import Register from './components/page/register/Register.jsx';
import Login from "./components/page/Login/Login.jsx";
import Catalog from './components/page/catalog/Catalog.jsx';
import ProductDetails from './components/molecules/ProductDetails.jsx';
import Cart from './components/page/cart/cart.jsx';
import Admin from './components/page/admin/Admin.jsx';
import Seller from './components/page/seller/Seller.jsx';
import Checkout from "./components/page/checkout/Checkout.jsx";
import Orders from './components/page/orders/Orders.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App(){
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/products" element={<Catalog/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/admin" element={
            <ProtectedRoute role="admin">
                <Admin />
            </ProtectedRoute>
        }/>
        <Route path="/seller" element={
            <ProtectedRoute role="seller">
                <Seller />
            </ProtectedRoute>
        }/>
        <Route path='/orders' element={<Orders/>}/>
    </Routes>
    )
}
export default App

//Profe, el apartado de Profile no llegue a hacerlo y tengo entendido que no era obligatorio. 
//Figura en el sitio pero no lleva a ningun lado...queria avisar que no se trataba de un error.
//En el proceso de este sitio web, me di cuenta que hay mucho que debo seguir indagando y aprendiendo. 
//Muchas gracias por todo y espero que le guste mi app.
//EN EL README ESTAN LAS CREDENCIALES PARA SELLER Y ADMIN!!!    