'use client'
import { useState } from "react";
import { DestinationContext } from "../../context/DestinationContext";
import { SourceContext } from "../../context/SourceContext";
import Header from "./components/Header/header";
import Hero from "./components/Hero/hero";
import Map from "./components/MapSection/map";
import Search from "./components/SearchSection/search";
import './pageStyle.css'
import { LoadScript } from "@react-google-maps/api";

export default function Homepage(){
    const [source, setSource] = useState<any>([]);
    const [destination, setDestination] = useState<any>([]);
    return <>
    <SourceContext.Provider value={{source, setSource}}>
    <DestinationContext.Provider value={{destination, setDestination}}>
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
    </DestinationContext.Provider>
    </SourceContext.Provider>
    </>
}