import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
    const { isLogged, currentUser } = useSelector(
        state => state.user
    )
    if (!isLogged || !currentUser) {
        return <Navigate to="/login" replace />
    }
    if (role && currentUser.role !== role) {
        return <Navigate to="/" replace />
    }
    return children
}