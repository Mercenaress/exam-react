import styles from './SearchEvents.module.css'

function SearchEvents() {
    return ( 
        <section className={styles.searchEventsContainer}>
            <input className={styles.searchInput} type="text" /> 
        </section>
        
     );
}

export default SearchEvents;