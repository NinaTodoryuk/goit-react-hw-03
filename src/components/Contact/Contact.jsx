import css from './Contact.module.css'
import {ImPhone} from 'react-icons/im'
import {BsPeopleFill} from 'react-icons/bs'

export default function Contact ({name, number, OnDelete}) {
    return (
        <li className={css.container}>
            <div className={css.list}>
                <div className={css.listItem}>
                    <BsPeopleFill/>
                    <p>{name}</p>
                </div>
                <div className={css.listItem}>
                    <ImPhone/>
                    <p>{number}</p>
                </div>
            </div>
            <button className={css.delButton} onClick={onDelete}>
                Delete
            </button>
        </li>
    );
}