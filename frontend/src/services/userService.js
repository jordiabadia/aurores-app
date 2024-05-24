const API_URL = 'http://localhost:3000/api/users';

export const fetchUsers = async () => {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error('Error fetching users');
    }
    return response.json();
};

export const createUser = async (userData) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error('Error creating user');
    }
    return response.json();
};

export const updateUser = async (userId, userData) => {
    const response = await fetch(`${API_URL}/${userId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });
    if (!response.ok) {
        throw new Error('Error updating user');
    }
    return response.json();
};

export const deleteUser = async (userId) => {
    const response = await fetch(`${API_URL}/${userId}`, {
        method: 'DELETE'
    });
    if (!response.ok) {
        throw new Error('Error deleting user');
    }
    return response.json();
};
