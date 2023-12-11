import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {instance} from "../../api";
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleCreateUser = (e) => {
    e.preventDefault();
    instance.post("/api/auth/signup", {
      "firstname" : `${firstName}`,
      "lastname" : `${lastName}`,
      "email" : `${email}`,
      "password" : `${password}`
    })
      .then(response => {
        if(response.status === 201){
          toast.success('You registered succesfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
          navigate("/auth/login")
        }
      })
      .catch(error => {
        console.log(firstName, lastName);
       console.log(error);
      })

  }

  return (
    <div className='authorization'>
      <h1>Exam</h1>
      <h2>Sign up</h2>
      <form onSubmit={handleCreateUser}>
        <input type="text" placeholder='Firstname'  required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        <input type="text" placeholder='Lastname'  required value={lastName} onChange={(e) => setLastName(e.target.value)}/>
        <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password'  required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={handleCreateUser}>Sign up</button>
      </form>
      <p>Do you have an account? <Link to="/auth/login" className='a'>Login.</Link></p>
    </div>
  )
}

export default Signup