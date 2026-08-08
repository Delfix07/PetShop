import {Navigate} from "react-router-dom";

export default function PrivateRouter({children}){
    const user = JSON.parse(
        localStorage.getItem("user")
    );

    if (!user) {

        return <Navigate to="/" />;

    }

    if (
        user.role !== "admin" &&
        user.role !== "seller"
    ) {

        return <Navigate to="/" />;

    }

    return children;

}

//Revisar