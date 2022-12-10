import './App.css';
import React from 'react'

function App() {

  const[movie_name,setMovieName]=React.useState("")
  const[movie_review,setMovieReview]=React.useState("")

  return (
    <div className="App">
      <h1>CRUD APPLICATION</h1>
      <label>Movie Name</label>
      <input type="text" name="movie_name">{movie_name}</input>
      <label>Movie Review</label>
      <input type="text" name="movie_review">{movie_review}</input>
    </div>
  );
}

export default App;
