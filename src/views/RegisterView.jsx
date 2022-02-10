import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import { ContactForm, Label, Input, Button } from "../components/Form/Form.styled";
import { FormContainer } from "./Views.styled";

export default function RegisterView() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleInputChange = ({target: {name, value}}) => {
        switch (name) {
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
        dispatch(authOperations.register({email, password}));
        setEmail('');
        setPassword('');
        alert("Please, verify your email!")
    };

    return (
        <FormContainer>
            <h1>Register</h1>

            <ContactForm onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    Email
                    <Input 
                    type="email" 
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    />
                </Label>

                <Label>
                    Password
                    <Input 
                    type="password" 
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    />
                </Label>

                <Button type="submit">Register</Button>
            </ContactForm>

            </FormContainer>
    )

}