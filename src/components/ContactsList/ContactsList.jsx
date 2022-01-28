import React, { useEffect }  from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneContact, fetchAllContacts } from "../../redux/contacts/contacts-operations";
import {getFilteredContacts} from "../../redux/contacts/contacts-selectors";
import {ListOfContacts, ListItem, Button} from './ContactList.styled';

export default function ContactsList () {    
    const contacts = useSelector(getFilteredContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllContacts());
    }, [dispatch]);

    const deleteOnClick = (id) => dispatch(deleteOneContact(id));

    return(
    <ListOfContacts>
        {contacts.map(({_id, name, phone}) => {
        return (<ListItem key={_id}><span>{name}: {phone}</span>
        <Button type="button" onClick={() => deleteOnClick(_id)}
        >Delete</Button>
        </ListItem>)})}
    </ListOfContacts>        
    )
};
