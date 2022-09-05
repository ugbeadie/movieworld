import React, {useState,useEffect} from 'react'
import { AiFillStar } from 'react-icons/ai';
import Modal from './Modal'

const MovieCard = (props) => {
	const FavComponent = props.alterfav
    const [show, setShow] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])
    const openModal = (index) => {
        handleChanges(index);
    }

    const handleChanges = (index) => {
        // 1. Make a shallow copy of the items
        let items = [show];
        // 2. Make a shallow copy of the item you want to mutate
        let item = items[index];
        // 3. Replace the property you're intested in
        item = true;
        // 4. Put it back into our array. N.B. we *are* mutating the array here, but that's why we made a copy first
        items[index] = item;
        // 5. Set the state to our new copy
        setShow(items);
    }
    
  return (
    <>
        {props.movies.map((movie, index) => (
            <div key={movie.id}>
                        <Modal show={show[index]} 
                        movie={movie}
                        onClose={()=> {setShow(false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false)}}/>
                <div className='m-[10px] w-[160px] h-[250px] md:w-[200px] md:h-[280px] relative durration-250'>
                    <img className='w-[160px] md:w-full h-full border-4 border-solid border-white duration-200'
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}/>
                    <div className='overlay'>
                        <div className='fav-icon'
                        onClick={() => {props.handleClick(movie)}}>
                            <FavComponent/>
                        </div>
                        <div className='flex justify-center items-center flex-col'>
                            <span className='text-[#6ac045]'><AiFillStar size={30}/></span>
                            <p className='text-2xl font-bold'>{movie.vote_average} / 10</p>
                        </div>
                        <div className='view-detail'
                        onClick={() => {openModal(index)}}>
                            <p>view detail</p>
                        </div>
                    </div>
                </div>
                <div className='w-[160px] md:w-[200px] font-roboto mt-[-5px] mr-0 mb-[5px] ml-[10px] text-sm'>
                    <p>{movie.title}</p>
                    <p className='font-light text-[#999]'>{movie.release_date}</p>
                </div>
            </div>
        ))}
    </>
  )
}

export default MovieCard;