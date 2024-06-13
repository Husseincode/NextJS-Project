/* eslint-disable @next/next/no-sync-scripts */
import './map-section.css';
import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { SourceContext } from '../../../../context/SourceContext';
import { DestinationContext } from '../../../../context/DestinationContext';
import { Marker } from 'react-leaflet';

const containerStyle = {
  // width: '400px',
  height: '700px'
};

const Map = () => {
  const [error, setError] = useState<string | null>(null);
  const [ center, setCenter ] = useState<any | number>({
    lat: -3.745,
    lng: -38.523
  });

  const [map, setMap] = React.useState(null);
  const {source, setSource} = useContext<any>(SourceContext);
  const {destination, setDestination} = useContext<any>(DestinationContext);

  const onLoad = React.useCallback(function callback(map: any) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, []);

  useEffect(()=>{
    console.log(map);
    if(!navigator.geolocation){
      setError('Your browser does not support Geolocation');
    }

    const success = (position: GeolocationPosition) => {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      setCenter({ lat: latitude, lng: longitude});
      console.log(latitude, longitude)
    }

    const error = () => {
      setError('Unable to retrieve your location');
    };
    navigator.geolocation.getCurrentPosition(success, error);
    
    if(source?.length !== [] && map){
      setCenter({
        lat: source.lat,
        lng: source.lng
      })
      console.warn(center)
    }
  },[source, destination, center])

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{mapId: 'e7eb2ff1f40a437a'}}
      >
       {source.length!=[]? <Marker position={{lat:source.lat, lng:source.lng}}/>:null}
        <></>
      </GoogleMap>
  )
}

export default Map;