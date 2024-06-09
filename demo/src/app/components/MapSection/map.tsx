/* eslint-disable @next/next/no-sync-scripts */
import Head from 'next/head';
import React from 'react';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import './map-section.css'


const Map: NextPage = () => {
  return (
    <div className='shadow-sm mapContainer' style={{ height: '670px'}}>
      <p>Map Section</p>
      {/* Map section */}
    </div>
  )
}

export default Map;