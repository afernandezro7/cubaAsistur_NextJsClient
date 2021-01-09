import { useCallback, useEffect, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'


mapboxgl.accessToken = 'pk.eyJ1IjoiYWxiZXJ0bzkwMDEiLCJhIjoiY2tqMGllOGVzMDgzdzJyb2R2MG9jN3UwaSJ9.7O2rW0SBVXLghTNjXCKn0A';

export const useMapbox = (puntoInicial) => {

    // Referencia al mapa y coords
    const mapa = useRef()
    const [coords, setCoords] = useState(puntoInicial)
    const mapaDiv = useRef()
    const setRef = useCallback( (node) => { 
        mapaDiv.current = node
    },[])   
    
    // inicializar mapa
    useEffect(() => {

        mapa.current = new mapboxgl.Map({
            container: mapaDiv.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [ puntoInicial.lng, puntoInicial.lat ],
            zoom: puntoInicial.zoom
        });        

    }, [puntoInicial])


    // Cuando se mueve el mapa mandar coords del centro
    useEffect(() => {

        mapa.current?.on('move', ()=>{
            const { lng, lat }= mapa.current.getCenter()
            setCoords({
                lng: lng.toFixed(4),
                lat: lat.toFixed(4),
                zoom: mapa.current.getZoom().toFixed(4)
            });
        })

        return mapa.current?.off('move')

    }, [])


    // Referencia a los marcadores
    const marcadores = useRef({}) 

    // funcion para agregar marcadores
    const agregarMarcador = useCallback((coords, id)=>{

        const { lat, lng } = coords

        const marker = new mapboxgl.Marker();  
        marker.id = id 
       
        marker
            .setLngLat([lng, lat])
            .addTo(mapa.current)
            .setDraggable(false)
        
        marcadores.current[marker.id]= marker

    },[])
    
    return {     
        coords,
        setRef,
        agregarMarcador        
    }
}
