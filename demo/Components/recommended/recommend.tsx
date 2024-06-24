import Item from './Item';
import { data } from "./dummyData";

type Cars_Props = {
    distance: number,
    time: number
}

export default function Cars({ distance, time }: Cars_Props){
    return (
        <div id="Ride" className="mt-4">
            <h4 className="text-white">Recommended</h4>
            <section 
            style={{display:'grid', gap: '10px', overflowY: 'scroll', height: '400px'}}>
                {data.map(item => {
                    const { id, name, descriptio, price } = item;
                    return (
                        <Item key={id} 
                        name={name} 
                        distance={distance} 
                        time={time}
                        description={descriptio} 
                        price={price}/>
                    )
                })}
            </section>
        </div>
    )
};