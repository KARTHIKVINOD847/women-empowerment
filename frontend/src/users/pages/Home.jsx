import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <>
    <header className='flex justify-center items-center'>
    <div id="main" className='flex justify-center items-center'>
      <div className="md:grid grid-cols-3">
        <div className=""></div>
        <div className="text-white flex justify-center items-center flex-col">
          <h1 className='text-5xl'>Wonderfull Gifts</h1>
      <p>Give your family and parents a book</p>
      <div className="flex mt-10 w-full">
      <input type="text" placeholder='Search About us'  className='py-2 px-4 bg-white rounded-3xl text-3xl placeholder-amber-200 w-full'  />
      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-blue-300' style={{marginTop:'11px',marginLeft:"-30px"}}/>
      </div></div>
        <div className=""></div>
      </div>
      </div>
    </header>
    
    <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>
      <h2 className='text-3xl font-bold'>Featured Programs</h2>
      <div className="grid grid-cols-4 w-full mt-5">
       <div className='p-3 shadow'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH0XS2H-yaOPp5Gsy2qK5DITVCAJFmbtrzRw&s" alt="" style={{width:"100%",height:"300px"}} />
        <div className='flex justify-center flex-col items-center ms-3'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, commodi tenetur, suscipit illum necessitatibus</p>
        </div>
       </div>
       <div className='p-3 shadow-md'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_p8M6hDTJ4dzquIK6L6jBGHXmTkPUoKJh9v1rLvHAIF0cbel_0_60Xl-BtnScLFH1Gmw&usqp=CAU" alt="" style={{width:"100%",height:"300px"}} />
        <div className='flex justify-center flex-col items-center ms-3'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, commodi tenetur, suscipit illum necessitatibus</p>
        </div>
       </div>
       <div className='p-3 shadow'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoEnqZiP_8GPwrizVokhMWzGEh9n5QE_58GvpkKFMJ0AXkUBe9O8oUk_JRhaWOlcMahkA&usqp=CAU" alt="" style={{width:"100%",height:"300px"}} />
        <div className='flex justify-center flex-col items-center ms-3'>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, commodi tenetur, suscipit illum necessitatibus
          </p> 
          
        </div>
       </div>
       <div className='p-3 shadow'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTimguLEKknTpcH45eE3ifYP6ByvP_7v_wZnwRXmk0Q8wvh1OptRwrwFHrU8iPs7X7yX5s&usqp=CAU" alt="" style={{width:"100%",height:"300px"}} />
        <div className='flex justify-center flex-col items-center ms-3'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, commodi tenetur, suscipit illum necessitatibus</p>
        </div>
       </div>
      </div>
      <div className="flex justify-center items-center mt-5">
       <Link to={'/allbooks'}> <button className='px-3 py-2 bg-blue-500 text-white hover:border hover:border-blue-900 hover:text-blue-900 hover:bg-white'>Explore More</button></Link>
      </div>
    </section>


    <section className='flex justify-center items-center flex-col md:p-10 md:px-40 p-5'>
    <div className="md:grid grid-cols-2 w-full">
      <div className="flex justify-center items-center flex-col">
        <h3>Featured Actions</h3>
        <h3 className='text-2xl'>Captured with every Word</h3>
      
     <p className='mt-5 text-justify'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero cum assumenda, odio fuga ratione velit reprehenderit, nesciunt commodi modi dolore, magni dolorum rem nobis obcaecati sint dolores itaque qui.lorem
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rem nesciunt autem corporis repellendus facilis impedit, fugit ipsam deserunt consectetur, illo aspernatur reiciendis exercitationem laboriosam temporibus sit accusantium ad qui.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et quas, eligendi vitae beatae vero animi id deserunt impedit sequi provident quo blanditiis quod, debitis, voluptates mollitia dolore at! Autem!
     </p>
     <p className='mt-5 text-justify'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad vero cum assumenda, odio fuga ratione velit reprehenderit, nesciunt commodi modi dolore, magni dolorum rem nobis obcaecati sint dolores itaque qui.lorem
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum rem nesciunt autem corporis repellendus facilis impedit, fugit ipsam deserunt consectetur, illo aspernatur reiciendis exercitationem laboriosam temporibus sit accusantium ad qui.Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores et quas, eligendi vitae beatae vero animi id deserunt impedit sequi provident quo blanditiis quod, debitis, voluptates mollitia dolore at! Autem!
     </p>
     </div>
     <div className="pt-32 px-10">
      <img src="https://wallpapers.com/images/hd/women-background-n9t5k0r03kw0qze3.jpg" alt="" className='w-full' />
     </div>
      </div>

    </section>


    <div className="flex justify-center items-center flex-col md:py-10 md:px-40 p-6">
      <h3>TESTIMONIALS</h3>
      <h3 className='text-3xl'>See What Others Are Seeing</h3>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI7_4J8etENu9JleVSTqEG0P28I1ay_PUGpA&s" alt="" style={{width:"150px",borderRadius:"50%"}} className='mt-5' />
      <h6 className='mt-3'>Treesa Joseph</h6>
      <p className='mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni expedita error dolore in porro atque molestias accusamus aspernatur eaque, sit rem, provident quos iste, architecto perferendis est quam eligendi omnis.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dolorem libero nostrum minus laborum velit repellat repudiandae! Ratione, necessitatibus doloremque corrupti culpa placeat praesentium quam itaque exercitationem, perferendis officia porro.Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos magnam quae excepturi quisquam, fuga dolor atque deleniti impedit voluptates earum id ullam repellendus sequi nobis non ea. Saepe, sunt inventore?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus veniam animi dolores cumque ipsam doloremque voluptatibus rem magni incidunt eum non in sunt eaque, pariatur, iure at consectetur delectus. Dolores?
      </p>
    </div>
    </>
  )
}

export default Home