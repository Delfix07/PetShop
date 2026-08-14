import "./UserCard.css";

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
        <article className="userCard">
            <div className="userCardInfo">
                <div className="userAvatar">
                    {user.name?.charAt(0).toUpperCase()}
                </div>
                <div>
                    <h3>{user.name} {user.surname}</h3>
                    <p className="userEmail">{user.email}</p>
                </div>
            </div>
            <div className="userRole">
                <span className={`role-${user.role}`}>{user.role}</span>
            </div>
            <div className="userActions">
                <button
                    className="userEditButton"
                    onClick={editUser}
                >Edit</button>
                <button
                    className="userDeleteButton"
                    onClick={() => deleteUser(user._id)}
                >Delete</button>
            </div>
        </article>
    )
}