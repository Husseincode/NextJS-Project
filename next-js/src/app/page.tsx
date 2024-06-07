import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Map from "./components/MapSection/map";
import Search from "./components/SearchSection/search";

export default function Homepage(){
    return <>
    <Header/>
    <Hero/>
    <section style={{display: 'flex', justifyContent: 'space-between', width: 'inherit', margin: '30px'}}>
        <Search/>
        <Map/>
    </section>
    </>
}