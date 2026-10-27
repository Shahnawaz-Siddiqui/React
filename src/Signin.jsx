import React from "react";

const Signin = () =>
{
    return(
        <>
        <div className="parent">
            <div className="div1" >
                <span className="spin" style={{color:"#10B981"}}>₹</span>
            </div>
        </div>
        <h4 style={{color:"black", fontWeight: "bold",marginRight:"2vmin"  }}>🪙Paisa.com</h4>

           <div className="heading">
            <h1>Welcome Back </h1>
            <p>Please enter your credentials to access your<br/>account and daily cashflow</p>
                 <div className="w3-container">
            <form>
               
                <label style={{marginRight:"11vmax"}}> Email</label><br/>
                <input  type="email" title="Enter your email"/><br/>
                <label style={{marginRight: "10vmax"}}>Password</label><br/>
                <input  type="password" title="Enter strong password"/><br/><br/>

                <center><button className="create" >Log in →</button></center>
            </form>
            </div>
            <center><p>Don't have an account?<a href="./Signup" style={{fontWeight:" bolder", textDecoration: "none"}}>Sign up</a></p></center>
           </div>
        </>
    );
};

export default Signin;