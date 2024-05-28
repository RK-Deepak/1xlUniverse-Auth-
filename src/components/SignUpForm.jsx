import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from './Button';
import {createUserWithEmailAndPassword} from "firebase/auth"
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const SignupForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const navigate=useNavigate();

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function changeHandler(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));

     
    }

    function submitHandler(e) {
        
        e.preventDefault();
        if(formData.password===formData.confirmPassword)
            {
                console.log(formData);
                createUserWithEmailAndPassword(auth,formData.email,formData.password)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            
             
            console.log(user)
            setFormData(
                {
                    username: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                }
            )
            navigate("/")
            toast.success("Signed Up")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            toast.error("Sign Up Failed")
            // ..
          });
            }
        
    }



    return (
        <form className="signup-form" onSubmit={submitHandler}>
            <h2 className="form-heading">Sign Up</h2>
            <label htmlFor="username" className="form-label">
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={changeHandler}
                    className="form-input"
                />
            </label>
            <label htmlFor="email" className="form-label">
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={changeHandler}
                    className="form-input"
                />
            </label>
            <label htmlFor="password" className="form-label">
                <div className="password-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={changeHandler}
                        className="form-input"
                    />
                    {showPassword
                        ? <AiOutlineEyeInvisible onClick={() => setShowPassword(false)} className="password-icon" />
                        : <AiOutlineEye onClick={() => setShowPassword(true)} className="password-icon" />}
                </div>
            </label>
            <label htmlFor="confirmPassword" className="form-label">
                <div className="password-container">
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={formData.confirmPassword}
                        onChange={changeHandler}
                        className="form-input"
                    />
                    {showConfirmPassword
                        ? <AiOutlineEyeInvisible onClick={() => setShowConfirmPassword(false)} className="password-icon" />
                        : <AiOutlineEye onClick={() => setShowConfirmPassword(true)} className="password-icon" />}
                </div>
            </label>
            <Button text="Sign Up" onChange={submitHandler}/>
        </form>
    );
};

export default SignupForm;
