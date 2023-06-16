import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';

import { Container } from './Conatiner/Container.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const storage = JSON.parse(localStorage.getItem('contacts'));
    if (storage) {
      this.setState({ contacts: [...storage] });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addcontact = ({ name, number }) => {
    const { contacts } = this.state;
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`contact ${name} is already in contacts`);

      return;
    }

    const newContact = { name, number, id: nanoid() };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeHandleFilter = e => {
    this.setState({ filter: e.target.value });
  };
  // Фільтрує масив контактів
  onFilterHandle = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    return (
      <Container>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.addcontact} />

        <h2 className="title">Contacts</h2>
        <ContactFilter onChange={this.changeHandleFilter} />
        <ContactList
          contacts={this.onFilterHandle()}
          onDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
