import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './component/Signupp.css';

function Signup() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const signup = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, password, confirmPassword } = user;
        if (firstName && lastName && email && password && (password === confirmPassword)) {
            try {
                console.log("Sending data:", user); // Debugging log
                const res = await axios.post("http://localhost:9002/signup", user);
                console.log("Response received:", res.data);
                alert(res.data.message);
            } catch (err) {
                console.error("Error occurred:", err);
                alert('An error occurred. Please try again.');
            }
        } else {
            alert("Invalid input");
        }
    }

    return (
        <div className='signup-page'>
            <form className="form" onSubmit={signup}>
                <p className="title">Register</p>
                <p className="message">Signup now and get full access to our app.</p>
                <div className="flex">
                    <label>
                        <input className="input" type="text" placeholder="Firstname" name="firstName" value={user.firstName} onChange={handleChange} required />
                    </label>
                    <label>
                        <input className="input" type="text" placeholder="Lastname" name="lastName" value={user.lastName} onChange={handleChange} required />
                    </label>
                </div>
                <label>
                    <input className="input" type="email" placeholder="Email" name="email" value={user.email} onChange={handleChange} required />
                </label>
                <label>
                    <input className="input" type="password" placeholder="Password" name="password" value={user.password} onChange={handleChange} required />
                </label>
                <label>
                    <input className="input" type="password" placeholder="Confirm password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} required />
                </label>
                <button className="button" type="submit">Submit</button>
                <p className="signin">Already have an account? <NavLink to="/login" activeClassName="active">Signin</NavLink></p>
            </form>
        </div>
    )
}

export default Signup;
