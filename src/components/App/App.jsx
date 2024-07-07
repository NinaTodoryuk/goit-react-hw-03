import { useState, useEffect } from 'react'
import ContactList from '../ContactList/ContactList'
import initialContacts from '../../contacts.json'
import css from './App.module.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'

function App() {
    const [contacts, setContacts] = useState(() => {
        const saveContacts = localStorage.getItem('contacts');
        return saveContacts ? JSON.parse(saveContacts) : initialContacts;
    });

const [filter, setFilter] = useState('');

useEffect (() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
}, [contacts]);

const addContacts = (newContact) => {
    setContacts((prevContacts) => {
        return [...prevContacts, newContact]
    })
}

const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
};

const visibleContacts = contacts.filter((contact) =>
contact.name.ToLowerCase().includes(filter.toLowerCase())
);

return (
    <div> 
        <h1 className={css.header}>Phonebook</h1>
        <ContactForm onAdd={addContacts}/>
        <SearchBox value={filter} onFilter={setFilter}/>
        <ContactList
            contacts={visibleContacts}
            onDeleteContact={handleDeleteContact}
            />
    </div>
);

}

export default App;