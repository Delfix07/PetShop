import { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard.jsx";
import UserForm from "./UserForm.jsx";

export default function Users() {
    const [users, setUsers] = useState([])
    const [editId, setEditId] = useState(null)
    const [newUser, setNewUser] = useState({
        name: "",
        surname: "",
        email: "",
        role: "user"
    })
    const [error, setError] = useState("")

    async function getUsers() {

        try {
            const response = await axios.get(
                "http://localhost:3000/user/register"
            )
            setUsers(response.data)
        } catch (error) {
            console.error(error)
            setError("Error loading users")
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    async function updateUser(user) {

        try {
            const response = await axios.put(
                `http://localhost:3000/user/register/${editId}`,
                user
            )
            setUsers(
                users.map((currentUser) =>
                    currentUser._id === editId
                        ? response.data
                        : currentUser
                )
            )
            setEditId(null)
            setNewUser({
                name: "",
                surname: "",
                email: "",
                role: "user"
            })

        } catch (error) {
            console.error(error)
            setError("Error updating user")
        }
    }

    async function deleteUser(id) {

        try {
            await axios.delete(
                `http://localhost:3000/user/register/${id}`
            )
            setUsers(
                users.filter(
                    (user) => user._id !== id
                )
            )

        } catch (error) {
            console.error(error)
            setError("Error deleting user")
        }
    }

    return (
        <div>
            {error && <p>{error}</p>}
            {editId && (
                <UserForm
                    onSave={updateUser}
                    newUser={newUser}
                    setNewUser={setNewUser}
                />
            )}
            <div>
                {users.length > 0 ? (
                    users.map((user) => (
                        <UserCard
                            key={user._id}
                            user={user}
                            deleteUser={deleteUser}
                            setEditId={setEditId}
                            setNewUser={setNewUser}
                        />
                    ))
                ) : (
                    <p>No users found.</p>

                )}
            </div>
        </div>
    )
}