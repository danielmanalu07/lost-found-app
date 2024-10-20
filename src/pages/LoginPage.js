import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import '../styles/login.css';
=======
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
import { useAuth } from '../App';
import '../styles/login.css';
import { login } from '../services/api';

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
<<<<<<< HEAD
    const navigate = useNavigate();
    const { login: authLogin } = useAuth();
=======
<<<<<<< HEAD
    const navigate = useNavigate();
    const { login: authLogin } = useAuth();
=======
<<<<<<< HEAD
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();
=======
    const navigate = useNavigate();
    const { login: authLogin } = useAuth();
>>>>>>> master
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        setSuccess('');

        try {
            const response = await axios.post('https://public-api.delcom.org/api/v1/auth/login', {
                email,
                password
            });

            if (response.data && response.data.data.token) {
                localStorage.setItem('token', response.data.data.token);
                navigate('/login');
                setSuccess(response.data.message);
=======
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78

        try {
            const data = await login(email, password);
            if (data && data.data.token) {
                authLogin(data.data.token, data.data.user);
                localStorage.setItem('success', data.message);
                navigate('/');
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
            } else {
                setError('Login gagal: Token tidak ditemukan dalam respons.');
            }
        } catch (error) {
            if (error.response && error.response.status === 404) {
                setError('Login gagal: Email atau password salah.');
            } else {
                setError('Terjadi masalah pada server, coba lagi nanti.');
            }
        } finally {
            setLoading(false);
        }
    };

<<<<<<< HEAD

=======
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======

>>>>>>> master
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 login-card w-75 bg-light">
                <h3 className="text-center mb-4">Login</h3>

                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                {success && (
                    <div className="alert alert-success" role="alert">
                        {success}
                    </div>
                )}

=======
>>>>>>> master
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
                <form onSubmit={handleLogin} className="animate__animated animate__fadeIn">
                    <div className="form-group mb-3">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Masukkan Email"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Masukkan Password"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100"
                        disabled={loading}
                    >
                        {loading ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                            'Login'
                        )}
                    </button>
                </form>
                <div className="text-center mt-3">
                    <p>
                        Tidak mempunyai akun? <Link to="/register">Daftar</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

<<<<<<< HEAD
export default LoginPage;
=======
<<<<<<< HEAD
export default LoginPage;
=======
<<<<<<< HEAD
export default LoginPage;
=======
export default LoginPage;
>>>>>>> master
>>>>>>> 185eaa44b215457e81088093694d8f886ac9df2c
>>>>>>> dc46d500518e29e83d8d90e839e57c36b9e73b78
