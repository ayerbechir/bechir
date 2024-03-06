import Link from 'next/link'
import style from './lost.css'
import React from 'react'
const lost = () => {
  return (
    <div>
      <div className='divlogin'>
        <div className='formN'>
          <form method='POST' >
            <input id='email' type="email"  required placeholder='your adress mail' className='passN'/><br />
            <Link href='/login'className='nextbtn'>Next</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default lost