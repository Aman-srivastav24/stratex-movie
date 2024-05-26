import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllFavorite } from '../features/movie/movieSlice';

function FavoriteMovies() {
  const favoriteMovies = useSelector(selectAllFavorite);

  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='mx-4 my-10 w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
        {favoriteMovies.map((movie) => (
          <div key={movie.id} className='relative h-[400px] w-[300px] mb-4 rounded-md'>
            <img
              src='https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
              alt={movie.title}
              className='z-0 h-full w-full rounded-md object-cover'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent'></div>
            <div className='absolute bottom-4 left-4 text-left'>
              <h1 className='text-lg font-semibold text-white'>{movie.movie}</h1>
              <p className='mt-2 text-sm text-gray-300'>Rating: {movie.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteMovies;
