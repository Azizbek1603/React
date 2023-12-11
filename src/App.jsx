import './App.scss'
import Header from './layout/header/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './routes/login/Login';
import Signup from './routes/signup/Signup';
import Auth from './pages/auth/Auth';
import Admin from './pages/admin/Admin';
import Posts from "./routes/post/Posts"
import Singlepost from "./routes/post/Singlepost.jsx"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreatePost from './routes/createPost/CreatePost';
import ManagePosts from './routes/managepost/ManagePosts';

function App() {

  return (
    <>
      <Header />
      <Posts />
      <Routes>
        <Route path='/auth' element={<Auth />} >
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
        </Route>
        <Route path='/admin' element={<Admin/>}>
          <Route path='createpost' element={<CreatePost />} />
          <Route path='managepost' element={<ManagePosts />} />  
        </Route>.
        <Route path='/posts' element={<Posts />} />
        <Route path='/singlepost/:id' element={<Singlepost />}/>
      </Routes> 
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />     
    </>
  )
}

export default App
