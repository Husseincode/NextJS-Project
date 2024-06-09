'use client'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Cars from '../recommended/recommend';

let form_style = {
    width: '100%',
    // height: '250px',
    background: 'transparent',
    display: 'grid',
    gridTemplateRows: 'repeat(4, 1fr)',
    gap: '10px',
    padding: '15px',
    // border: '1px solid lightgrey'
}

const handleSearch = (e: any) => {
    e.preventDefault();
}

const Search = () => {
  return (
    <>
    <form onSubmit={handleSearch} style={form_style} className='form-control shadow-sm'>
        <h4 className='text-white'>Get a ride</h4>
        <span>
          <Image style={{position: 'absolute', zIndex: '1', margin: '7px 0px 0px 5px'}} width={22} height={22} alt='location' src={'/location-sign.svg'}/>
          <input placeholder='Pickup Location' style={{backgroundColor: 'azure', paddingLeft: '30px'}} className='form-control' type='text'/>
        </span>
        <span>
          <Image style={{position: 'absolute', zIndex: '1', margin: '7px 0px 0px 5px'}} width={22} height={22} alt='location' src={'/location-sign.svg'}/>
          <input placeholder='Dropoff Location' style={{backgroundColor: 'azure', paddingLeft: '30px'}} className='form-control' type='text'/>
        </span>
        <button onClick={handleSearch} className='btn btn-primary text-center'>Search</button>
    </form>
    <Cars/>
    </>
  )
}
export default Search;