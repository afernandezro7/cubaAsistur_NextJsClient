import Container from '../../components/layouts/Container'
import Head from 'next/head'
import { useState } from 'react'
import { CustomModal } from '../../components/ui/googleMap/Modal'


import { asisturItems } from '../../data/asistur-data'
import GoogleMapsContainer from '../../components/ui/googleMap/GoogleMapsContainer'
import { scrollToItem } from '../../helpers/scrollToItem'

export default function AsisturInfo() {

    const [activeItem, setactiveItem] = useState(asisturItems[0])
    const [openModal, setOpenModal] = useState(false)

    const handleSelectItem = (item) =>{
        setactiveItem(item)

        scrollToItem()
    }

    return (
        <Container>

            <Head>
                <title>Asistur en Cuba</title>
            </Head>

            <main className="asisturInfo-page">
                <section className=" container-fluid asisturContent">
                    <h1 className="asistur--title text-primary">Oficinas de Asistur en Cuba</h1>
                    <div className="map--img">
                        <img src="/assets/images/mapa.jpg" alt="Foto de mapa de ubicaciones de CubaAsistur en Cuba"/>

                        {                            
                            asisturItems.map( asisturPoint =>(
                                <img
                                    onClick={ ()=>handleSelectItem(asisturPoint) } 
                                    key= { asisturPoint.id }
                                    className="map--icon" 
                                    src="/assets/images/asistur.gif" 
                                    alt={`Asistur en ${asisturPoint.localidad}`} 
                                    style={{ 
                                        width:'2.5%',
                                        position: 'absolute',
                                        cursor: 'pointer',
                                        bottom: asisturPoint.cssPosition.bottom,
                                        right: asisturPoint.cssPosition.right
                                    }}
                                />
                            ))
                        }

                        <img 
                            className="googlemap--icon"
                            src="/assets/images/google_map.png" 
                            alt="Foto de mapa de ubicaciones de CubaAsistur en Cuba"
					        style={{width:'13%'}}
                            
                        />
				        <div className="velo--gris" onClick={ ()=> setOpenModal(true) }></div>
                        <CustomModal
                            visible ={ openModal }
                            setVisible ={ setOpenModal }
                        >
                            <div>
                                <GoogleMapsContainer/>
                            </div>
                        </CustomModal>
                    
                    </div>


                    <div className="container row mt-4 justify-content-md-between justify-content-sm-start">
				        <div className="map--ItemInfo col-12 col-md-6 d-flex flex-column align-items-start">
					        <img className="my-2" src="/assets/images/asistur.gif" alt="logo CubaAsistur"/>

                            <h2 className="asistur--Localidad text-primary font-weight-bold">{activeItem.localidad}</h2>

					        <p className="d-block d-flex">
                                <span className=" pr-2"><b>Dirección: </b></span>
                                <span className="asistur-direccion"> {activeItem.direccion}</span>
                            </p>
					        <p className="d-block d-flex">
                                <span className=" pr-2"><b>Horario:</b> </span>
                                <span className="asistur-horario"> {activeItem.horario}</span>
                            </p>
					        <p className="d-block d-flex">                               
                                <span><b>E-mail:</b>&nbsp;</span>
                                <a className="text-primary asistur-mail"> {activeItem.mail1}</a>
                            </p>
					        <p className="d-block d-flex">                               
                                <span><b>E-mail:</b>&nbsp; </span>
                                <a className="text-primary asistur-mail"> {activeItem.mail2}</a>
                            </p>
					        <p className="d-block d-flex">
                                <span className=" pr-2"><b>Teléfono:</b> </span>
                                <span className="asistur-telefono"> {activeItem.telefono}</span>
                            </p>
                        </div>
                        <div className="asitur--img col-sm-12 col-md-6">
					        <img src="/assets/images/buroAsistur.jpg" alt="Atención al cliente CubaAsistur en Cuba"/>
				        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .asisturInfo-page {
                    font-family: "Montserrat", "Helvetica Neue", Arial, sans-serif;
                }
                .asisturInfo-page h1, .asisturInfo-page h2, .asisturInfo-page h3, .asisturInfo-page h4, .asisturInfo-page p {
                  margin: 0;
                  padding: 0;
                }
                .asisturInfo-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }
                .asisturInfo-page h2 {
                  font-size: 20px;
                }
                .asisturInfo-page .container {
                  width: 1024px;
                  margin: auto;
                }
                .asisturInfo-page .container-fluid {
                  width: 100%;
                  margin: auto;
                  padding-left: 0;
                  padding-right: 0;
                }
                .asisturInfo-page section.asisturContent {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }
                .asisturInfo-page section.asisturContent p {
                  text-align: start;
                  font-weight: 400;
                  font-size: 16px;
                }
                .asisturInfo-page .asisturContent img {
                  width: 100%;
                  height: auto;
                }
                .asisturInfo-page .asistur--title {
                  border: none;
                  text-shadow: none;
                }
                .asisturInfo-page .map--img {
                  position: relative;
                }               
                
                .asisturInfo-page .map--img .googlemap--icon {
                  position: absolute;   
                  bottom: 70%;
                  right: 3.8%;
                  border: none;
                  display: block;
                  border-style: none;
                  cursor: default;
                }
                .asisturInfo-page .map--img .velo--gris {
                  position: absolute;
                  cursor: pointer;
                  width: 13.7%;
                  height: 11%;
                  bottom: 80.5%;
                  right: 3.5%;
                }
                .asisturInfo-page .map--img .velo--gris {
                  border-radius: 5px;
                  -webkit-border-radius: 5px;
                  -moz-border-radius: 5px;
                  -ms-border-radius: 5px;
                  -o-border-radius: 5px;
                }
                .asisturInfo-page .map--img .velo--gris:hover {
                  box-shadow: 10px 6px 97px 2px rgba(7, 78, 124, 0.82);
                  background-color: rgba(7, 78, 124, 0.3);
                }
                .asisturInfo-page .modal-dialog {
                  max-width: 100%;
                  width: 100%;
                  margin: 1.75rem auto;
                }
                .asisturInfo-page .map--ItemInfo img {
                  width: 25%;
                }
                .asisturInfo-page #map {
                  height: 500px;
                  width: 100%;
                }

                @media (max-width: 992px) {
                  .asisturInfo-page .container {
                    width: 90%;
                    margin: auto;
                  }
                  .asisturInfo-page section.asisturContent {
                    margin-top: 70px;
                  }
                }
                @media (max-width: 578px) {
                  .asisturInfo-page section.asisturContent {
                    margin-top: 90px;
                  }
                }
            `}</style>
        </Container>
    )
}

