import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAuthor = () => {
    const [newAuthorName, setNewAuthorName] = useState('');

    const navigate = useNavigate();



const handleSubmit=(e)=> {  //will run when we submit the form, meaning when we click the "Add Author" button.
    e.preventDefault()
    axios.post('http//localhost:8000/api/authors/new', { name: newAuthorName })
        .then()
        .catch(error)
        console.log('Error creating author:', error);
}


    return (
        <div className="container mt-5">
            <h2>Add New Author:</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="authorName" className="form-label">Author's Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="authorName"
                        placeholder="Enter author's name"
                        value={newAuthorName}
                        onChange={(e) => setNewAuthorName(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Add Author</button>
            </form>
        </div>
    );
};

export default CreateAuthor;
