import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

export async function fetchContacts() {
  const { data } = await axios.get(`contacts`);
  console.log(data);
  return data;
}

export async function addContacts(contact) {
  const { data } = await axios.post(`contacts`, contact);
  return data;
}

export async function deleteContacts(id) {
  await axios.delete(`contacts/${id}`);
  return id;
}
