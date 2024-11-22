import { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
const [token, setToken] = useState(null);

useEffect(() => {
const storedToken = localStorage.getItem('token');
if (storedToken) {
setToken(storedToken);
}
}, []);

const login = (token) => {
setToken(token);
localStorage.setItem('token', token);
};

const register = (token) => {
login(token);
};

return { token, login, register };
};

export { AuthProvider };
export default AuthContext;