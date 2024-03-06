import Link from 'next/link'
import style from './loginst.css'
import React from 'react'
const login = () => {
  return (
    <div>
      <div className='divlogin'>
        <div className='form'>
          <form method='POST' action='/DB.php'>
            <input id='email' type="email"  required placeholder='your adress mail' className='auth adresse'/><br />
            <input id='pass' type="password" className='auth password' placeholder='your password' required /><br />
            <Link href="/lostpass" className='linkhere forget'>Forget password?</Link><br /><br /><br /><br /><br />
            <Link href='main'className='loginbtn'>Log in</Link>
            <label className='label1'>Need an account? <Link href='/register'className='test'>Sign up</Link></label>
          </form>
        </div>
      </div>
    </div>
  )
}

export default login