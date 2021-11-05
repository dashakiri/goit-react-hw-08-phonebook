import axios from 'axios';

export async function fetchContacts() {
  try {
    const { data } = await axios.get(`/contacts`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function addContacts(contact) {
  try {
    const { data } = await axios.post(`/contacts`, contact);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteContacts(id) {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.error(error.message);
  }
}
