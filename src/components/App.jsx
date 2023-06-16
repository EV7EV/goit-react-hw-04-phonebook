import React, { useState } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import ContactFilter from './ContactFilter/ContactFilter';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { Container } from './Conatiner/Container.styled';

const inicialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', inicialContacts);

  const [filter, setFilter] = useState('');

  const addcontact = (name, number) => {
    const isExist = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isExist) {
      alert(`contact ${name} is already in contacts`);

      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const changeHandleFilter = e => {
    setFilter(e.target.value);
  };
  // Фільтрує масив контактів
  const onFilterHandle = () => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
  };

  return (
    <Container>
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={addcontact} />

      <h2 className="title">Contacts</h2>
      <ContactFilter onChange={changeHandleFilter} />
      <ContactList contacts={onFilterHandle()} onDelete={deleteContact} />
    </Container>
  );
};
