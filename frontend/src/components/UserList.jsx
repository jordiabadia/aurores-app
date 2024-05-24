const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div>
            <h2>Lista de Usuarios</h2>
            <ul>
                {users.map(user => (
                    <li key={user.user_id}>
                        {user.username} - {user.email} - {user.role}
                        <button onClick={() => onEdit(user)} className="bg-yellow-500 text-white p-2 rounded ml-4">Editar</button>
                        <button onClick={() => onDelete(user.user_id)} className="bg-red-500 text-white p-2 rounded ml-4">Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
