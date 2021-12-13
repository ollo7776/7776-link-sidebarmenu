import React, {useState} from 'react'
import './LoginForm.css'

function LoginForm ({Login, error}) {    
    const [details, setDetails] = useState({name: "Besser Informatiker", password: ""})
        
    const submitHandler = e => {
        e.preventDefault();
        Login(details);
    }

    return (
            <form className="form-first" onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Login</h2>
                    <h4>Unbefugte dürfen nicht eintreten. <br/>No unauthorized entry.</h4>
                    
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input className="input-login" type="text" name="name" id="name" 
                        onChange={e => 
                        setDetails({...details, name: e.target.value})} 
                        value={details.name}
                         />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Passwort:</label>
                        <input className="input-login" type="password" name="password" id="password"
                        onChange={e => 
                            setDetails({...details, password: e.target.value})} 
                            value={details.password}
                             /> 
                             {(error !== "") ? (<div className="error">{error}</div>) : ""}
                    </div>
                    <input className="button-login" type="submit" value="LOGIN" />
                    <div>
                    <p style={{fontSize: '8px'}}>Ver.Repair0221andCW</p>
                    <p style={{fontSize: '8px', textdecoration: 'none'}}><a href="https://i7776.net">Ver.Repair001</a></p>
                    </div>
                </div>
            </form>
        )
    }

export default LoginForm;
