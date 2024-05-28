import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from './Button';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { addUser } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';

import { auth } from '../firebase';
import toast from 'react-hot-toast';
const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
   
    const navigate=useNavigate();
    const dispatch=useDispatch();

    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(e) {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    function submitHandler(e) {
        e.preventDefault();
        signInWithEmailAndPassword(auth, formData.email,formData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    dispatch(addUser(formData.email))
    console.log(user)
    setFormData({
        email: "",
        password: ""
    })
    toast.success("Logged In")
    navigate("/dashboard")
    // ...
  })
  .catch((error) => {
  console.log(error)
  toast.error("Login Failed")
  });
        
    }

    return (
        <form className="login-form" onSubmit={submitHandler}>
            <h2 className="form-heading">Login</h2>
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
            <Button text="Login" onChange={submitHandler} />
        </form>
    );
}

export default LoginForm;
