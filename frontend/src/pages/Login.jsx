import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (response.ok) {
                // Almacenar el token y el rol en el localStorage
                localStorage.setItem('token', data.token);
                localStorage.setItem('role', data.role);
                // Redirigir al dashboard
                navigate('/dashboard');
            } else {
                setError(data.error || 'Error al iniciar sesión');
            }
        } catch (error) {
            setError('Error al iniciar sesión');
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-sm">
                <h1 className="text-2xl font-bold mb-4">Iniciar sesión</h1>
                {error && <div className="text-red-500 mb-4">{error}</div>}
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo electrónico"
                    className="p-2 border rounded w-full mb-4"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Contraseña"
                    className="p-2 border rounded w-full mb-4"
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded w-full">Iniciar sesión</button>
            </form>
        </div>
    );
};

export default Login;
