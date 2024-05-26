import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion, useAnimation, useInView } from "framer-motion";
import { SlLike } from "react-icons/sl";
import { GrCaretNext,GrCaretPrevious } from "react-icons/gr";
import {
  addToFav,
  fetchMovies,
  selectAllMovie,
  removeFromFav,
  selectAllFavorite,
} from "../features/movie/movieSlice";

function MovieCard() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const favorites = useSelector(selectAllFavorite);
  const movies = useSelector(selectAllMovie);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();
  const handlePage = (selectedPage) => {
    setPage(selectedPage);
  };

  const handleToggleFav = (movie, event) => {
    event.stopPropagation(); 
    if (favorites.some((fav) => fav.id === movie.id)) {
      dispatch(removeFromFav(movie));
    } else {
      dispatch(addToFav(movie));
    }
  };

  const handleCardClick = (imdbUrl) => {
    window.open(imdbUrl, "_blank");
  };
  useEffect(() => {
    dispatch(fetchMovies());
    if (isInView) {
      mainControls.start("visible");
    }
  }, [dispatch, isInView]);



  return (
    <div className="flex justify-center items-center flex-col">
      <div className="">
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
          {movies.slice(page * 10 - 10, page * 10).map((movie) => (
            <div
              key={movie.id}
              className="relative h-[400px] w-[300px] mb-4 rounded-md cursor-pointer transition-transform transform hover:scale-105 "
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
                  onClick={(event) => handleToggleFav(movie, event)}
                >
                  <SlLike
                    className={`text-[20px] ${
                      favorites.some((fav) => fav.id === movie.id)
                        ? "text-red-500"
                        : "text-white"
                    }`}
                  />
                </button>
              </div>
            </div>
          ))}
        </motion.div>
        <div className="pagination flex items-center justify-center mb-8 ">
          <p
            className={`mx-1 text-sm font-semibold text-gray-900 cursor-pointer hover:scale-110 ${
              page === 1 ? "hidden" : ""
            }`}
            onClick={() => {
              handlePage(page - 1);
            }}
          >
            <GrCaretPrevious/>
          </p>
          <div className="grid grid-cols-5 md:grid-cols-10">
            {[...Array(Math.ceil(movies.length / 10))].map((_, i) => (
              <span
                key={i}
                className={`mx-1 flex items-center cursor-pointer gap-2 rounded-md border border-gray-400 px-3 py-1 text-gray-900 hover:scale-105 ${
                  page === i + 1 ? "bg-gray-300" : ""
                }`}
                onClick={() => {
                  handlePage(i + 1);
                }}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <p
            href="#"
            className={`mx-2 text-sm font-semibold text-gray-900 cursor-pointer hover:scale-110 ${
              page === Math.ceil(movies.length / 10) ? "hidden" : ""
            }`}
            onClick={() => {
              handlePage(page + 1);
            }}
          >
          <GrCaretNext/>
          </p>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
