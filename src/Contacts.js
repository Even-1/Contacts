import React, { useState, useEffect } from 'react';
import './Contacts.css';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // console.log(contacts);
  return (
    <div className="contacts-container">
      {contacts.map(contact => (
        <div key={contact.id} className="contact-card">
          <h2>{contact.name}</h2>
          <p><strong>Email:</strong> {contact.email}</p>
          <p><strong>Phone:</strong> {contact.phone}</p>
          <p><strong>Website:</strong> <a href={`http://${contact.website}`}>{contact.website}</a></p>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
