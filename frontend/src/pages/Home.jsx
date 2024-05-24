import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="flex flex-col items-center mt-8">
            <h1 className="text-4xl font-bold mb-4">Bienvenidos a Aurores</h1>
            <nav>
                <ul className="flex space-x-4">
                    <li><Link to="/about" className="text-blue-500 hover:underline">Acerca de Nosotros</Link></li>
                    <li><Link to="/activities" className="text-blue-500 hover:underline">Actividades</Link></li>
                    <li><Link to="/calendari" className="text-blue-500 hover:underline">Calendario</Link></li>
                    <li><Link to="/preus" className="text-blue-500 hover:underline">Precios</Link></li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
