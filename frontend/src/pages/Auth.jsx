import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Auth({register}) {
    const [userdetails, setuserdetails] = useState({
    username:"",
    email:"",
    password:""
  })
  return (
    <>
     <div id='login'>
   <div className="md:grid grid-cols-3">
    <div></div>
    <div className='flex justify-center items-center flex-col'>
      <h1 className='text-white text-3xl font-bold mb-5'>Web Store</h1>
      <form className='w-full bg-gray-900 p-10 flex justify-center items-center flex-col'>
        <div style={{width:"40px",height:"40px",borderRadius:"50%"}} className='border border-white flex justify-center items-center flex-col'>
       <FontAwesomeIcon icon={faUser} className='text-white fa-2x'/>
       </div>
     {!register?  <h3 className='text-white mt-4 text-2xl'>Login</h3>:
       <h3 className='text-white mt-4 text-2xl'>Register</h3>}
       {register &&
         <div className="mb-3 w-full mt-8">
         <input type="text" placeholder='Username' className='p-2 rounded placeholder-gray-600 bg-white w-full'value={userdetails.username} onChange={(e)=>setuserdetails({...userdetails,username:e.target.value})}/>
        </div>
       }
       <div className="mb-3 w-full mt-8">
        <input type="text" placeholder='Email Id' className='p-2 rounded placeholder-gray-600 bg-white w-full'   value={userdetails.email} onChange={(e)=>setuserdetails({...userdetails,email:e.target.value})} />
       </div>
       <div className="mb-3 w-full mt-4">
        <input type="text" placeholder='Password' className='p-2 rounded placeholder-gray-600 bg-white w-full' value={userdetails.password} onChange={(e)=>setuserdetails({...userdetails,password:e.target.value})} />
       </div>
       
       <div className="mb-5 w-full flex justify-between">
        <p className='text-amber-300' style={{fontSize:'10px'}}>Never share your Password with others</p>
       {! register && <p className='text-white' style={{fontSize:'10px'}}>Forget Password</p>}
       </div>
      {register? <div className="mb-2 w-full ">
        <button type='button' className='bg-green-800 text-white p-3 rounded w-full'>Register</button>
       </div>:
       <div className="mb-2 w-full ">
        <button type='button' className='bg-green-800 text-white p-3 rounded w-full' >Login</button>
       </div>}
     { !register&& <div className='mb-5 w-full mt-3'>{/*<button className='bg-white text-black p-3 rounded w-full'>Sign In with Google</button>*/}
     </div>}
       {!register?<p className='text-white'>Are you a user? <Link to={'/register'} className='text-blue-900 underline ms-2 '>Register</Link></p>:
       <p className='text-white'>Are you already a user? <Link to={'/login'} className='text-blue-900 underline ms-2 '>Login</Link></p>}
      </form>
    </div>
    <div></div>
   </div>
    </div>
    </>
  )
}

export default Auth







