'use client'
import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Cars from '../recommended/recommend';
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
  const [distance, setDistance] = useState<number>(0);
  const [time, setTime] = useState<number>(0);

  const handleSearch = (e: any) => {
    e.preventDefault();
    const time = google.maps.DistanceMatrixService
    const dist = google.maps.geometry.spherical.computeDistanceBetween(
      {lat: source.lat, lng: source.lng},
      {lat: destination.lat, lng: destination.lng}
    );
    //convert into miles
    const miles = dist * 0.000621374
    setDistance(miles)
  }

  useEffect(()=>{
    console.log(source)
  },[source,destination])

  return (
    <>
    <form onSubmit={(e)=>{e.preventDefault()}} style={form_style} className='form-control shadow-sm'>
        <h4 className='text-white'>Get a ride</h4>
        <span>
          <Image style={{position: 'absolute', margin: '7px 0px 0px 5px'}} width={22} height={22} alt='location' src={'/location-sign.svg'}/>
          <AutoComplete type='source'/>
        </span>
        <span>
          <Image style={{position: 'absolute', margin: '7px 0px 0px 5px'}} width={22} height={22} alt='location' src={'/location-sign.svg'}/>
          <AutoComplete type='destination'/>
        </span>
        <button onClick={handleSearch} className='btn btn-primary text-center'>Search</button>
    </form>
    <Cars time={time} distance={distance}/>
    </>
  )
}
export default Search;