import Button from '../Button';
import styles from './style.module.css';
import { useEffect, useState } from 'react';

export default function Buttons() {
  const [message, setMessage] = useState('');
  
  return (
    <div className = {styles.container}>
      <img src='/logo-bizz.png' />
        <Button type={"Zoho"} setMessage={setMessage}/>
        <Button type={"Stripe"} setMessage={setMessage}/>
        <Button type={"Square"} setMessage={setMessage}/>
        <Button type={"Wave"} setMessage={setMessage}/>
        {message &&
         <div className={styles.successMessage}>{message}</div>}

    </div>
  )
}
