import React, { useEffect ,useState} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addToFav, fetchMovies, selectAllMovie } from '../features/movie/movieSlice';
function MovieCard() {
    const dispatch = useDispatch();
    const [page , setPage] =useState(1);
    const handlepage = (selectedpage)=>{
     
     setPage(selectedpage)
    }
    const handleAddToFav=(movie)=>{
      dispatch(addToFav(movie))
    }
    const movies=
    useSelector(selectAllMovie)

    useEffect(() => {
     dispatch(fetchMovies());
    }, [dispatch])
    console.log(movies)
  return (
    <div className='flex justify-center items-center flex-col '>
    <div className='mx-4 my-10 w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 '>
      {movies.slice(page*10-10,page*10).map((movie)=>(
         <div class="relative h-[400px] w-[300px] mb-4 rounded-md">
         <img
           src="https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
           alt="AirMax Pro"
           class="z-0 h-full w-full rounded-md object-cover"
         />
         <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
         <div class="absolute bottom-4 left-4 text-left">
           <h1 class="text-lg font-semibold text-white">{movie.movie}</h1>
           <p class="mt-2 text-sm text-gray-300">
           Rating: {movie.rating}
           </p>
           <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white" onClick={()=>{handleAddToFav(movie)}}>
             Add To Fav
           </button>
         </div>
       </div>
      ))}
     </div>
     <div class="flex items-center mb-8">
  <p
     
    className={`mx-1  text-sm font-semibold text-gray-900 cursor-pointer hover:scale-110 ${page==1?"hidden":""}`}
    onClick={()=>{handlepage(page-1)}}
  >
    ← Previous
  </p>
 
  {
    [...Array(movies.length/10)].map((_,i)=>{
      return <span className={`mx-1 flex items-center cursor-pointer rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 ${page==i+1?"bg-gray-300":""}`}  onClick={()=>{handlepage(i+1)}}>{i+1}</span>
    })
  }

 
  <p href="#" class={`mx-2 text-sm font-semibold text-gray-900 cursor-pointer hover:scale-110 ${page==movies.length/10?"hidden":""}`} onClick={()=>{handlepage(page+1)}}>
    Next →
  </p>
</div>

    </div>
  )
}

export default MovieCard