import './hero.css'
import Image from 'next/image'

export default function Hero(){
    return (
        <div className="img text-white">
            <h2>Every Journey is a Rewarding Adventure</h2>
            {/* <Image className='image' src={'/kingReward.png'} alt='logo' layout='fill'/> */}
        </div>
    )
}