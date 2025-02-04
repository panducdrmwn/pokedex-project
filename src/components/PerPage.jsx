import React from 'react'

const PerPage = ({limit, setLimit}) => {
  return (
    <div className='w-full flex items-center justify-center pt-4  '>
        <label htmlFor="pokemon" className='bg-yellow-200 p-2 rounded-3xl '>Items Per-Page</label>

        <select className='bg-rose-200 rounded-3xl p-2' value={limit} onChange={e => setLimit(e.target.value)}>
            <option value="20">20</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
        </select>
    </div>
  )
}

export default PerPage