import React from 'react'
import "./TableRow.css"

function TableRow(props){
    const movie_name=props.movie_name
    const movie_review=props.movie_review
    return(
        <tr className='tablerow'>
            <td className='tabledata'>{movie_name}</td>
            <td className='tabledata'>{movie_review}</td>
        </tr>
            
    )

}





export default TableRow