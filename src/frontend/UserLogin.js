import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null); // To store error messages
    const [loading, setLoading] = useState(false); // To handle loading state

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submitting
        setError(null); // Clear previous error messages

        try {
            const response = await axios.post('http://localhost:8080/usermanagement/login/', {
                username,
                password,
            });

            if (response.status === 200) {
                alert('Login successful!');
                // Here you could redirect to a dashboard or another page
                // Example: window.location.href = '/dashboard';
            }
        } catch (error) {
            console.error('Error logging in:', error);
            if (error.response) {
                alert('Invalid Credentials!');
                // Server responded with a status other than 200
                setError(error.response.data.error || 'Login failed.');
            } else {
                setError('An unexpected error occurred.');
            }
        } finally {
            setLoading(false); // Reset loading state after the API call
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        </div>
    );
};

export default Login;
