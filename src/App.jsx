import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";

function App() {
  const [watchlist, setWatchlist] = useState([]);

  const handleWatchList = (movieObj) => {
    const newWatchList = [...watchlist, movieObj];
    localStorage.setItem("MovieApp", JSON.stringify(newWatchList));
    setWatchlist(newWatchList);
  };

  const handleRemoveWatchList = (movieObj) => {
    const filteredWatchList = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });

    setWatchlist(filteredWatchList);
    localStorage.setItem("MovieApp", JSON.stringify(filteredWatchList));
  };

  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem("MovieApp");
    if (!moviesFromLocalStorage) {
      return;
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  handleWatchList={handleWatchList}
                  handleRemoveWatchList={handleRemoveWatchList}
                  watchlist={watchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                handleRemoveWatchList={handleRemoveWatchList}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
