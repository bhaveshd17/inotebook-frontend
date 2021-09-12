import React, {useState} from 'react'
import { useHistory } from 'react-router-dom';

function Login(props) {
    const history = useHistory()
    const [cred, setCred] = useState({"username":"", "password":""})

    const submitHandle = async(e)=>{
        e.preventDefault();
        const response = await fetch("https://inotebook-api.herokuapp.com/api/auth/login/", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({"username":cred.username, "password":cred.password})
          });
          const data = await response.json();
          setCred({"username":"", "password":""})
          if(data.success === true){
              localStorage.setItem('token', data.authToken)
              history.push("/")
              props.showAlert("Login successfully!", "success")
          }
          else{
              props.showAlert(data.error, "error")
          }
    }


    const onChangeHandle = (e)=>{
        setCred({...cred, [e.target.name]:e.target.value})
    }


    return (
        <div className="container w-50 m-auto">
            <h4 className="my-3 text-center">Login</h4>
            <form onSubmit={submitHandle} className="my-3">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" value={cred.username} onChange={onChangeHandle} id="username"  name="username"/>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" value={cred.password} onChange={onChangeHandle} id="password" name="password" />
            </div>
            
            <button type="submit" className="btn btn-primary">Login</button>
            </form> 
        </div>
    )
}

export default Login
