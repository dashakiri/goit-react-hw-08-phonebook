import { useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import { ContactForm, Label, Input, Button } from "../components/Form/Form.styled";
import { FormContainer } from "./views.styled";

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
        // console.log(name)     
        dispatch(authOperations.register({name, email, password}));
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <FormContainer>
            <h1>Register</h1>

            <ContactForm onSubmit={handleSubmit} autoComplete="off">
                <Label>
                    Name
                    <Input 
                    type="text" 
                    name="name"
                    value={name}
                    minlength="5"
                    onChange={handleInputChange}
                    />
                </Label>

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
                    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    // title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    onChange={handleInputChange}
                    />
                </Label>

                <Button type="submit">Register</Button>
            </ContactForm>
        </FormContainer>
    )

}