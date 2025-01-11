import styles from './style.module.css';
import axios from 'axios';
import { useState } from 'react';
import InvoiceCard from '../InvoiceCard';
import SkeletonCard from '../SkeletonCard';

export default function Square() {
    const [invoices, setInvoices] = useState([]);
    const [loading, setLoading] = useState(false);

    const getInvoices = async () => {
        setLoading(true); 
        try {
            const response = await axios.get('http://localhost:9000/square/get-invoices/');
            setInvoices(response.data); 
            console.log('ffee',invoices)
        } catch (error) {
            console.error('Error fetching invoices:', error.response?.data || error.message);
        } finally {
            setLoading(false); 
        }
    }
    return (
        <div className={styles.container}>

            <div className={styles.containerButtons}>
                <div className={styles.but} onClick={getInvoices}>Get invoices</div>
                <div className={styles.but}>Create an expense</div>
            </div>
            <div className={styles.invoices}>
               {!invoices.length && <h1>Square</h1>}
                {loading ?
                <>
                <SkeletonCard />
                <SkeletonCard />
                </>:
                 invoices.map((invoice, index) => (
                    <InvoiceCard key={index} invoice={invoice} />
          

                    
                ))}

            </div>
        </div>
    )
}
