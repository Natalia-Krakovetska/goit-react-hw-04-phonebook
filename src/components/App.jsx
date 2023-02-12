import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { FormContacts } from './FormContacts/FormContacts';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';
export const App =()=> {
  const [contacts, setContacts] = useState(() => {
    const contacts = localStorage.getItem('contacts');
    const parcedContacts = JSON.parse(contacts);
    if (parcedContacts){
      setContacts(parcedContacts)}});
  const [filter, setFilter] = useState("");
    
 
useEffect (() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
}, [contacts]);

const addContact = ({ name, number }) => {
  const alreadyInContacts = contacts.find(
    item => item.name.toLowerCase() === name.toLowerCase()
  );

  if (alreadyInContacts) {
    alert(`${name} is already in contacts.`);
    return;
  }
  const contact = {
    id: nanoid(),
    name: name,
    number: number,
  };

  setContacts(prevsContacts => [contact, ...prevsContacts]);
};


const onFilterChange = event => {
  setFilter(event.target.value);
};

const getFilteredContacts = () => {    
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const deleteContact = contactId => {
  setContacts(prevstate => ({
    contacts: prevstate.contacts.filter(contact => contact.id !== contactId),
  }));
};
const filteredContacts = getFilteredContacts();

  return (
    <div>
      <h1>Phonebook</h1>
      <FormContacts onSubmit={addContact} />
      <h2 style={{ fontSize: '34px', marginBottom: '10px' }}>Contacts</h2>
      <Filter onChange={onFilterChange} value={filter} />
      <ContactsList
        contacts={filteredContacts}
        onDelete={deleteContact}
      />
    </div>
  );


 

}
  
