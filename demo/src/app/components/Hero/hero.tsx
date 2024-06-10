import './hero.css'
import Image from 'next/image'

let span_style = {
    color: 'rgb(33, 37, 41)',
    borderBottom: '3px solid black'
}

export default function Hero(){
    return (
        <div style={{padding: '0px 20px'}} className="img text-white">
            <h2>Every Journey is a Rewarding <span style={span_style} className='text-dark'>Adventure!</span></h2>
            {/* <Image className='image' src={'/kingReward.png'} alt='logo' layout='fill'/> */}
        </div>
    )
}