import App from './../App'
import { useState } from 'react'

const ContactRow = ({ contact, uniqueUserId }) => {
  
  return (
    <tr key={ contact.id } onClick={ ()=> {
    // setUniqueUserId=(contact.id);
    console.log(`Contact id: ${contact.id} has been clicked`)

    }}>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
    </tr>
  )
}

export default ContactRow