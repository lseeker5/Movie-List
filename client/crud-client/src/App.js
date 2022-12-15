import './App.css';
import React from 'react'
import Axios from 'axios'



function App() {
  const[movie_name,setMovieName]=React.useState("")
  const[movie_review,setMovieReview]=React.useState("")
  const[movie_list,setMovieList]=React.useState([])

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response=>{
      setMovieList(response.data)
    }))
  })

  const submitReview=()=>{
    Axios.post('http://localhost:3001/api/insert',{
      movie_name:movie_name,
      movie_review:movie_review
    }).then(()=>{
      alert("Your review has been submitted.")
    })
  }

  return (
    <div className="App">

      <h1>CRUD APPLICATION</h1>

      <div className='MN'>
        <label className='MN-label'>Movie Name</label>
        <input type="text" name="movie_name"className='MN-input' onChange={(e)=>{
          setMovieName(e.target.value)
        }}/>
      </div>
      
      <div className='MR'>
        <label className='MR-label'>Movie Review:</label>
        <input type="text" name="movie_review" className='MR-input'onChange={(e)=>{
          setMovieReview(e.target.value)
        }}/>
      </div>

      <button onClick={submitReview} className='submit-btn'>Submit</button>
      {movie_list.map((val)=>{
        return(
          <h1>{val.movie_name}{val.movie_review}</h1>
        )
      })}
    </div>
  );
}

export default App;
