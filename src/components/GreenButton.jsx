import styles from './GreenButton.module.css'

function GreenButton({buttonText}) {
    return ( 
        <button className={styles.GreenButton}>{buttonText}</button>
     );
}

export default GreenButton;