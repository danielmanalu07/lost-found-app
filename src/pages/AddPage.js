import React, { useState } from 'react';
import Swal from 'sweetalert2';
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
=======
import { Link, useNavigate } from "react-router-dom";
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
import { addLostAndFoundData } from '../services/api';
import Header from '../layouts/header';

function AddPage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState('lost');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
<<<<<<< HEAD
            await addLostAndFoundData(title, description, status);
=======
<<<<<<< HEAD
            await addLostAndFoundData(title, description, status);
=======
            const response = await addLostAndFoundData(title, description, status);
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
            Swal.fire({
                title: 'Success!',
                text: 'Data has been added successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            }).then(() => {
<<<<<<< HEAD
                navigate('/');
=======
<<<<<<< HEAD
                navigate('/');
=======
                navigate('/'); // Redirect to homepage after success
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
            });
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'Failed to add data. Please try again.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <div>
            <Header />
            <div className="container w-50 my-5">
                <div className="card">
                    <div className="card-header">
                        <h4>Add Lost & Found Item</h4>
                    </div>
                    <div className="card-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Title</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea
                                    className="form-control"
                                    id="description"
                                    rows="3"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="status" className="form-label">Status</label>
                                <select
                                    className="form-select"
                                    id="status"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    required
                                >
                                    <option value="lost">Lost</option>
                                    <option value="found">Found</option>
                                </select>
                            </div>
                            <button type="submit" className="btn btn-primary m-2">Add</button>
<<<<<<< HEAD
                            <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
=======
<<<<<<< HEAD
                            <button className="btn btn-secondary" onClick={() => navigate(-1)}>Back</button>
=======
                            <Link to={'/'} className='btn btn-info'>Batal</Link>
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPage;
