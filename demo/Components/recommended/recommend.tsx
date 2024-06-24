import Item from './Item';
import { data } from "./dummyData";

let item_style = {
    cursor: 'pointer',
}

export default function Cars(){
    return (
        <div id="Ride" className="mt-4">
            <h4 className="text-white">Recommended</h4>
            <section style={{display:'grid', gap: '10px', overflowY: 'scroll', height: '400px'}}>
                {data.map(item => {
                    const { id, name, descriptio, price} = item;
                    return (
                        <Item key={id} name={name} description={descriptio} price={price}/>
                    )
                })}
            </section>
        </div>
    )
}