import React from 'react'
import './style/pokemonCard.css'



const SearchInput = ({setPokeSearch, setOptionType}) => {


  const handleSubmit = e => {
    e.preventDefault()
    setPokeSearch(e.target.searchText.value.trim().toLowerCase())
    setOptionType('All')
    e.target.searchText.value = ""
  }

  
  
  return (
    <form className='card-search' onSubmit={handleSubmit}>
      <input className='input-search' id='searchText' type="text" placeholder="Busca Tu Pokemon!"/>
      <button className='Search'>Search</button>
    </form>
  )
}




export default SearchInput