'use client'
import { useState } from "react";
import { DestinationContext } from "../../context/DestinationContext";
import { SourceContext } from "../../context/SourceContext";
import Header from "../../Components/Header/header";
import Hero from "../../Components/Hero/hero";
import Map from "../../Components/MapSection/map";
import Search from "../../Components/SearchSection/search";
import './pageStyle.css'
import { LoadScript } from "@react-google-maps/api";
import { Footer } from "../../Components/footer/footer";

export default function Homepage(){
    const [source, setSource] = useState<any>([]);
    const [destination, setDestination] = useState<any>([]);
    return <>
    <SourceContext.Provider value={{source, setSource}}>
    <DestinationContext.Provider value={{destination, setDestination}}>
        <LoadScript libraries={['places']} googleMapsApiKey={'AIzaSyBpv5y0SbiP8_8_yFLqbFygeotsg-kmfbI'}>
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
            <Footer/>
        </LoadScript>
    </DestinationContext.Provider>
    </SourceContext.Provider>
    </>
}