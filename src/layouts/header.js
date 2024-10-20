import React from 'react';
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';
=======
<<<<<<< HEAD
import { Link, useNavigate } from 'react-router-dom';
=======
import { useNavigate } from 'react-router-dom';
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
import { useAuth } from '../App';

function Header() {
    const navigate = useNavigate();
    const { logout, user } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const defaultAvatar = 'https://via.placeholder.com/40';

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container justify-content-between">
                <div className="text-center mx-auto">
                    <h3>Lost & Found App</h3>
                </div>
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <img
                                    src={user && user.photo ? user.photo : defaultAvatar}
                                    alt={user ? user.name : 'User'}
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                />
<<<<<<< HEAD
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className='dropdown-item' to={'/me'}>Profile</Link></li>
=======
<<<<<<< HEAD
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><Link className='dropdown-item' to={'/me'}>Profile</Link></li>
=======
                                <span>{user ? user.name : 'User'}</span>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
                                <li>
                                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;