import styles from './style.module.css';

export default function InvoiceCard({ invoice }) {
const formattedDate = invoice.updated_at.split("T")[0];
const [year, month, day] = formattedDate.split("-");
const newFormattedDate = `${day}/${month}/${year}`;
  return (
    <div className={styles.invoiceCard}>
      <h3>Invoice</h3>
      <div className={styles.invoiceDetails}>
        <h5>Title: {invoice.title}</h5>
        <h5>Name: {invoice.primary_recipient.family_name + " " + invoice.primary_recipient.given_name}</h5>
        <h5>Amount: ${(invoice.payment_requests[0].computed_amount_money.amount / 100).toFixed(2)}</h5>
        <h5>Date: {newFormattedDate}</h5>
      </div>
    </div>
  );
}
