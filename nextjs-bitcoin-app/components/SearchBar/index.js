import styles from './Search.module.css';
const SearchBar = ({...rest}) => {
    return (
        <div className={styles.bitcoin_search}>
            <input className={styles.bitcoin_input} {...rest}/>
        </div>
    )
}

export default SearchBar;
