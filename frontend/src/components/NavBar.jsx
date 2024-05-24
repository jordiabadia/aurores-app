import { Link } from 'react-router-dom';

const NavBar = () => {
    const role = localStorage.getItem('role');

    return (
        <nav className="bg-gradient-to-r from-pink-400 to-yellow-200 p-6 flex justify-between items-center">
            <div className="flex items-center">
                <Link to="/">
                    <img
                        src="/logoAurores.png"
                        width={75}
                        height={50}
                        alt="Logo de Aurores"
                    />
                </Link>
                <div className="flex justify-center items-center ml-32 text-xl gap-14">
                    <Link to="/about" className="hover:text-gray-700">El nostre espai</Link>
                    <Link to="/activities" className="hover:text-gray-700">Activitats</Link>
                    <Link to="/calendari" className="hover:text-gray-700">Calendari</Link>
                    <Link to="/preus" className="hover:text-gray-700">Preus</Link>
                    {role === '1' && <Link to="/manageActivities" className="hover:text-gray-700">Gestión de Actividades</Link>}
                </div>
            </div>
            <div className="flex gap-4 mr-8">
                {!role ? (
                    <>
                        <Link to="/login" className="text-black hover:text-gray-700">Iniciar sessió</Link>
                        <div className="border-l h-6 border-black"></div>
                        <Link to="/register" className="text-black hover:text-gray-700">Registra't</Link>
                    </>
                ) : (
                    <button onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('role');
                        window.location.reload();
                    }} className="text-black hover:text-gray-700">Cerrar sesión</button>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
