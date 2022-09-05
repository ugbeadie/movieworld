import React from 'react'

const MovieHead = (props) => {
    return (
        <div>
            <h1 className='font-montserrat uppercase text-xl md:text-3xl font-medium text-[#6ac045]'>{props.heading}</h1>
        </div>
    )
}

export default MovieHead;