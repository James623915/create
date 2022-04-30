import { Link, Outlet} from "react-router-dom";



const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand btn btn-light" to="/" title="Home page">Bad Bank</Link>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

  <ul className="nav nav-pills">
  
        <li className="nav-item"> 

            <Link className="nav-link text-primary btn btn-light" to="/CreateAccount" title="Creact Account">Create Account</Link>
            
        </li>
          
        <li className="nav-item">
          
            <Link className="nav-link text-primary btn btn-light" to="/Login" title="Login">Login</Link>
   
        </li>

        <li className="nav-item">
          
            <Link className="nav-link text-primary btn btn-light" to="/deposit" title="Deposit">Deposit</Link>
           
        </li>
        
        <li className="nav-item">
          
            <Link className="nav-link text-primary btn btn-light" to="/withdraw" title="Withdraw">Withdraw</Link>
            
        </li>

        <li className="nav-item">
          
            <Link className="nav-link text-primary btn btn-light" to="/AllData" title="Alldata">All Data</Link>
            
        </li>
          
        </ul>
        </div>
       
      </nav>

      <Outlet />
    </div>
  )
};

export default NavBar;

