import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

export default function RegisterView() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = ({target: {name, value}}) => {
        switch (name) {
            case 'name': 
                return setName(value);
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();   
        console.log(name)     
        dispatch(authOperations.register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={handleSubmit} autoComplete="off">
                <label>
                    Name
                    <input 
                    type="text" 
                    name="name"
                    value={name}
                    onChange={handleInputChange}
                    />
                </label>

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

                <button type="submit">Register</button>
            </form>
        </div>
    )

}