import React from 'react'
import './Contact.css'
 
const Contact = () => {
  return (
    <>
     
    <div className='contact_container'>
      <div className="form">
        <form >
          <label>First Name</label>
          <input type="text" placeholder='Enter Your First Name' />
          <label>last Name</label>
          <input type="text" placeholder='Enter Your Last Name' />
          <label>Gmail Id</label>
          <input type="Emal" placeholder='Enter Your Gmail' />
          <label>Phone Number</label>
          <input type="tel" placeholder='Enter Your Number' />
          <label>Massege</label>
          <input type='massege' placeholder='Massege' />
          <button type='submit'>SUBMIT</button>
          {/* <input type='hidden' placeholder='Massege' /> */}
          
          
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact
