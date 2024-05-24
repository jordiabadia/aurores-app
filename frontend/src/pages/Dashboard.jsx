import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [role, setRole] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userRole = localStorage.getItem('role');

        if (!token) {
            navigate('/login');
        } else {
            setRole(userRole);
        }
    }, [navigate]);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Dashbojhgjhgjhgjhard</h1>
            {role === '1' && <p>Contenido para administradores</p>}
            {role === '2' && <p>Contenido para usuarios regulares</p>}
            {role === '3' && <p>Contenido para profesionales</p>}
        </div>
    );
};

export default Dashboard;
