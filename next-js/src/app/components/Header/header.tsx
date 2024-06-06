'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { SignIn, UserButton } from "@clerk/nextjs"
import Link from 'next/link';
import './header.css'

const header_styling = {
    height: '70px',
    width: '100%',
    // border: '1px solid lightgrey',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '15px 20px'
}

export default function Header(){
    return (
        <header className='shadow-sm text-white' style={header_styling}>
            <h3>Kings Reward</h3>
            <div className='d-flex text-dark gap-3 p-2'>
                <Link className='lnk text-white' href={''}>Home</Link>
                <Link className='lnk text-white' href={''}>About </Link>
                <Link className='lnk text-white' href={''}>Ride </Link>
                <Link className='lnk text-white' href={''}>Dashboard </Link>
                <UserButton/>
            </div>
            <div style={{position: 'absolute', top: '80px', right: '0px'}}>
                <SignIn/>
            </div>
        </header>
    )
}