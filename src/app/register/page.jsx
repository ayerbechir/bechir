"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import style from './registerst.css'
import Image from 'next/image'
const register = () => {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error,setError]=useState("");
  const handleSub = async (e) =>{
    e.preventDefault();
    if (!name || !email || !lastname || !password) {
      setError("All fields are necessary.");
      return;
    }
    try {
      const res= await fetch('api/register',{
        method:"POST",headers:{
          "Content-Type":"application/json"
        },body:JSON.stringify({
          name,lastname,email,password
        }),
      });
      if (res.ok) {
        const form=e.target;
        form.reset();
      }else{
        console.log("user registration failed.");
      }
    } catch (error) {
      console.log("error during registartaion: ",error);
    }
  };

  return (
    <div className='divregister'>
      <div className='form'>
        <form onSubmit={handleSub} method='POST'>
          <input onChange={(e)=>setName(e.target.value)} type="text" className='input2'placeholder='First name' id='name' required/>
          <input onChange={(e)=>setLastname(e.target.value)} type="text" className='input2' placeholder='Last name' id='lastname' required/><br/>
          <input onChange={(e) =>setEmail(e.target.value)} type="email" className='input2' placeholder='Email'id='email' required/>
          <input onChange={(e)=>setPassword(e.target.value)} type="password" className='input2' placeholder='Password' id='password' required/><br />
          <select className='input3'  required>
          <option value="">Select your option</option>
          <option value="student">Student</option>
          <option value="doctor">Doctor</option>
          <option value="other">Other</option>
        </select>
        {
          error &&(
          <div onChange={(e)=>(e.target.value)} className='error'>
            {error}
          </div>

          )
        }
        </form>
        <Link href="/login" className='registerbtn'>log in</Link>
        <hr className='hrline'/><p className='p2'>or</p><hr className='hrline2'/>
        <div className='gmail'>
        <Image className='gmaillogo' src="/1.png" width={20} height={15}/>
        <Link href="#" className='gmaill'>sign up with gmail</Link>
        </div>
        
      </div>
    </div>
  )
}

export default register