export default function UserCard({
    user,
    deleteUser,
    setEditId,
    setNewUser
}) {

    function editUser() {
        setEditId(user._id)

        setNewUser({
            name: user.name,
            surname: user.surname,
            email: user.email,
            role: user.role
        })
    }

    return (
        <div>
            <h3>{user.name} {user.surname}</h3>
            <p>{user.email}</p>
            <p>Role: {user.role}</p>
            <button onClick={editUser}>Edit</button>
            <button onClick={() => deleteUser(user._id)}>Delete</button>
        </div>
    )
}