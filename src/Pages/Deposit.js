import React, {useContext} from "react";
import {UserContext} from "../Helper/Context";
import Card from '../Helper/Context';
import { Link} from "react-router-dom";
function Deposit() {
	const [show, setShow]                   = React.useState(true);
	const [disabled, setDisabled]           = React.useState(true);
	const [status, setStatus]   	        = React.useState('');
	const [currentemail, setCurrentemail]   = React.useState('');
	const [currentpass, setCurrentpass]     = React.useState('');
	const [balance, setBalance]				= React.useState('');
	const [deposit, setDeposit]				= React.useState('');
	const ctx = React.useContext(UserContext);
	
	//Check if any user is currently logged in
	if (show) {
		for (const {name, email, password, balance, loggedin} of ctx.users) {
			console.log(`Current User: ${name}, Logged in: ${loggedin}`);
			if (loggedin) {
				setShow(false);
				setCurrentemail(email);
				setCurrentpass(password);
				setBalance(balance);
				console.log(`${name} is logged in`);
				return;
			}
		}
	}
	
	//Determine if to set the button disabled or not
	if (!deposit) {
		//Check if button should be enabled
		if (disabled) {
			console.log(disabled);
			console.log(`button disabled ${disabled}`);
		} else {
			setDisabled(true);
			console.log(`button disabled ${disabled}`);
		}
	} else {
		if (disabled) {
			setDisabled(false);
			console.log(`button disabled ${disabled}`);
		} else {
			console.log(`button disabled ${disabled}`);
		}
	}

	function depositMoney() {
		if (!isNaN(deposit) && deposit > 0){
			let newBalance = Number(balance) + Number(deposit);
			console.log(Number(newBalance));
			let tracker = false;
			
			// For todays date;
			Date.prototype.today = function () { 
				return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
			}
	
			var newDate = new Date();
			
			//Check if the username or passwords match anyone is the database
			for (const {email, password} of ctx.users) {
				console.log(`Checking ${currentemail} ${currentpass} against ${email} ${password}`);
				if (currentemail == email && currentpass == password) {
					console.log(`${currentemail} ${currentpass} is correct`);
					for (var i=0, length=ctx.users.length; i<length; i++) {
						if (ctx.users[i].email == currentemail) {
							console.log(`Checking ${email}`)
							ctx.users[i].balance = Number(newBalance);
							
						
							tracker = true;
						}
					}
				}
			}
			
			//Making all changes to state
			if (tracker) {
				setStatus(`$${deposit} successfully deposited into account`);
				setTimeout(() => setStatus(''), 5000);
				setDeposit('');
				setBalance(Number(newBalance))
			} 
		} else if (!isNaN(deposit)) {
			setStatus('Error: Deposit amount must be greater than $0.00. Please try again.');
			setDeposit('');
			setTimeout(() => setStatus(''), 5000);
		} else {
		setStatus('Error: Deposit amount must be a number. Please try again.');
		setDeposit('');
		setTimeout(() => setStatus(''), 5000);
	}
		return;
	}
	
	return (
		<Card
			bgcolor="info"	
			txtcolor="dark"
			header = "Deposit funds in your account"
			status = {status}
			body = {show ? (
				<>
				<div className="text-left">	
						
					</div>

				Please log in to deposit funds and check your balance. <Link to='/login' className="btnDeposit" data-toggle="tooltip" title="Login to your account">Login</Link><br/><br/><br/>
				You don't have an account? Create an account if you would like to enjoy our services. <Link to="/createaccount" className="btnDeposit" data-toggle="tooltip" title="Create a new account">Create Account</Link> <br/><br/>
				</>
			):(
				<>
				Current Balance: ${balance.toFixed(2)}<br/><br/>
				
				Deposit Amount:<br/>
				<input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
				{disabled ? (
					<>
					<button type="submit" className="btn btn-primary" disabled="disabled" onClick={depositMoney}>Deposit</button>
					</>
				):(
					<>
					<button type="submit" className="btn btn-primary" onClick={depositMoney}>Deposit</button><br/><br/>
					
					</>
				)}
				</>
			)}
		/>
	)
}
export default Deposit; 