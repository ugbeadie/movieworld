import React from 'react'

const Search = (props) => {
    return (
        <div className='search-box'>
            <input className='w-[180px] sm:w-[300px] p-[8px] cursor-pointer bg-[#555] rounded-tl-lg rounded-br-lg'
                // value={props.value}
                onChange={(e) => props.setValue(e.target.value)}
                placeholder='start typing to search' />
        </div>
    )
}

export default Search;