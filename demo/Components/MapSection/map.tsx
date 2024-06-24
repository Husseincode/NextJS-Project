/* eslint-disable @next/next/no-sync-scripts */
import './map-section.css';
import React, { useContext, useEffect, useState } from 'react'
import { GoogleMap, MarkerF, OverlayView, DirectionsRenderer } from '@react-google-maps/api';
import { SourceContext } from '../../context/SourceContext';
import { DestinationContext } from '../../context/DestinationContext';

const containerStyle = {
  height: '700px'
};

const Map = () => {
  const [error, setError] = useState<string | null>(null);
  const [ center, setCenter ] = useState<any | number>({
    lat: -3.745,
    lng: -38.523
  });

  const [map, setMap] = React.useState(null);
  const [directionRoutesPoints, setDirectionRoutesPoints ] = useState<any>([]);
  const {source, setSource} = useContext<any>(SourceContext);
  const {destination, setDestination} = useContext<any>(DestinationContext);

  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map: any) {
    setMap(null)
  }, []);

  useEffect(()=>{
    if(source?.length !== Array() && map){
      setCenter({
        lat: source.lat,
        lng: source.lng
      })
      console.warn(center)
    }
  },[source])

  useEffect(()=>{
    
    if(destination?.length !== Array() && map){
      setCenter({
        lat: destination.lat,
        lng: destination.lng
      })
    }
    if(source.length !== Array() && destination.length !== Array()){
      directionRoutes();
    }
  },[destination]);

  const directionRoutes = () => {
    const DirectionsService = new google.maps.DirectionsService();
    DirectionsService.route({
      origin: { lat: source.lat, lng: source.lng },
      destination: {lat: destination.lat, lng: destination.lng},
      travelMode: google.maps.TravelMode.DRIVING
    }, (result, status)=> {
      if(status === google.maps.DirectionsStatus.OK){
        setDirectionRoutesPoints(result)
      }
      else{
        console.error('Error finding routes!, check your internet connection')
      }
    })
  }

  return (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{mapId: 'e7eb2ff1f40a437a'}}
      >
       {source.length!=Array()? <MarkerF 
       position={{lat:source.lat, lng:source.lng}}>
        <OverlayView 
        position={{ lat: source.lat, lng: source.lng }} 
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div style={{minWidth: '80px'}} className='bg-white inline-block'>
            <p className='text-black fw-bold p-1'>{source.label}</p>
          </div>
        </OverlayView>
       </MarkerF>:null}

       {destination.length!=Array()? <MarkerF 
       position={{lat:destination.lat, lng:destination.lng}}>
        <OverlayView 
        position={{ lat: destination.lat, lng: destination.lng }} 
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
          <div style={{minWidth: '80px'}} className='bg-white inline-block'>
            <p className='text-black fw-bold p-1'>{destination.label}</p>
          </div>
        </OverlayView>
       </MarkerF>:null}
        <DirectionsRenderer
        directions={directionRoutesPoints}
        options={{
          polylineOptions:{
            strokeColor: 'black',
            strokeWeight: 10
          }

        }}
        />
      </GoogleMap>
  )
}

export default Map;