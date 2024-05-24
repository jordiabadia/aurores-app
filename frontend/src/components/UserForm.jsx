import { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, initialData = {} }) => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: ''
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                username: initialData.username || '',
                email: initialData.email || '',
                password: '',
                role: initialData.role || ''
            });
        }
    }, [initialData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Nombre de usuario"
                className="p-2 border rounded"
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className="p-2 border rounded"
            />
            <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Contraseña"
                className="p-2 border rounded"
            />
            <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Rol (admin/user/professional)"
                className="p-2 border rounded"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Guardar</button>
        </form>
    );
};

export default UserForm;
