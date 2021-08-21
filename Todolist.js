import React from 'react';
import './index.css';



const Todolist = (props) =>{
    
    return(
        <>
            <div className='listbxicon d-flex mt-3'>
                <i className='bx bxs-trash mt-2' onClick={() =>{
                    props.ondelete(props.id)
                }}></i>
                <li className='lists'>{props.text}</li>
            </div>
        </>
    )
}

export default Todolist;