import React from 'react';
import {Link}  from 'react-router-dom';
import "../styles/Homepage.css";

const Describe = () => {
  return (
    <>
    <div className='about-us'>
<span>Gita Press is a unit of Gobind Bhawan Karyalaya registered under the Societies Registration Act,1860. The institution’s main objective is to promote and spread the principles of Sanatana Dharma, the Hindu religion among the general public by publishing Gita, Ramayana, Upanishads, Puranas, Discourses of eminent Saints and other character-building books & magazines and marketing them at highly subsidised prices.</span>
</div>
<div className='know-more'>
 <Link to="/readmore">  <button>Read more</button></Link>  
</div>
    </>
  )
}

export default Describe;