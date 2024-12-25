import styles from './style.module.css';
export default function Zoho() {


    return (
        <div className={styles.container}>
            <h1>Zoho</h1>
            <div className={styles.but} >Get invoices</div>
        
            <div className={styles.but}>Create an expense</div>
        </div>
    )
}
