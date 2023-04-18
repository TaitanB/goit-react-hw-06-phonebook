import React, { useState } from 'react';
import Form from './Form/Form';
import ContactsList from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Wrapper } from './Wrapper.styled';
import useLocalStorage from '../hooks/useLocalStorage';

export default function App() {
  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  const addContact = contact => {
    // console.log('addContact');

    contact.id = nanoid();
    const normalizedName = contact.name.toLowerCase();

    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      return alert(`${contact.name} is already in contacts!`);
    }

    setContacts(prevContacts => [contact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    // console.log('deleteContact');

    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => {
    // console.log('changeFilter');

    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    // console.log('getVisibleContacts');

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={addContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContact}
      />
    </Wrapper>
  );
}
