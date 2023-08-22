import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from '@reach/router'; // Assuming you're using Reach Router for navigation

const UpdateAuthor = () => {
    // State variables to store input values
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate(); // Initialize the navigation function

    // Fetch author data from API when component loads
    useEffect(() => {
        // Fetch data using axios here (you need to replace 'your-api-url' with the actual URL)
        axios.get('your-api-url')
            .then(response => {
                // Update state variables with fetched data
                setFirstName(response.data.firstName);
                setLastName(response.data.lastName);
            })
            .catch(error => {
                // Handle error if needed
                console.error(error);
            });
    }, []);

    // Function to handle form submission
    const handleSubmit = e => {
        e.preventDefault();

        // Create an object with updated data
        const updatedAuthor = {
            firstName: firstName,
            lastName: lastName,
        };

        // Send PUT/PATCH request to update author data
        axios.put('http//localhost:8000/api/authors', updatedAuthor)
            .then(response => {
                // Redirect to another page after successful update
                navigate('/'); // Redirect to the main page, change the path as needed
            })
            .catch(error => {
                // Handle error if needed
                console.error(error);
            });
    };

    return (
        <div>
            <h2>Update Author</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input
                        type="text"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                        type="text"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                    />
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default UpdateAuthor;
