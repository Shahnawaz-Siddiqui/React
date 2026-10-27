
import React from "react";
import './Signup.css'
const Signup = () => {

     return(
        <>
        <div className="w3-container div1" style={{width:"70vmax" , marginLeft:"12vmax"}}>
            <h1 style={{marginLeft:"0%"}}><strong>Create Account</strong><span><h4 style={{float:"right" ,color:"#10B981", marginRight:"2vmin" }}>🪙Paisa.com</h4></span></h1><br></br>
            <h2>Expense Tracking made simple -<span style={{color:"#10B981"}}>Sign up</span>to begin <span class="w3-content  spin" style={{color:"#10B981" }}>₹</span></h2>
            <hr></hr>
            <h4 className="sider">Start tracking your expense!</h4>
        </div>
    
        <div className="w3-container parent">
           
             <form>
                 <label>Full Name</label><br/>
                 <input  type="text" title="Enter your name"/><br/>
                 <label>Email</label><br/>
                 <input  type="email" title="Enter your email"/><br/>
                 <label>Password</label><br/>
                 <input  type="password" title="Enter password"/><br/><br/>
             </form>
             </div>
              <center><button class="create" >Create Account</button></center>
            <center><p>Already have an account?<a href="./Signin.jsx" style={{fontWeight: "bolder", textDecoration: "none"}}>Sign in</a></p></center>
             </>
     );

    
};

export default Signup;
