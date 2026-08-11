export default function UserForm({
    onSave,
    newUser,
    setNewUser,
}) {

    function onSubmit(event) {
        event.preventDefault()
        onSave(newUser)
    }

    function handleChange(event) {
        setNewUser({
            ...newUser,
            [event.target.name]: event.target.value
        })
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Edit User</h2>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={newUser.name}
                onChange={handleChange}
            />
            <label htmlFor="surname">Surname</label>
            <input
                type="text"
                id="surname"
                name="surname"
                value={newUser.surname}
                onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                value={newUser.email}
                onChange={handleChange}
            />
            <label htmlFor="role">Role</label>
            <select
                id="role"
                name="role"
                value={newUser.role}
                onChange={handleChange}
            >
                <option value="user">User</option>
                <option value="seller">Seller</option>
                <option value="admin">Admin</option>
            </select>
            <button type="submit">Edit User</button>
            <button
                type="button"
                onClick={() => {
                    setNewUser({
                        name: "",
                        surname: "",
                        email: "",
                        role: "user"
                    })
                }}
            >Cancel</button>
        </form>
    )
}
