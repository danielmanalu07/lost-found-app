import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link, useNavigate } from "react-router-dom";
import Header from '../layouts/header';
<<<<<<< HEAD
import { fetchLostAndFoundData, deleteLostAndFoundData, getDailyStats, getMonthlyStats } from '../services/api';
import { useAuth } from '../App';
=======
import { fetchLostAndFoundData } from '../services/api';
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c

function HomePage() {
    const [lostAndFoundItems, setLostAndFoundItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();
<<<<<<< HEAD
    const { user } = useAuth();
    const [stats, setStats] = useState(null);
=======
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c

    useEffect(() => {
        const successMessage = localStorage.getItem('success');
        if (successMessage) {
            Swal.fire({
                title: 'Login Berhasil!',
                text: successMessage,
                icon: 'success',
                confirmButtonText: 'OK'
            });
            localStorage.removeItem('success');
        }

        fetchData();
    });

    const fetchData = async () => {
        try {
<<<<<<< HEAD
            const userId = user ? user.id : null;

            if (!userId) {
                throw new Error('No user ID found');
            }

            const data = await fetchLostAndFoundData();
            const filteredData = data.filter(item => item.user_id === userId);
            setLostAndFoundItems(filteredData);
            setIsLoading(false);
        } catch (err) {
            if (err.message === 'No authentication token found') {
=======
            const data = await fetchLostAndFoundData();
            setLostAndFoundItems(data);
            setIsLoading(false);
        } catch (err) {
            if (err.message === false) {
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
                Swal.fire({
                    title: 'Authentication Error',
                    text: 'Please log in to view this page.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                }).then(() => {
                    navigate('/login');
                });
            } else {
                setError('Failed to fetch data. Please try again later.');
            }
            setIsLoading(false);
        }
    };

<<<<<<< HEAD
    const handleDelete = async (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: 'This action cannot be undone!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    await deleteLostAndFoundData(id);
                    setLostAndFoundItems(lostAndFoundItems.filter(item => item.id !== id));
                    Swal.fire(
                        'Deleted!',
                        'The item has been deleted.',
                        'success'
                    );
                } catch (error) {
                    Swal.fire(
                        'Error!',
                        'Failed to delete the item. Please try again.',
                        'error'
                    );
                }
            }
        });
    };

    const handleDailyStats = async () => {
        try {
            const endTime = new Date().toISOString();
            const totalData = lostAndFoundItems.length;

            const result = await getDailyStats(endTime, totalData);
            setStats(result);
            Swal.fire('Success', 'Daily Stats Loaded', 'success');
        } catch (error) {
            Swal.fire('Error', 'Failed to load daily stats', 'error');
        }
    };

    const handleMonthlyStats = async () => {
        try {
            const endTime = new Date().toISOString();
            const totalData = lostAndFoundItems.length;

            const result = await getMonthlyStats(endTime, totalData);
            setStats(result);
            Swal.fire('Success', 'Monthly Stats Loaded', 'success');
        } catch (error) {
            Swal.fire('Error', 'Failed to load monthly stats', 'error');
        }
    };



=======
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
    return (
        <div>
            <Header />
            <main>
                <div className='container w-50 my-5'>
                    <div className='card'>
                        <div className='card-header'>
                            <Link className='btn btn-sm btn-info' to={'/add'}>Tambah Data</Link>
                        </div>
                        <div className='card-body'>
<<<<<<< HEAD
                            <button className="btn btn-info me-2" onClick={handleDailyStats}>
                                View Daily Stats
                            </button>
                            <button className="btn btn-info" onClick={handleMonthlyStats}>
                                View Monthly Stats
                            </button>
=======
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
                            {isLoading ? (
                                <p className='text-center'>Loading...</p>
                            ) : error ? (
                                <p className="text-danger">{error}</p>
                            ) : (
                                <div className='table-responsive'>
                                    <table className='table table-bordered text-center'>
                                        <thead>
                                            <tr>
                                                <th>No</th>
                                                <th>Title</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {lostAndFoundItems.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.status}</td>
                                                    <td>
<<<<<<< HEAD
                                                        <Link className="btn btn-sm btn-warning me-2" to={`/${item.id}`}>
                                                            Detail
                                                        </Link>
                                                        <Link className="btn btn-sm btn-warning me-2" to={`/edit/${item.id}`}>
                                                            Edit
                                                        </Link>
                                                        <button
                                                            className="btn btn-sm btn-danger"
                                                            onClick={() => handleDelete(item.id)}
                                                        >
                                                            Delete
                                                        </button>
=======
                                                        <button className="btn btn-sm btn-warning me-2">Edit</button>
                                                        <button className="btn btn-sm btn-danger">Delete</button>
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
<<<<<<< HEAD
                                    {stats && (
                                        <div className="mt-5">
                                            <h3>Statistics</h3>
                                            <pre>{JSON.stringify(stats, null, 2)}</pre>
                                        </div>
                                    )}
=======
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

<<<<<<< HEAD
export default HomePage;
=======
export default HomePage;
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
