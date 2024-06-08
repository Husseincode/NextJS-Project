import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Map from "./components/MapSection/map";
import Search from "./components/SearchSection/search";
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