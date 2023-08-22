import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  // State variable to store the list of authors
  const [authors, setAuthors] = useState([]);

  // Function to fetch data from the API and update the state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/authors'); // Adjust the API endpoint
        setAuthors(response.data);
      } catch (error) {
        console.error('Error fetching authors:', error);
      }
    };

    fetchData();
  }, []); // The empty array means this effect runs only once, when the component mounts

  // Function to handle author deletion
  const handleDelete = async (authorId) => {
    try {
      await axios.delete(`/api/authors/${authorId}`); // Adjust the API endpoint
      // Remove the deleted author from the state
      setAuthors(authors.filter(author => author._id !== authorId));
    } catch (error) {
      console.error('Error deleting author:', error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Authors List</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(author._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
