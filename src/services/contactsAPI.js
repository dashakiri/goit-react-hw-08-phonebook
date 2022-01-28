import axios from 'axios';

axios.defaults.baseURL = 'https://floating-atoll-23449.herokuapp.com';

export async function fetchContacts() {
  try {
    const { data } = await axios.get(`/api/contacts`);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function addContacts(contact) {
  try {
    const { data } = await axios.post(`/api/contacts`, contact);
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteContacts(id) {
  try {
    await axios.delete(`/api/contacts/${id}`);
    return id;
  } catch (error) {
    console.error(error.message);
  }
}
