'use client'
import React, { useContext, useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';

type AutoCompleteProps = {
    type: string,
}

const AutoComplete = (props: AutoCompleteProps) => {
  const [value, setValue] = useState<any>('');
  const [placeholder, setPlaceholder] = useState<any>(null);
  const {source, setSource} = useContext<any>(SourceContext);
  const {destination, setDestination} = useContext<any>(DestinationContext);

  useEffect(()=>{
    props.type ==='source'
    ?setPlaceholder('Pickup Location')
    :setPlaceholder('Dropoff Location');
  },[props.type])

  const getLatandLng = (place:any, type:any) => {
    const placeId = place.value.place_id;
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    service.getDetails({placeId}, (place, status) => {
      if (status === 'OK' && place?.geometry && place.geometry.location){
        console.log(place.geometry.location.lat(), type, place);
        if (props.type === "source"){
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
        console.log(source, destination)
    }
  },[source, destination])
  return (
    <>
        <span>
          <GooglePlacesAutocomplete
          selectProps={{
            value,
            onChange: (place:any, type:any)=>{
              getLatandLng(place, type);
              setValue(place)
            },
            placeholder: placeholder,
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
          />
        </span>
    </>
  )
}
export default AutoComplete;