import './App.css';
import './TableRow.css';
import React from 'react'
import Axios from 'axios'
import TableRow from './TableRow'



function App() {
  const[movie_name,setMovieName]=React.useState("")
  const[movie_review,setMovieReview]=React.useState("")
  const[movie_list,setMovieList]=React.useState([])
  const[new_movie_review,setNewMovieReview]=React.useState("")

  React.useEffect(()=>{
    Axios.get("http://localhost:3001/api/get").then((response=>{
      setMovieList(response.data)
    }))
  },[])

  const submitReview=()=>{
    Axios.post('http://localhost:3001/api/insert',{
      movie_name:movie_name,
      movie_review:movie_review
    })
      setMovieList([
        ...movie_list,
        {movie_name:movie_name,movie_review:movie_review}
      ])
    }
  
    const deleteReview=(id)=>{
      Axios.delete(`http://localhost:3001/api/delete/${id}`)
      
    }

    const updateReview=(id)=>{
      Axios.put(`http://localhost:3001/api/update/${id}`,{
        new_movie_review:new_movie_review
      })

      setNewMovieReview("")
      
    }
    

  const TableRows=movie_list.map((val)=>{
    return(   
        <TableRow 
        {...val}
        clickedDelete={()=>{
          deleteReview(val.id)
        }}

        clickedUpdate={(event)=>{
            setNewMovieReview(event.target.value)
        }}

        clickedSubmit={()=>{
          updateReview(val.id)
        }}
        />  
    )
  })


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
      
      <div className='table'>
      <div className='tablerow'>
            <p className='tabledata'>Movie</p>
            <p className='tabledata'>Review</p>
            <button >DELETE</button>
            <input type="text" ></input>
            <button >UPDATE</button>
        </div>
        {TableRows}
      </div>
    </div>
  );
}

export default App;
