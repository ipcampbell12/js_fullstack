import { useState } from 'react';
import { loginUser } from '../NetworkCalls';

function Login(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const login = () => {
        const loginObject = {
            username: username,
            password: password
        }

        loginUser(loginObject);

        setUsername('')
        setPassword('');

    }
    return (
        <div>
            <h1>Login Page</h1>
            <input type="text" value={username} onChange={setUsername(e.target.value)} />
            <input type="password" value={password} onChange={setPassword(e.target.value)} />

            <button onClick={login}>Login</button>
        </div>
    );
}

export default Login;