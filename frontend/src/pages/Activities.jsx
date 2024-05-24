import { useEffect, useState } from 'react';

const ActivitiesPage = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        const fetchActivities = async () => {
            const response = await fetch('/api/activities');
            const data = await response.json();
            setActivities(data);
        };

        fetchActivities();
    }, []);

    return (
        <div>
            <h1>Actividades</h1>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.activity_id}>
                        <h2>{activity.name}</h2>
                        <p>{activity.description}</p>
                        <p>{activity.price} EUR</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivitiesPage;
