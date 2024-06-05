'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import './sample.scss'
import Link from 'next/link';

const Try = () => {
  const [value, setValue] = useState<number>(0);

  const increaseValue = () => {
    setValue(prev => prev + 1);
  };

  // useEffect(()=>{
  //   const timerID = setTimeout(() => {
  //     increaseValue()
  //   }, 1000);

  //   return () => { clearTimeout(timerID) }
  // })


  return (
    <div className='d-grid justify-content-center mt-4'>
      <h1 className=''>NextJS {value}</h1>
      <button title='Increase' type='button' onClick={increaseValue} className='btn btn-dark'>Increase</button>
      <Link type='button' className='btn btn-secondary' href={'/Blog'}>Go to Blog</Link>
    </div>
  )
}

export default Try;