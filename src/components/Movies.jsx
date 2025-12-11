import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ handleWatchList, handleRemoveWatchList, watchlist }) {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const handlePrev = () => {
    if (pageNo > 1) {
      setPageNo(pageNo - 1);
    }
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=2f82f78451adb429a8de54a27b30d463&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);
  return (
    <div>
      <div className="text-2x font-bold text-center p-5">Trending Movies</div>
      <div className="flex flex-row justify-around flex-wrap">
        {movies.map((movieObj) => {
          return (
            <Cards
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              handleWatchList={handleWatchList}
              handleRemoveWatchList={handleRemoveWatchList}
              watchlist={watchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNo={pageNo}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

export default Movies;
