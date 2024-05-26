import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
  <header className="bg-black text-white font-bold p-2 md:p-4 m-4 rounded-lg">
    <div className="container flex flex-col md:flex-row justify-between items-center mx-auto">
  
        
       <Link to='/'> <h1>Movie-Star</h1> </Link>  
       <Link to='/'> <h1 className="cursor-pointer hover:scale-110">All MOVIES</h1></Link>
       <Link to='fav'> <h1 to="#" className="cursor-pointer hover:scale-110">FAVORITE</h1> </Link>
       
      </div>
     
      
   
  </header>
    </div>
  )
}

export default Header