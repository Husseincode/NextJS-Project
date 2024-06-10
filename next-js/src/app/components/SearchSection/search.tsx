'use client'
import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import Cars from '../recommended/recommend';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from '../../../../context/SourceContext';
import { DestinationContext } from '../../../../context/DestinationContext';

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


// type Props = {
//   DropdownIndicator: boolean
// }

const Search = () => {
  const [value, setValue] = useState<any>(null);
  const [secondvalue, setSecondValue] = useState<any>(null);
 
  const {source, setSource} = useContext<any>(SourceContext);
  const {destination, setDestination} = useContext<any>(DestinationContext);

  const handleSearch = (e: any) => {
    e.preventDefault();
    if(source){
      console.log(source)
    }
  }

  const getLatandLng = (place:any, type:any) => {
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({placeId}, (place, status) => {
      if (status === 'OK' && place?.geometry && place.geometry.location){
        console.log(place.geometry.location.lat());
        if (type === "source"){
          setSource({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          })
        }
        else{
          setDestination({
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
            name: place.formatted_address,
            label: place.name,
          })
        }
      }
    })
  };

  useEffect(()=>{
    if(source){
      console.log(source)
    }
  }, [source, destination])
  return (
    <>
    <form onSubmit={handleSearch} style={form_style} className='form-control shadow-sm'>
        <h4 className='text-white'>Get a ride</h4>
        <span>
          <Image style={{position: 'absolute', zIndex: '1', margin: '7px 0px 0px 5px'}} width={22} height={22} alt='location' src={'/location-sign.svg'}/>
          {/* <input placeholder='Pickup Location' style={{backgroundColor: 'azure', paddingLeft: '30px'}} className='form-control' type='text'/> */}
          <GooglePlacesAutocomplete
          selectProps={{
            value,
            onChange: (place:any, type:any)=>{
              // getLatandLng(place, type);
              setValue(place)
            },
            placeholder: 'Pickup Location',
            isClearable: true,
            components: {
              DropdownIndicator: () => false
            },
            styles: {
              control: (provided) => ({
                ...provided,
                color: 'transparent',
                paddingLeft: '20px',
              }),
            }
          }}
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          />
        </span>
        <span>
          <Image style={{position: 'absolute', zIndex: '1', margin: '7px 0px 0px 5px'}} width={22} height={22} alt='location' src={'/location-sign.svg'}/>
          {/* <input placeholder='Dropoff Location' style={{backgroundColor: 'azure', paddingLeft: '30px'}} className='form-control' type='text'/> */}
          <GooglePlacesAutocomplete
          selectProps={{
            secondvalue,
            onChange: (place:any, type:any)=>{
              // getLatandLng(place, type);
              setSecondValue(place)
            },
            placeholder: 'Dropoff Location',
            isClearable: true,
            components: {
              DropdownIndicator: () => {return true}
            },
            styles: {
              control: (provided) => ({
                ...provided,
                color: 'transparent',
                paddingLeft: '20px'
              }),
            }
          }}
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY}
          />
        </span>
        <button onClick={handleSearch} className='btn btn-primary text-center'>Search</button>
    </form>
    <Cars/>
    </>
  )
}
export default Search;