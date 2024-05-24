import { useEffect, useState } from 'react';
import ActivityForm from '../components/ActivityForm';

const ManageActivities = () => {
    const [activities, setActivities] = useState([]);
    const [editingActivity, setEditingActivity] = useState(null);

    useEffect(() => {
        const fetchActivities = async () => {
            const response = await fetch('/api/activities');
            const data = await response.json();
            setActivities(data);
        };

        fetchActivities();
    }, []);

    const handleAddActivity = async (activity) => {
        const response = await fetch('/api/activities', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activity)
        });
        const newActivity = await response.json();
        setActivities([...activities, newActivity]);
    };

    const handleEditActivity = async (activity) => {
        const response = await fetch(`/api/activities/${activity.activity_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(activity)
        });
        const updatedActivity = await response.json();
        setActivities(activities.map((a) => (a.activity_id === updatedActivity.activity_id ? updatedActivity : a)));
        setEditingActivity(null);
    };

    const handleDeleteActivity = async (activityId) => {
        await fetch(`/api/activities/${activityId}`, {
            method: 'DELETE'
        });
        setActivities(activities.filter((a) => a.activity_id !== activityId));
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Gestión de Actividades</h1>
            <ActivityForm onSubmit={editingActivity ? handleEditActivity : handleAddActivity} initialData={editingActivity || {}} />
            <ul className="mt-4">
                {activities.map((activity) => (
                    <li key={activity.activity_id} className="flex justify-between items-center mb-4">
                        <div>
                            <h2 className="text-xl">{activity.name}</h2>
                            <p>{activity.description}</p>
                            <p>{activity.price} EUR</p>
                        </div>
                        <div>
                            <button onClick={() => setEditingActivity(activity)} className="bg-yellow-500 text-white p-2 rounded">Editar</button>
                            <button onClick={() => handleDeleteActivity(activity.activity_id)} className="bg-red-500 text-white p-2 rounded ml-2">Eliminar</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageActivities;
