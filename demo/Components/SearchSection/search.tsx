'use client'
import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Cars from '../recommended/recommend';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';
import AutoComplete from './GoogleAutoComplete';

let form_style = {
    width: '100%',
    // height: '250px',
    background: 'transparent',
    display: 'grid',
    // gridTemplateRows: 'repeat(4, 1fr)',
    gap: '10px',
    padding: '15px',
    // border: '1px solid lightgrey'
}


// type Props = {
//   DropdownIndicator: boolean
// }

const Search = () => {
  const {source, setSource} = useContext<any>(SourceContext);
  const {destination, setDestination} = useContext<any>(DestinationContext);

  const handleSearch = (e: any) => {
    e.preventDefault();
    // console.warn(`value ${value}\nsecond value: ${secondvalue}`)
    if(source){
      console.log(source)
    }
  }


  useEffect(()=>{
    if(source){
      console.log(source)
    }
  }, [source, destination])
  return (
    <>
    <form onSubmit={(e)=>{e.preventDefault()}} style={form_style} className='form-control shadow-sm'>
        <h4 className='text-white'>Get a ride</h4>
        <span>
          <Image style={{position: 'absolute', zIndex: '1', margin: '7px 0px 0px 5px'}} width={22} height={22} alt='location' src={'/location-sign.svg'}/>
          <AutoComplete placeholder='Pickoff Location'/>
        </span>
        <span>
          <Image style={{position: 'absolute', zIndex: '1', margin: '7px 0px 0px 5px'}} width={22} height={22} alt='location' src={'/location-sign.svg'}/>
          <AutoComplete placeholder='DropOff Location'/>
        </span>
        <button onClick={handleSearch} className='btn btn-primary text-center'>Search</button>
    </form>
    <Cars/>
    </>
  )
}
export default Search;