import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { addUser } from '../store/slices/userSlice';
import { auth } from '../firebase';
import toast from 'react-hot-toast';


const Header = () => {

    const user=useSelector((store)=>store.user);
   
    const dispatch=useDispatch();
    const navigate=useNavigate();
   
    const handleLogout=()=>
        {
           
signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(addUser(null))
  navigate("/")
  toast.success("Logged Out")
}).catch((error) => {
  // An error happened.
  toast.error("Not able to logout")
})
        }

    if(user)
        {
            return (<div className='header' >
                   <span style={{textDecoration:"underline"}} >User:{user}</span>
                   <NavLink to="/" onClick={handleLogout} className="nav-link" >LogOut</NavLink>
            </div>)
        }
    
  return (
    <div className="header">
       <NavLink to="/" className="nav-link" >Login</NavLink>
       <NavLink to="/signup" className="nav-link">SignUp</NavLink>
    </div>
  )
}

export default Header;
