import { useState } from "react";
import { addNewContact } from "../../redux/contacts/contacts-operations";
import {getContacts} from "../../redux/contacts/contacts-selectors";
import { useSelector, useDispatch } from "react-redux";
import {ContactForm, Button, Label, Input} from './Form.styled.js';

export default function Form() {

const contacts = useSelector(getContacts);
const dispatch = useDispatch();
const [name, setName] = useState('');
const [phone, setPhone] = useState('');
const [email, setEmail] = useState('');

const handleInputName = (e) => {
    const {name, value} = e.currentTarget;
    switch (name) {
        case "name":
            setName(value);
            break;
        case "email":
            setEmail(value);
            break;
        case "phone": 
            setPhone(value);
            break;
        default:
            break;
    }


    // name === 'name' ? setName(value) : setNumber(value);
};

const onSubmit = (name, email, phone) => dispatch(addNewContact({name, email, phone}));

const handleSubmit = (e) => {
    e.preventDefault();

    const existingContact = contacts.find(contact => 
    contact.name.toLowerCase() === name.toLowerCase());
        
    if(existingContact) {
        alert(`${name} is already in the list.`);
        return;
    };

    onSubmit(name, email, phone);

    reset();
};

const reset = () => {
    setName('');
    setPhone('');
    setEmail('');
};

return(
    <ContactForm onSubmit={handleSubmit}>
    <Label> 
        Name
    <Input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
    value={name}
    onChange={handleInputName}
    required  
    />
    </Label>

    <Label>
        Email
    <Input
    type="text"
    name="email"
    required
    value={email}
    onChange={handleInputName}
    />
    </Label>

    <Label>
        Phone
    <Input
    type="tel"
    name="phone"
    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
    required
    value={phone}
    onChange={handleInputName}
    />
    </Label>

    <Button type="submit">Add contact</Button>
    </ContactForm>
);
}
