import { useEffect, useState } from 'react';

const ActivityCategories = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await fetch('/api/activityCategories');
            const data = await response.json();
            setCategories(data);
        };

        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Categorías de Actividades</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.category_id}>
                        <h2>{category.category_name}</h2>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityCategories;
