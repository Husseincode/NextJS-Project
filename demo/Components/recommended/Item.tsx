import Image from 'next/image'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './item.css';
import { prices } from '../Pricing/prices';

type ItemProps = {
    name: string,
    description: string,
    price: number,
    distance: number,
    time: number
}

function Item({name, description, price, distance, time }: ItemProps) {
  const {
    baseFare, 
    costPerMile, 
    costPerMinute, 
    bookingFee, 
    surgePricing, 
    tolls, 
    miscellaneous } = prices;

  const RideTotalFare = baseFare + 
  (costPerMile * distance) + 
  (costPerMinute * time) + 
  bookingFee + 
  surgePricing + 
  tolls +
   miscellaneous

  return (
    <section className='section'>
      <Image src={'/car-white.svg'} alt='car logo' width={100} height={100}/>
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
      <span><FontAwesomeIcon icon={faDollarSign}/>{RideTotalFare}</span>
    </section>
  )
}

export default Item;