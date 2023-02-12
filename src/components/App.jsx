import { Component } from 'react';
import { nanoid } from 'nanoid';
import { FormContacts } from './FormContacts/FormContacts';
import { ContactsList } from './ContactsList/ContactsList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
componentDidMount(){
const contacts = localStorage.getItem('contacts');
const parcedContacts = JSON.parse(contacts);
if (parcedContacts){
  this.setState ({ contacts: parcedContacts })
};
};

componentDidUpdate(prevProps, prevState){
if (this.state.contacts !== prevState.contacts){
localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
}
}
  addContact = ({ name, number }) => {
    const { contacts } = this.state;
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

    this.setState(prevstate => ({
      contacts: [contact, ...prevstate.contacts],
    }));
  };
  onFilterChange = event => {
    this.setState({ filter: event.target.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = contactId => {
    this.setState(prevstate => ({
      contacts: prevstate.contacts.filter(contact => contact.id !== contactId),
    }));
  };


  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();
    return (
      <div>
        <h1>Phonebook</h1>
        <FormContacts onSubmit={this.addContact} />
        <h2 style={{ fontSize: '34px', marginBottom: '10px' }}>Contacts</h2>
        <Filter onChange={this.onFilterChange} value={filter} />
        <ContactsList
          contacts={filteredContacts}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}