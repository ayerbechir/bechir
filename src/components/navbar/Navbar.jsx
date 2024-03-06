import Link from 'next/link'
import React from 'react'
import style from './/styless.css'
const Navbar = () => {
  return (
    <div>
      <div className='div0'>
        <Link href="/" className='logname'>GM-GPT</Link>
      </div>
      <div className="div1">
        <Link href="/" className='linkhere'>Home</Link>
        <Link href="/login" className='linkhere'>Join</Link>
        <Link href="/about" className='linkhere'>About me</Link>
        <Link href="/contact" className='linkhere'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar