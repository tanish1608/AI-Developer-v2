import React from 'react';
import axios from 'axios';
import './Register.module.css';
import { AuthContext } from '../context/AuthContext';

function Register() {
const [username, setUsername] = React.useState('');
const [email, setEmail] = React.useState('');
const [password, setPassword] = React.useState('');
const { register } = useContext(AuthContext);

const handleSubmit = async (event) => {
event.preventDefault();
try {
const response = await axios.post('/api/auth/register', { username, email, password });
register(response.data.token);
window.location.href = '/';
} catch (error) {
console.error(error);
}
};

return (
<div className="page-register">
<h1 className="page-heading">Register</h1>
<p className="page-description">
Please enter your details to register.
</p>
<form onSubmit={handleSubmit}>
<label>
Username:
<input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
</label>
<br />
<label>
Email:
<input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
</label>
<br />
<label>
Password:
<input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
</label>
<br />
<button type="submit">Register</button>
</form>
</div>
);
}

export default Register;