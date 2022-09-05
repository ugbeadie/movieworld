import React, {useEffect}from 'react'
import './Modal.css'
import { AiOutlineClose } from 'react-icons/ai';
//TODO TRY OUT MODAL IN APP.JS; PREVENT SCROLLING
const Modal = ({show,onClose, movie}) => {
//     useEffect(() => {
//     if (show) document.body.style.overflow = 'hidden';
//     else document.body.style.overflow = 'visible';
//   }, [show]);
    if (show) {document.body.style.overflowX = 'hidden'}
    else return null;
    // if (!show) return null

  return (
    <div onClick={onClose} className='modal'>
        <div onClick={(e) => {e.stopPropagation()}} 
        className='modal-container'>
        <div>
          <div onClick={onClose}><AiOutlineClose size={20}/></div>
            <img className=''
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
        </div>
            <h3>{movie.title}</h3>
            <h4>IMDb: {movie.vote_average}</h4>
            <h5>Release Date: {movie.release_date}</h5>
            <br></br>
            <h6>Overview</h6>
            <p>{movie.overview}</p>
        </div>
    </div>
  )
}

export default Modal