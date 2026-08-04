import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';

import Home from "./components/page/home/Home.jsx";
import Register from './components/page/register/Register.jsx';
import Login from "./components/page/Login/Login.jsx";

function App(){
    return(
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
    </Routes>
    )

}
export default App