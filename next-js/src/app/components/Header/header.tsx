'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SignIn, UserButton } from "@clerk/nextjs"
import Link from 'next/link';
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi } from '@fortawesome/free-solid-svg-icons/faTaxi';
import { faDashboard, faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const header_styling = {
    height: '70px',
    width: '100%',
    // border: '1px solid lightgrey',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '10px 20px'
}

export default function Header(){
    return (
        <header className='shadow-sm text-white' style={header_styling}>
            <h3 className='mt-1'>Kings Rewards</h3>
            <div className='d-flex links text-dark gap-4 p-2'>
                <Link className='lnk text-white' href={''}>Home <FontAwesomeIcon icon={faHome}/></Link>
                <Link className='lnk text-white' href={''}>About <FontAwesomeIcon icon={faInfoCircle}/></Link>
                <Link className='lnk text-white' href={''}>Ride <FontAwesomeIcon icon={faTaxi}/></Link>
                <Link className='lnk text-white' href={''}>Dashboard <FontAwesomeIcon icon={faDashboard}/></Link>
                <UserButton/>
            </div>
            <div style={{position: 'absolute', top: '70px', right: '0px'}}>
                <SignIn/>
            </div>
        </header>
    )
}