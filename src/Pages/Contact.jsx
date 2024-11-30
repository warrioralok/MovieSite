/* eslint-disable no-unused-vars */
 import { Form } from 'react-router-dom';
import styles from './Contact.module.css';

// eslint-disable-next-line react-refresh/only-export-components
export const contactData = async ({request}) =>{
  try{
    const response = await request.formData();
    const data = Object.fromEntries(response)
    console.log(data)
    return null;
  }
  catch(err){
    console.log(err);
  }
}
const Contact = () => {
  return (
    <>
      <div className="contact-container">
        <Form method='POST' action='/contact' className="contact-form">
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name='name'
              placeholder="Your Full Name"
              
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name='email'
              placeholder="Your Email Address"
              
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name='subject'
              placeholder="Subject of Your Message"
              
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name='message'
              placeholder="Write your message here"
              rows="5"
              
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </Form>
      </div>
    </>
  );
};

export default Contact;