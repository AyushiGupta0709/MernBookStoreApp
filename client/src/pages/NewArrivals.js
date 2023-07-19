import React from 'react'
import SingleNewArrival from './SingleNewArrival';
import "../styles/NewArrivals.css";

const NewArrivals = () => {
  return (
    <>
    <div className='new-sections'>
        <div className='new-arrivals-container'>
            <h2 className='new-arrival-heading'>NEW ARRIVALS</h2>
            <div className='new-arrivals-book'>
            <SingleNewArrival src={"https://cdn.shoplightspeed.com/shops/633243/files/49533834/1600x2048x2/alessandra-sanguinetti-the-adventures-of-guille-an.jpg"} name={"THE ADVENTURES OF GUILLE"} author={"ROald Dahl"} price={900}/>
            <SingleNewArrival src={"https://cdn.shoplightspeed.com/shops/633243/files/53982781/262x276x2/a-world-history-of-photography-5th-edition-naomi-r.jpg"} name={"A WORLD HISTORY OF PHOTOGRAPHY"} author={"Alice Munro"} price={300}/>
            <SingleNewArrival  src={"https://cdn.shoplightspeed.com/shops/633243/files/27884224/1600x2048x2/abbas-gods-ive-seen.jpg"} name={"GODS I HAVE SEEN"} author={"Abbas Magnum"} price={500}/>

            </div>
        </div>
        <div className='most-selling new-arrivals-container'>
        <h2 className='new-arrival-heading'>MOST SELLING</h2>
        <div className='new-arrivals-book'>
         <SingleNewArrival  src={"https://cdn.shoplightspeed.com/shops/633243/files/30908088/262x276x2/a-different-kind-of-order-the-icp-triennial.jpg"} name={"A DIFFERENT KIND OF ORDER"} author={"The ICP Trienniel"} price={450}/>
        <SingleNewArrival   src={"https://cdn.shoplightspeed.com/shops/633243/files/42829264/1600x2048x2/as-we-rise-photography-from-the-black-atlantic.jpg"} name={"AS WE RISE"} author={"The Black Atlantic"} price={760}/>
        <SingleNewArrival src={"https://cdn.shoplightspeed.com/shops/633243/files/53983478/262x276x2/carolee-schneemann-from-then-and-beyond.jpg"} name={"FROM THEN AND BEYOND"} author={"Craolle Schennemann"} price={650}/>
        </div>

        </div>
    </div>
       
    </>
  )
}

export default NewArrivals;