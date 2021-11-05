import ContactsList from '../components/ContactsList/ContactsList';
import Form from '../components/Form/Form';
import Filter from '../components/Filter/Filter';
import { FormContainer } from './Views.styled';

export default function ContactsView() {
    return (
        <FormContainer>
          <h2>Phonebook</h2>

          <Form />

          <h2>Contacts</h2>

          <Filter />

          <ContactsList />
        </FormContainer>
    )
}