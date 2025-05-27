import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faInstagram,faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faUser,faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {
     const[status,setStatus]=useState(false)
 
  return (
    <>
  <div className='grid grid-cols-3 p-3'>
        <div className='flex  items-center'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/045/989/550/small_2x/banner-for-women-s-day-women-of-different-nationalities-stand-side-by-side-concept-of-movement-for-gender-equality-and-women-s-empowerment-free-vector.jpg" alt="" style={{width:"100px",height:"50px",borderRadius:"10%", borderColor:"white"}} />
        </div>
        <div className='flex items-center justify-center'>
          <h1 className='text-3xl md:hidden ms-2'>
            Book Store
          </h1>
        </div>
        <div className='flex justify-end items-center'>
          <FontAwesomeIcon icon={faInstagram} className='me-2'/>
          <FontAwesomeIcon icon={faXTwitter} className='me-2'/>
          <FontAwesomeIcon icon={faFacebook} className='me-2'/>
      <Link to={'/login'}><button className='border border-black rounded px-3 py-2'><FontAwesomeIcon icon={faUser} className='me-2'/>Login</button></Link>
       <div className="relative inline-block text-left">
</div>
        </div>
      </div>
      <nav className='p-3 w-full bg-gray-500 text-white md:flex justify-center items-center'>
        <div className="flex justify-between px-3 md:hidden">
        <span onClick={()=>setStatus(!status)} className='text-2xl'><FontAwesomeIcon icon={faBars} /></span>
     <Link to={'/login'}>
          <button   className='border border-white rounded px-3 py-2 ms-3'><FontAwesomeIcon icon={faUser} className='me-2'/>Login</button>
       </Link>
      


        </div>

      <ul className={status?'md:flex':'md:flex  justify-center hidden'}>
        <Link to={'/'}><li className='mx-4 md:mt-0'>Home</li></Link>
      <Link to={'/allbooks'}>  <li className='mx-4 md:mt-0'>About Us</li></Link>
        <Link to={'/carrers'}><li className='mx-4 md:mt-0' >Get Involved</li></Link>
        <li className='mx-4 md:mt-0'>Contact</li>
      </ul>
      </nav>
    </>
  )
}

export default Header