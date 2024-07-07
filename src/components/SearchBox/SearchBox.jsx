import css from './SearchList.module.css'

export default function Filter({value, onFilter}) {
    return (
        <div className={css.container}>
            <p className={css.text}>Find contact by name</p>
            <input className={css.input} type="text" value={value} 
                onChange={e => onFilter(e.target.value)}/>
        </div>
    );
}