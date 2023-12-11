import {useState} from 'react'
import { instance } from '../../api';
import {toast} from "react-toastify";
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLoginUser = (e) => {
    e.preventDefault();

    instance.post("/api/auth/login", {
      email,
      password
    }).then(response => {
      console.log(response);
      if(response.status === 200){
        console.log("aaaaaa");
        toast.success('You logged in successfully', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colorful",
          });
        localStorage.setItem("id", response.data.data._id)
        localStorage.setItem("token", response.data.token);
        navigate("/");
      }
    })
    .catch(error => {
      console.log(error);
      toast.error(error.response.data.message)
    });
  }

  return (
    <div className='authorization'>
      <h1>Exam</h1>
      <h2>Login</h2>
      <form onSubmit={handleLoginUser}>
        <input type="email" placeholder='Email' required value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder='Password'  required value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLoginUser}>Login</button>
      </form>
      <p>Don't you have an account? <Link to="/auth/signup" className='a'>Sign up.</Link></p>
    </div>
  )
}

export default Login