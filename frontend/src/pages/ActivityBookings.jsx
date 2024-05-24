import { useEffect, useState } from 'react';

const ActivityBookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const fetchBookings = async () => {
            const response = await fetch('/api/activityBookings');
            const data = await response.json();
            setBookings(data);
        };

        fetchBookings();
    }, []);

    return (
        <div>
            <h1>Reservas de Actividades</h1>
            <ul>
                {bookings.map((booking) => (
                    <li key={booking.booking_id}>
                        <h2>Reserva {booking.booking_id}</h2>
                        <p>Usuario ID: {booking.user_id}</p>
                        <p>Actividad ID: {booking.activity_id}</p>
                        <p>Sesión ID: {booking.session_id}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityBookings;
