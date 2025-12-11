import React from "react";

function Cards({
  movieObj,
  poster_path,
  name,
  handleWatchList,
  handleRemoveWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[154px] bg-cover bg-center rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex justify-between flex-col items-end mb-4 ml-4"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          className="m-4 flex justify-center h-6 w-6 items-center rounded-lg bg-gray-900/60"
          onClick={() => handleRemoveWatchList(movieObj)}
        >
          &#10060;
        </div>
      ) : (
        <div
          className="m-4 flex justify-center h-6 w-6 items-center rounded-lg bg-gray-900/60"
          onClick={() => handleWatchList(movieObj)}
        >
          &#11088;
        </div>
      )}
      <div className="text-white text-lg text-center w-full bg-gray-900/60 p-2">
        {name}
      </div>
    </div>
  );
}

export default Cards;

// https://api.themoviedb.org/3/movie/popular?api_key=2f82f78451adb429a8de54a27b30d463&language=en-US&page=1
