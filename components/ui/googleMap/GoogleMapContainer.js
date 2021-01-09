import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';


import { asisturItems } from '../../../data/asistur-data'


const puntoInicial = {
    lng: -79.4439,
    lat: 21.3427,
    zoom: 6
}


 
export const MapContainer = ({google})=> {

    const onMarkerClick=()=>{

    }

    const onInfoWindowClose = ()=>{

    }
 
    return (
        <Map 
            google={google} 
            zoom={puntoInicial.zoom}
            initialCenter={{
                lat: puntoInicial.lat,
                lng: puntoInicial.lng
            }}
            style={{width: '95%', height: '78%'}}
        >
 
            <Marker 
                onClick={ onMarkerClick }
                name={'Current location'} />
    
            <InfoWindow 
                onClose={onInfoWindowClose}>
                <div>
                  <h1>Info</h1>
                </div>
            </InfoWindow>
      </Map>
    );
  
}
 
export default GoogleApiWrapper({
  apiKey: process.env.google_api_key
})(MapContainer)

