import { useEffect } from 'react'
import { useMapbox } from '../../../hooks/useMapbox'

import { asisturItems } from '../../../data/asistur-data'


const puntoInicial = {
    lng: -79.4439,
    lat: 21.3427,
    zoom: 6
}


export const MapContainer = () => {

    const { coords, setRef, agregarMarcador } = useMapbox(puntoInicial) 

    useEffect(() => {      
        const items = asisturItems.map( item => { 
            agregarMarcador( item.position,item.id);
            return item
        })       
    }, [ asisturItems, agregarMarcador ])

    return (
        <>
            <div className="info-coords">
                Lng: { coords.lng } | Lat: { coords.lat } | zoom: { coords.zoom }
            </div>
            <div
                className="mapContainer"
                ref={ setRef }
            />

            <style jsx>{`
 
                {/* .mapContainer{
                    position: absolute;
                    top: 0;
                    right: 0;
                    left: 0;
                    bottom: 0;
                } */}

                .info-coords{
                    position: fixed;
                    top: 10px;
                    left: 20;
                    z-index: 99;
                    background-color: rgba(0, 0, 0, 0.3);
                    color: white;
                    padding: 5px;
                    border-radius: 5px;
                    -webkit-border-radius: 5px;
                    -moz-border-radius: 5px;
                    -ms-border-radius: 5px;
                    -o-border-radius: 5px;
                }

            `}</style>
        </>
    )
    
    
}










