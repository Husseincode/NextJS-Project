'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

let form_style = {
    width: '400px',
    // height: '250px',
    background: 'transparent',
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '10px',
    padding: '15px'
}

const handleSearch = (e: any) => {
    e.preventDefault();
}

const Search = () => {
  return (
    <form onSubmit={handleSearch} style={form_style} className='form-control shadow-lg text-white'>
        <h4>Get a ride</h4>
        <input placeholder='Pickup Location' style={{backgroundColor: 'azure'}} className='form-control' type='text'/>
        <input placeholder='Dropoff Location' style={{backgroundColor: 'azure'}} className='form-control' type='text'/>
        <button onClick={handleSearch} className='btn btn-primary text-center'>Search</button>
    </form>
  )
}
export default Search;