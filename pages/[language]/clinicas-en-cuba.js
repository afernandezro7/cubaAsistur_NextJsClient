import Container from '../../components/layouts/Container'
import Head from 'next/head'
import { scrollToItem } from '../../helpers/scrollToItem'
import { useState } from 'react'

import { clinicasData } from '../../data/clinicas-data'



export default function AsisturInfo() {

    const [activeItem, setactiveItem] = useState(clinicasData[0])

    const handleSelectItem = (item) =>{
        setactiveItem(item)
        scrollToItem()        
    }

    return (
        <Container>

            <Head>
                <title>Clínicas en Cuba</title>
            </Head>

            <main className="clinicasInfo-page">
                <section className="container-fluid asisturContent">
                    <h1 className="asistur--title text-primary">Clínicas en Cuba</h1>
                    <div className="map--img">
                        <img src="/assets/images/mapa.jpg" alt="Foto de mapa de ubicaciones de CubaAsistur en Cuba"/>

                        {                            
                            clinicasData.map( points =>(
                                <img
                                    onClick={ ()=>handleSelectItem(points) } 
                                    key= { points.id }
                                    className="map--icon" 
                                    src="/assets/images/salud_icon.png" 
                                    alt={`Clínicas en ${points.nombre}`} 
                                    style={{ 
                                        width:'2.5%',
                                        position: 'absolute',
                                        cursor: 'pointer',
                                        bottom: points.cssPosition.bottom,
                                        right: points.cssPosition.right
                                    }}
                                />
                            ))
                        }

                    
                    </div>


                    <div className="container row mt-4 justify-content-md-between justify-content-sm-start">
				        <div className="map--ItemInfo col-12 col-md-6 d-flex flex-column align-items-start">
					        <img className="my-2" src="/assets/images/salud_icon.png" alt="logo CubaAsistur"/>

                            {/* <h2 className="asistur--Localidad text-primary font-weight-bold">{activeItem.localidad}</h2>

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
                            </p> */}
                        </div>
                        <div className="asitur--img col-sm-12 col-md-6">
					        <img src="/assets/images/buroAsistur.jpg" alt="Atención al cliente CubaAsistur en Cuba"/>
				        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .clinicasInfo-page h1, .clinicasInfo-page h2, .clinicasInfo-page h3, .clinicasInfo-page h4, .clinicasInfo-page p {
                  margin: 0;
                  padding: 0;
                }
                .clinicasInfo-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }
                .clinicasInfo-page h2 {
                  font-size: 20px;
                }
                .clinicasInfo-page h3 {
                  font-size: 20px;
                }
                .clinicasInfo-page .container {
                  width: 1024px;
                  margin: auto;
                }
                .clinicasInfo-page .container-fluid {
                  width: 100%;
                  margin: auto;
                  padding-left: 0;
                  padding-right: 0;
                }
                .clinicasInfo-page section.asisturContent {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }
                .clinicasInfo-page section.asisturContent h2 {
                  font-size: 24px;
                }
                .clinicasInfo-page section.asisturContent h3 {
                  font-size: 20px;
                }
                .clinicasInfo-page section.asisturContent p {
                  text-align: start;
                  font-weight: 400;
                  font-size: 16px;
                }
                .clinicasInfo-page .asisturContent img {
                  width: 100%;
                  height: auto;
                }
                .clinicasInfo-page .asistur--title {
                  border: none;
                  text-shadow: none;
                }
                .clinicasInfo-page .map--img {
                  position: relative;
                }
                .clinicasInfo-page .map--img img:nth-of-type(n+2) {
                  position: absolute;
                  cursor: pointer;
                }
                
                .clinicasInfo-page .modal-dialog {
                  max-width: 100%;
                  width: 100%;
                  margin: 1.75rem auto;
                }
                .clinicasInfo-page .map--ItemInfo img {
                  width: 25%;
                }
                .clinicasInfo-page #map {
                  height: 500px;
                  width: 100%;
                }

                @media (max-width: 992px) {
                  .clinicasInfo-page .container {
                    width: 90%;
                    margin: auto;
                  }
                  .clinicasInfo-page section.asisturContent {
                    margin-top: 70px;
                  }
                }
                @media (max-width: 578px) {
                  .clinicasInfo-page section.asisturContent {
                    margin-top: 90px;
                  }
                }
            `}</style>
        </Container>
    )
}

