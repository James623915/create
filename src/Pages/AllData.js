import React, {useContext} from "react";
import {UserContext} from "../Helper/Context";
import Card from '../Helper/Context';
import { Link} from "react-router-dom";
function AllData() {
	
    // Adding in the user context
    const ctx = React.useContext(UserContext)
    
    // Define empty array of user cards
    var userCards = [];
    
    // Going through each user and appending a card of their data
    for (const {name, email, password, balance} of ctx.users) {
      
      // Getting all user transactions and making it a list
      var table = [];
      for (const item of password){
        table.push(
          <li>{item}</li>
        );
      }
      
      userCards.push(    

<div class="card-group">
  <div class="card">{email}</div>
  <div class="card">{name}</div>
  <div class="card">{password}</div>
  <div class="card">{balance}</div>
</div>
   
      );
    };
    
    
    //Boilerplate Text if no users have been created yet
    if (!userCards) {
      userCards = 
        <>
        No users have been created yet. <br/>
        <Link to="/createaccount" data-toggle="tooltip" title="Create a new account">Click here to make a new account</Link> <br/>
        </>
    }
    
    // Returning the cards of all user data
    return(
    <Card bgcolor="light" 
    txtcolor="dark" 
    title="Email----------------------Name---------------------Password"
    header="ALL DATA"
    body={userCards}/>);
  }
  export default AllData;

  