import Contact from '../Contact/Contact';
import css from './ContactList.module.css'

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.container}>
      {contacts.map(({ id, name, number }) => (
        <Contact
          key={id}
          name={name}
          number={number}
          onDelete={() => onDeleteContact(id)}
        />
      ))}
    </ul>
  );
}