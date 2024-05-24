import { useEffect, useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';
import { fetchUsers, createUser, updateUser, deleteUser } from '../services/userService';

const UserManagement = () => {
    const [users, setUsers] = useState([]);
    const [editingUser, setEditingUser] = useState(null);

    useEffect(() => {
        const loadUsers = async () => {
            const response = await fetchUsers();
            setUsers(response);
        };
        loadUsers();
    }, []);

    const handleCreate = async (userData) => {
        const newUser = await createUser(userData);
        setUsers([...users, newUser]);
    };

    const handleUpdate = async (userId, userData) => {
        const updatedUser = await updateUser(userId, userData);
        setUsers(users.map(user => user.user_id === userId ? updatedUser : user));
        setEditingUser(null);
    };

    const handleDelete = async (userId) => {
        await deleteUser(userId);
        setUsers(users.filter(user => user.user_id !== userId));
    };

    const handleEdit = (user) => {
        setEditingUser(user);
    };

    return (
        <div>
            <h1>Gestión de Usuarios</h1>
            <UserForm onSubmit={editingUser ? handleUpdate : handleCreate} initialData={editingUser} />
            <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
    );
};

export default UserManagement;
