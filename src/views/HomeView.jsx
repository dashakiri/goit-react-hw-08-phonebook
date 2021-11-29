// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { authOperations } from "../redux/auth";
import { FormContainer } from "./views.styled";
import image from '../img/Hand holding mobile phone with chat messages on screen.jpg';
import { Image} from "./views.styled";
// import { ContactForm, Label, Input, Button } from "../components/Form/Form.styled";

export default function HomeView() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const dispatch = useDispatch();

    // const handleInputChange = ({ target: {name, value}}) => {
    //     name === 'email' ? setEmail(value) : setPassword(value);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     dispatch(authOperations.logIn({email, password}));
    //     setEmail('');
    //     setPassword('');
    // };

    return(
        <FormContainer>
            <h1>Keep your contacts safe and organised!</h1>

               <Image src={image} alt="hand holding a mobile phone"/> 

            
        </FormContainer>
    )

}