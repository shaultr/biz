import styles from './style.module.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function Button({ type, setMessage }) {
    const [redirect, setRedirect] = useState(false);

    const handleClick = () => {
        const url = "https://squareup.com/oauth2/authorize?client_id=sq0idp-nlZ6beR7RocZP-dzQtRS5g&response_type=code&scope=MERCHANT_PROFILE_READ INVOICES_READ ITEMS_READ&redirect_uri=http://localhost:3000/&prompt=consent";
        // const url = "https://squareup.com/oauth2/authorize?client_id=sq0idp-nlZ6beR7RocZP-dzQtRS5g&response_type=code&scope=MERCHANT_PROFILE_READ CUSTOMERS_READ INVOICES_READ INVOICES_WRITE ORDERS_WRITE ITEMS_READ&redirect_uri=http://localhost:3000/&prompt=consent";
        window.location.href = url;
    };

    useEffect(() => {
        let params = new URLSearchParams(window.location.search);
        let code = params.get('code');
        if (code) {

            if (type === 'Square') {
                axios
                    .post('http://localhost:9000/square/redirect_url', {
                        code,
                        redirect_uri: 'http://localhost:3000/'
                    })
                    .then((response) => {
                        if (response.data === 'Authorization successful!') {
                            console.log('first name: ' + response.data)
                            setMessage(<span style={{ direction: 'rtl' }}>התחברת בהצלחה ל-Square!</span>);
                            setTimeout(() => {
                                setRedirect(true);
                            }, 3000);
                        }
                    })
                    .catch((error) => {
                        console.error('Error during Square authorization:', error);
                    });
            }
        }
    }, []);

    if (redirect) {
        return <Navigate to="/Square" />;
    }

    return (
        <>
            <div className={styles.container} onClick={handleClick}>
                {type}
            </div>
        </>
    );
}
