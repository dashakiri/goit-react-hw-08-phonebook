import ContactsList from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <div>
      <h2>Phonebook</h2>

      <Form />

      <h2>Contacts</h2>

      <Filter />

      <ContactsList />
    </div>
  );
}
