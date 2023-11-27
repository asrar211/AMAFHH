import { useState } from 'react'
import {Link } from  "react-router-dom"
import axios from "axios"

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", user);
      const data = response.data;
      console.log(data.message);
      setUser({
        name: '',
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div > 
      <div className='flex flex-col items-center bg-slate-200 w-1/2 ml-[25%] mt-10 rounded-xl'>
      <h1 className='text-red-900 font-bold text-2xl my-5'>Login Here</h1>
      <form className='flex flex-col' >
         <input 
        className='p-2 rounded-full outline-none text-xl mb-5'
        type="email"
        name='email'
        placeholder='Enter Your Email'
        value={user.email}
        onChange={handleChange}
        />
         <input 
        className='p-2 rounded-full outline-none text-xl mb-5'
        type="password"
        name='password'
        placeholder='Enter Your Password'
        value={user.password}
        onChange={handleChange}
        />
        <button onClick={handleSubmit} className='bg-red-900 text-xl font-semibold text-white p-2 mb-10 w-1/2 ml-[25%] rounded-full ' type="Submit">LogIn</button>
      </form>
      <h4 className='mb-5'>Not Registered ? <Link to="/register" className='font-semibold'>Register Here</Link> 
      </h4>
      </div>
    </div>
  )
}

export default Login