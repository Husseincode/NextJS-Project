import Image from 'next/image'
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import './item.css'

type ItemProps = {
    name: string,
    description: string,
    price: number,
}

function Item({name, description, price}: ItemProps) {
  return (
    <section className='section'>
      <Image src={'/car-white.svg'} alt='car logo' width={100} height={100}/>
      <div style={{display: 'flex', flexDirection:'column'}}>
        <h5>{name}</h5>
        <p>{description}</p>
      </div>
      <span><FontAwesomeIcon icon={faDollarSign}/>{price}</span>
    </section>
  )
}

export default Item;