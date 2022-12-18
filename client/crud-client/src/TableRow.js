import React from 'react'
import "./TableRow.css"

function TableRow(props){
    const movie_name=props.movie_name
    const movie_review=props.movie_review
    
    return(
        <div className='tablerow'>
            <p className='tabledata'>{movie_name}</p>
            <p className='tabledata'>{movie_review}</p>
            <button onClick={props.clickedDelete}>DELETE</button>
            <input type="text" onChange={props.clickedUpdate}></input>
            <button onClick={props.clickedSubmit}>UPDATE</button>
        </div>
            
    )

}





export default TableRow