import React from 'react'

const ClearFavorite = (props) => {
    return (
        <>
            <button 
            className='font-montserrat cursor-pointer bg-[#555] text-white px-[20px] py-[8px] rounded-tl-lg rounded-br-lg duration-300'
            onClick={props.onclear}>clear favorite</button>
        </>
    )
}

export default ClearFavorite;