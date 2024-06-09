import Header from "../src/app/components/Header/header"
import Hero from "../src/app/components/Hero/hero";
import Map from "../src/app/components/MapSection/map";
import Search from "../src/app/components/SearchSection/search";
import './pageStyle.css'

export default function Homepage(){
    return <>
    <Header/>
    <Hero/>
    <section className="main_section">
        <div className="search_section">
            <Search/>
        </div>
        <div className="map_section">
            <Map/>
        </div>
    </section>
    </>
}