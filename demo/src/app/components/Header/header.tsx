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
        <header className='shadow-sm' style={header_styling}>
            <h3 className='mt-1'>Kings Rewards</h3>
            <div id='links' className='d-flex links text-dark gap-4 p-2'>
                <Link className='lnk' href={'/'}>Home <FontAwesomeIcon icon={faHome}/></Link>
                <Link className='lnk' href={''}>About <FontAwesomeIcon icon={faInfoCircle}/></Link>
                <Link className='lnk' href={'#Ride'}>Ride <FontAwesomeIcon icon={faTaxi}/></Link>
                {/* <Link className='lnk' href={''}>SignUp <FontAwesomeIcon icon={faDashboard}/></Link> */}
                <UserButton/>
            </div>
            <div style={{position: 'absolute', top: '80px', right: '10px', zIndex: '1'}}>
                <SignIn/>
            </div>
        </header>
    )
}