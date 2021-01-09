import {GoogleMap, LoadScript, Marker, InfoWindow} from '@react-google-maps/api'
import { Card } from 'antd';
import { memo, useState } from 'react';

const { Meta } = Card;
import { asisturItems } from '../../../data/asistur-data'


const mapStyles = {
    height: "75vh",
    width: "100%"
};



const defaultCenter = {
    lat: 21.3427,
    lng: -79.4439
}

const GoogleMapsContainer = memo (() => {
    
    const [ selected, setSelected ] = useState({});
  
    const onSelect = item => {
        setSelected(item);
    }

    return (
        <LoadScript 
            googleMapsApiKey={ process.env.REACT_GOOGLE_MAP_KEY }
        >
            <GoogleMap 
                mapContainerStyle={mapStyles}
                zoom={6}
                center={defaultCenter}
            >
                {
                    asisturItems.map( item =>(
                        <Marker 
                            key={item.id} 
                            position={item.position}
                            onClick={() => onSelect(item)}
                            onMouseOver={ () => onSelect(item) }
                        />
                    ))
                }
                {
                    selected.position 
                        && 
                        (
                            <InfoWindow
                                position={selected.position}
                                clickable={true}
                                onCloseClick={() => setSelected({})}
                            >
                                <Card 
                                    title={selected.localidad}
                                    style={{ maxWidth: "200px", height: "auto" }}
                                    bodyStyle={{height: "auto", overflow: "hidden" , fontSize:"14px"}}
                                    cover={
                                        <img
                                        alt="example"
                                        style={{height: "auto", width: "60px", margin: "auto", display: "block" }}
                                        src="/assets/images/asistur.gif"
                                        />
                                    }
                                >                               
                                    <Meta
                                        
                                        description={selected.horario}
                                    />
                                </Card>
                            </InfoWindow>
                        ) 
                }
            </GoogleMap>
        </LoadScript>
    )
})
export default GoogleMapsContainer;
