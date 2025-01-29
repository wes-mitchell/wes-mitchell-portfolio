import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Form.css';
import NotificationModal from './NotificationModal';

const ContactForm = () => {
  const formDataInitalValues = {
    name: '',
    subject: '',
    email: '',
    message: '',
  };

  const notificationMessageInitialValues = {
    message: '',
    isError: false,
  };

  const [formData, setFormData] = useState(formDataInitalValues);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState(
    notificationMessageInitialValues
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceId, templateId, formData, userId).then(
      (r) => {
        setNotificationMessage({
          message:
            'Your message was sent successfully, I will be in touch with you soon!',
          isError: false,
        });
        setFormData(formDataInitalValues);
      },
      (e) => {
        setNotificationMessage({
          message: 'There was an error sending the message. Please try again.',
          isError: true,
        });
      }
    );
    setShowModal(true);
    setLoading(false);
  };

  return (
    <>
      {showModal && (
        <NotificationModal
          showModal={showModal}
          setShowModal={setShowModal}
          notificationMessage={notificationMessage}
          setNotificationMessage={setNotificationMessage}
        />
      )}

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn container-btn"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactForm;
