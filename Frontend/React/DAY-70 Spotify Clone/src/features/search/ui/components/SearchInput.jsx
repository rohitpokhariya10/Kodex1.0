import React from 'react'
import { useSearch } from '../../hooks/useSearch'
import SearchContainer from './SongsContainer'

const SearchInput = ({...props}) => {
     let {handleSearch , searchValue , searchedSongs} = useSearch()
  return (
   
    <div>
        <input 
        className='outline-none' 
        onChange={handleSearch}
        {...props}
        />
        
        {/* agar user ne search baar me kuch type kra hai tab hi SearchContainer ayega UI m */}
        {
          searchValue ? <SearchContainer  searchSongs={searchedSongs}/> : null
        }
    </div>
  )
}

export default SearchInput