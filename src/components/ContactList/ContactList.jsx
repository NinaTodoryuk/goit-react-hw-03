import Contact from '../Contact/Contact'
import css from './ContactList.module.css'

export default function ContactList({Contacts, onDeleteContact})

{ return (
    <ul className={css.container}>
        {Contacts.map(({id, name, number}) => (
            <Contact
            key={id}
            name={name}
            number={number}
            OnDelete={() => onDeleteContact(id)}
            />
        ))}
    </ul>
    );
}