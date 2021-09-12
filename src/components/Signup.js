import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';


function Signup(props) {
    const history = useHistory()
    const [cred, setCred] = useState({"username":"", "email":"","password":"", "cpassword":"", "first_name":""})

    const submitHandle = async(e)=>{
        e.preventDefault();
        const {username, email, password, cpassword, first_name} = cred;
        const response = await fetch("http://127.0.0.1:8000/api/auth/createUser/", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password, cpassword, first_name})
          });
          const data = await response.json();
        
          if(data.success === true && data.username!== username && data.email !== email){
              localStorage.setItem('token', data.authToken)
              history.push("/")
              props.showAlert("Account created successfully!", "success")
          }
          else{
              if(data.error){
                props.showAlert(data.error, "error")
              }
              else{
                  props.showAlert(data.username, "success")
              }
          }
    }


    const onChangeHandle = (e)=>{
        setCred({...cred, [e.target.name]:e.target.value})
    }


    return (
        <div className="container w-50 m-auto">
            <h4 className="my-3 text-center">Sign Up</h4>
            <form onSubmit={submitHandle} className="my-3">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" value={cred.username} onChange={onChangeHandle} id="username"  name="username"/>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">email</label>
                <input type="email" className="form-control" value={cred.email} onChange={onChangeHandle} id="email"  name="email"/>
            </div>
            <div className="mb-3">
                <label htmlFor="first_name" className="form-label">Name</label>
                <input type="text" className="form-control" value={cred.first_name} onChange={onChangeHandle} id="first_name"  name="first_name"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={cred.password} onChange={onChangeHandle} id="password" name="password" />
            </div>
            <div className="mb-3">
                <label htmlFor="cpassword" className="form-label">Confirm Password</label>
                <input type="password" className="form-control" value={cred.cpassword} onChange={onChangeHandle} id="cpassword" name="cpassword" />
            </div>
            
            <button type="submit" className="btn btn-primary">Sign Up</button>
            </form> 
        </div>
    )
}

export default Signup
