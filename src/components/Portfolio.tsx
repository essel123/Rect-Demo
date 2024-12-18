
 import '../css/nav.css'
 import '../App.css'
 

import NavBar from './NavBar'
import { useState } from 'react';
import Welcome from './Welcome';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';

function Portfolio() {

  const [menue, setmenue] = useState(false);
  


 
  function menueclicked()
  {
    const links = document.getElementById("links");


    setmenue(!menue)
    if(links)
      {
        links.classList.add("links")
      }

    if(menue == false)
    {

      if(links)
        {
          links.classList.remove("links")
         
        }

    }

    }
    
    
 
  

  return (
    <>

    <nav className='p-5 lg:shadow-lg  md:shadow-lg sm:shadow-none fixed'>
    <div className="logo ">
            <h1 className='lg:font-bold lg:text-4xl md:font-bold md:text-xl sm:font-extrabold sm:text-lg'><span className='title'>A</span>pusigaTech</h1>
    </div>
   <div className=''>

   <div className="links" id='links'>
   <NavBar/>
   </div>

   <div className="menue">
   <img onClick={menueclicked} className='w-8' src={menue?"/menue-close.svg":"/menue-open.svg"} alt="" />
   </div>
    {/* {
      menue? <img onClick={menueclicked} className='w-8' src="public/menue-open.svg" alt="" />:<NavBar/>
    } */}
   </div>
    </nav>

    <main className='p-2'>

      <aside className='lg:px-10 md:px-10 sm:px-5'>

        <div className='welcome' id='Home'>
        <Welcome/>
        </div>
       <div id="About">
       <About/>
       </div>
       
        <div id="Projects">
        <Projects/>
        </div>
       <div id="Contact">
       <Contact/>
       </div>
      </aside>

    </main>

    <footer className='h-10 w-full bg-slate-900'>

      <div className="quicklinks p-5 text-white text-center">
        <h1> © 2024 Essel Apusiga Abraham. All rights reserved.
        </h1>

      </div>
    </footer>
      
    </>
  )
}

export default Portfolio
