import './App.css';
import React from 'react'

function App() {

 

  return (
    <div className="App">

      <h1>CRUD APPLICATION</h1>

      <div className='MN'>
        <label className='MN-label'>Movie Name:</label>
        <input type="text" name="movie_name"className='MN-input'></input>
      </div>
      
      <div className='MR'>
        <label className='MR-label'>Movie Review:</label>
        <input type="text" name="movie_review" className='MR-input'></input>
      </div>

      <input type="submit" className='submit-btn'></input>
      
    </div>
  );
}

export default App;
