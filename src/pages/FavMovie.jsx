import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlLike } from "react-icons/sl";
import { removeFromFav, selectAllFavorite } from "../features/movie/movieSlice";
import { motion, useAnimation, useInView } from "framer-motion";

function FavoriteMovies() {
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectAllFavorite);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const handleRemoveFromFav = (movie,event) => {
    event.stopPropagation(); 
    dispatch(removeFromFav(movie));
  };
  const handleCardClick = (imdbUrl) => {
    window.open(imdbUrl, "_blank");
  };
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div className="flex justify-center items-center flex-col">
      {favoriteMovies.length === 0 ? (
        <p className="text-lg text-gray-500 mt-10">No liked movies</p>
      ) : (
        <motion.div
          className="mx-4 my-10 w-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          
          ref={ref}
          variants={{
            hidden: { opacity: 0, x: 75 },
            visible: { opacity: 1, x: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.75, delay: 0.25 }}
        >
          {favoriteMovies.map((movie) => (
            <div
              key={movie.id}
              className="relative h-[400px] w-[300px] mb-4 rounded-md"
              onClick={() => handleCardClick(movie.imdb_url)}
            >
              <img
                src="https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                alt={movie.title}
                className="z-0 h-full w-full rounded-md object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">
                  {movie.movie}
                </h1>
                <p className="mt-2 text-sm text-gray-300">
                  Rating: {movie.rating}
                </p>
                <button
                  className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white"
                  onClick={() => handleRemoveFromFav(movie)}
                >
                  <SlLike className="text-[20px] text-red-500" />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default FavoriteMovies;
