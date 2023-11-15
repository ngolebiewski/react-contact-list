import ContactRow from "./ContactRow";
import { useState } from 'react';


const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];



const ContactList = () => {
  const [contacts, setContacts] = useState(dummyContacts);


  return (
    <table>

      <caption>
        Contact List
      </caption>
      <colgroup span="3"></colgroup>
      <tbody>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>

          {
            contacts.map((contact) => {
            return <ContactRow key={contact.id} contact = { contact } />})
          }
        
      </tbody>
    </table>
  )
}


export default ContactList;