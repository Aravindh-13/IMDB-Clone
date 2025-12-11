import React, { useEffect, useState } from "react";
import genreids from "../Utility/genre";

function Watchlist({
  watchlist,
  movieObj,
  poster_path,
  name,
  setWatchlist,
  handleRemoveWatchList,
}) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currGenre, setCureGenre] = useState("All Genres");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleFilter = (genre) => {
    setCureGenre(genre);
  };

  let sortIncreasing = () => {
    let sortedIncreasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });

    setWatchlist([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortedDecreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);

  return (
    <>
      <div className="flex justify-center flex-wrap m-4">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "rounded-xl font-bold w-[9rem] text-center bg-blue-400 rounded p-3 text-white mx-4"
                  : "rounded-xl font-bold w-[9rem] text-center bg-gray-400/50 rounded p-3 text-white mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] outline-none bg-gray-200 border-gray-500 px-4"
          placeholder="search movies"
          type="text"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 m-8 ">
        <table className="w-full text-gray-500 text-center">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex items-center justify-center">
                <div onClick={sortIncreasing} className="p-2 cursor-pointer">
                  <i class="fa-solid fa-arrow-up"></i>
                </div>
                <div className="p-2">Ratings</div>
                <div onClick={sortDecreasing} className="p-2 cursor-pointer">
                  <i class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>

          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == currGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr>
                    <td className="flex items-center">
                      <img
                        className="h-[7rem] w-[7rem] px-6 py-4"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-10">{movieObj.original_title}</div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>

                    <td
                      onClick={() => handleRemoveWatchList(movieObj)}
                      className="text-red-800 cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
