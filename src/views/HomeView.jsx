import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

export default function HomeView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = ({ target: {name, value}}) => {
        name === 'email' ? setEmail(value) : setPassword(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(authOperations.logIn({email, password}));
        setEmail('');
        setPassword('');
    };

    return(
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Email 
                    <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    />
                </label>

                <label>
                    Password 
                    <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    />
                </label>

                <button type="submit">Login</button>

            </form>
        </div>
    )

}