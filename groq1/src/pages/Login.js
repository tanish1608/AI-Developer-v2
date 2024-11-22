import React from 'react';
import {useSearchParams} from 'react-router-dom';
import './Login.module.css';
import axios from 'axios';
import { AuthContext } from '../context/AuthContext';

function Login() {
const [searchParams] = useSearchParams();
const { login } = useContext(AuthContext);

const handleLogin = async (event) => {
event.preventDefault();
const username = event.target.elements.username.value;
const password = event.target.elements.password.value;
try {
const response = await axios.post('/api/auth/login', { username, password });
login(response.data.token);
const redirectUrl = searchParams.get('redirect');
if (redirectUrl) {
window.location.href = redirectUrl;
}
} catch (error) {
console.error(error);
}
};

return (
<div className="page-login">
<h1 className="page-heading">Login</h1>
<p className="page-description">
Please enter your credentials to login.
</p>
<form onSubmit={handleLogin}>
<label>
Username:
<input type="text" name="username" />
</label>
<br />
<label>
Password:
<input type="password" name="password" />
</label>
<br />
<button type="submit">Login</button>
</form>
</div>
);
}

export default Login;