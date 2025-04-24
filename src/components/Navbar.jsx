import React from 'react'
import SearchBar from './SearchBar'

const Navbar = ({onSearch}) => {
  return (
    <nav className="top-0 z-10 w-full items-center relative bg-blue-500 px-16 py-4 text-black backdrop-blur-md flex md:justify-evenly">
        <section className="w-full flex justify-between items-center mx-auto max-w-7xl">
            <a
            to="/"
            className="text-black text-xl font-bold hover:text-gray-300"
            >
                <div  >
                    <h1>POKEDEX</h1>
                </div>
            </a>
        </section>
        <section>
            <SearchBar  onSearch={onSearch}/>
        </section>
    </nav>
  )
}

export default Navbar