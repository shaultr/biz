import styles from './style.module.css';
import axios from 'axios';
import { useState } from 'react';
import InvoiceCard from '../InvoiceCard';

export default function Square() {
    const [invoices, setInvoices] = useState([]);

    const getInvoices = async () => {
        try {
            const response = await axios.get('http://localhost:9000/square/get-invoices/');
            console.log(response.data[0].updated_at.split("T")[0]);

            setInvoices(response.data);
        } catch (error) {
            console.error('Error fetching invoices:', error.response?.data || error.message);
        }
    };

    return (
        <div className={styles.container}>

            <div className={styles.containerButtons}>
                <div className={styles.but} onClick={getInvoices}>Get invoices</div>
                <div className={styles.but}>Create an expense</div>
            </div>
            <div className={styles.invoices}>
               {!invoices.length && <h1>Square</h1>}
                {invoices.map((invoice, index) => (
                    <InvoiceCard key={index} invoice={invoice} />
          
                ))}

            </div>
        </div>
    )
}
