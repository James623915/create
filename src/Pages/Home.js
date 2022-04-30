import React from 'react';
import Card from '../Helper/Context';
import Img from './Image/bank.png';

const Home = () => {
    return ( 
     <div className=" p-2 text-dark">
         <div className="home">
              
    <Card
      txtcolor="black"
      header={(<p className="fs-1" >WELCOME TO THE BANK</p>)}
      text={(<p className="fs-4" >For all your banking needs</p>)}
      body={(<img src={Img} className="img-fluid bg-primary" alt="Responsive image" />)}
    />    
    
          </div>
     </div>    
      
     );
}
 
export default Home;