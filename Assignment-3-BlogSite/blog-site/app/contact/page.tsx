import Image from 'next/image';
import styles from './ContactUs.module.css';

const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactContent}>
        <div className={styles.contactImage}>
          <Image src="/img/contact-us.png" alt="Contact Us" width={400} height={300} />
        </div>
        <div className={styles.contactInfo}>
          <h1>Contact Us</h1>
          <p>
            For any inquiries or feedback, feel free to reach out to us via the following channels:
          </p>
          <ul>
            <li>
              <strong>Gmail:</strong> your-email@gmail.com
            </li>
            <li>
              <strong>WhatsApp:</strong> +1234567890
            </li>
            <li>
              <strong>Cell:</strong> +9876543210
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.contactForm}>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4}></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
