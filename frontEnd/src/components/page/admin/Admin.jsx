import Users from "./user/Users";
import Products from "./products/Products";

export default function Admin() {
    return (
        <div>
            <h1>Admin Panel</h1>
            <h2>Users</h2>
            <Users/>
            <h2>Products</h2>
            <Products/>

        </div>
    );
}