import React from 'react'
import "../styles/Homepage.css";
const Addvertise = () => {
  return (
    <>
          <div className='advertise-container'>
    <div className='ad-heading'>
      <p>Welcome to the BOOK SPOT</p>
      <h1>World's largest publisher of Hindu religious texts</h1>
    </div>
    <div className='published-heading'>
      <h4>Total book published : 417100000</h4>
    </div>
    <div className='authors-logo'>
      <div className='first-ad ad-container'>
      <div className='text'> <p>Shrimad Bhagwat Geeta</p>
        <h4>16.21 Crore</h4></div>
       
      </div>
      <div className='second-ad ad-container'>
      <div className='text'>
      <p>Literature of Tulsidas</p>
        <h4>11.73 Crore</h4>
      </div>
       
      </div>
      <div className='third-ad ad-container'>
      <div className='text'><p>Purana,Upanishad</p>
        <h4>2.68 Crore</h4></div>
        
      </div>
      <div className='fourth-ad ad-container'>
      <div className='text'>   <p>Balupyogi Pusthak</p>
        <h4>11.09 Crore</h4></div>
     
      </div>
    </div>
  </div>
    </>
  )
}

export default Addvertise