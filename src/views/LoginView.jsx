import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import { FormContainer } from "./views.styled";
import { ContactForm, Label, Input, Button } from "../components/Form/Form.styled";

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
        <FormContainer>
            <h1>Login</h1>

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

                <Button type="submit">Login</Button>

            </ContactForm>
        </FormContainer>
    )

}