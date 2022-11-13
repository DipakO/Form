import React from 'react'
import {MdDeleteForever} from "react-icons/md"
const Table = ({fname , lname , cont , date , state , handleClick, index}) => {
  
 
  return (
            <tbody>
                <tr>
                   <td>{fname}</td> 
                   <td>{lname}</td> 
                   <td>{cont}</td> 
                   <td>{date}</td> 
                   <td>{state}</td> 
                   <td ><MdDeleteForever onClick={()=>handleClick(index)} size="1.3rem" ></MdDeleteForever> 
                   <button onClick={()=>handleClick(index)} className='button'>delete</button></td> 
                </tr>
            </tbody>
  )
}
export default Table