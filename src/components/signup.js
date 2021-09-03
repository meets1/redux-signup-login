import React from 'react'
import { useState } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actions/actionCreators';
// import { useHistory } from 'react-router';


const Signup = (props) => {
    // let history = useHistory();
    // const person = useSelector((state)=>state);
    // console.log(person,"999999")

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
 
    const checkData = (e) => {
        console.log("auth", localStorage.getItem("isAuthenticated"));
        e.preventDefault();
        let userEmail = localStorage.getItem('email')
        let userPassword = localStorage.getItem('password')
        // console.log(userEmail == email, userPassword , password,"33333")

        if (!email && !password) {
            alert("Fields cannot be empty")
        } else {
            if (userEmail === email && userPassword === password ) {
                localStorage.setItem("isAuthenticated", "true");
                console.log("LOGIN CHECK");
                window.location.pathname = "/welcome";
                // history.push("/")
            }
            else {
                alert('enter valid details');
            }
        }
    }
    const handleSubmit = (e) => {
        const { addUser } = props
        e.preventDefault();
        addUser(email, password)
        alert('success');
        setEmail('');   
        setPassword('');
    }

    // useEffect(() => {
    //     localStorage.setItem("udata", JSON.stringify(data));
    // }, [data]);

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="col-4 mx-auto bx my-5">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Sign up</button>
                        <div className="divider" />
                        <button type="submit" className="btn btn-primary" onClick={checkData}>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => (
    console.log("hello", state),{})

export default connect(mapStateToProps, { ...actionCreators})(Signup)

