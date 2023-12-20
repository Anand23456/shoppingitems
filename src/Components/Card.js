
import React from 'react';


const Card = ({ item }) => {
  // Destructure product properties
  const { title, description, price,  rating, image } = item;

  return (
    <>
    


      <div  >
     <div className="card h-100 card-hover">
       <img src={image} className="card-img-top mx-auto " alt="..." style={{ height: '100px',width:"100px" }} />
       <div className="card-body">
         <h5 className="card-title mb-2">{title?.slice(0,15)}</h5>
         <p className="card-text mb-4">{description?.slice(0, 50)}</p>
         <div className='d-flex justify-content-around mb-3'>
           <h4 className="card-rate"><span style={{color:"green"}}>Rate</span>: {rating.rate}</h4>
           <h5><span style={{color:"Red"}}>Price :$</span>{price}</h5>
         </div>
       </div>
     </div>
   </div> 
    </>
     );
};

export default Card;
