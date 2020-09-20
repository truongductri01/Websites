import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "./axios"; //axios is just the name we take from the code we wrote
import "./Row.css";
import movieTrailer from "movie-trailer";

const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  // {} as the argument is call deconstructors

  const [movies, setMovies] = useState([]); // another way to code this.state

  // A snippet of code which runs based on a specific condition/variable
  const [trailerUrl, setTrailerUrl] = useState("");

  // Use effect runs and re-renders the page whenever the object inside the "[]" change
  // If [] is empty only run once

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log("request >>", request);
      setMovies(request.data.results);
    }
    fetchData();
  }, [fetchUrl]);
  // Whenever the UseEffect use the variable from outside itself
  // => put that inside the[]

  console.log({ title }, movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      {/* container -> posters */}
      <div className="row_posters">
        {/* put the movies inside div allow us to row through them */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          ></img>
        ))}
      </div>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
