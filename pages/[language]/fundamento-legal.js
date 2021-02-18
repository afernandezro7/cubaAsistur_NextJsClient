import Container from '../../components/layouts/Container'
import Head from 'next/head'


export default function FundamentoLegal() {
    return (
        <Container>

            <Head>
                <title>Fundamento Legal</title>
            </Head>

            <main className="fundamentoLegal-page">
                <section className=" container fundamento--Items">
                    <div className="fundamento--header mb-3">
                        <h1 className="fundamento--Title text-primary">Fundamento Legal</h1>
                    </div>
                    <div className="fundamento--Item ">
                        <div className="fundamento--Hero">
                            <img src="/assets/images/gaceta.png" alt="Acuerdo 6774 del Comite Ejecutivo Consejo de Ministros sobre los seguros"/>
                        </div>
                    </div>
                    <div className="fundamento--Item row">
                        <div className="fundamento--columna col-md-6 col-sm-12 text-justify">
                            <h2 className="text-center">
                                <b>CONSEJO DE MINISTROS</b>
                            </h2>
                            <div className="row justify-content-center my-3">
                                <span className="separador d-block text-center"/>
                            </div>
                            <p className="ml-3">El Secretario del Consejo de Ministros</p>
                            <h3 className="text-center mb-3">CERTIFICA</h3>
                            <p>Que el Comité Ejecutivo del Consejo de Ministros, haciendo uso de las facultades que le otorga el
                                              Artículo 97 de la Constitución de la República adoptó, con fecha 16 de febrero de 2010, el siguiente
                            </p>
                            <h3 className="text-center mb-3">ACUERDO</h3>
                            <p>PRIMERO: Exigir de forma obligatoria a todos los via-jeros, extranjeros y cubanos residentes en el
                                              exterior, para el ingreso al país, que cuenten con una póliza de seguro de viaje, con cobertura de
                                              gastos médicos, expedida por enti-dades aseguradoras reconocidas en Cuba.</p>
                            <p>En los puntos de entrada al país se asegurará la venta de estas pólizas, por entidades aseguradoras
                                              cubanas.</p>
                            <p>SEGUNDO: Exigir a los extranjeros con residencia tem-poral en Cuba, que cuenten con una póliza de
                                              seguro médico durante su estancia en el país, expedida por una entidad aseguradora cubana o
                                              extranjera, siempre que sea reconoci-da en Cuba.</p>
                        </div>
                        <div className="fundamento--columna col-md-6 col-sm-12 text-justify">
                            <p>TERCERO: Excluir de la aplicación de la disposición anterior al personal diplomático y a los
                                              representantes de las organizaciones internacionales, acreditados en Cuba.</p>
                            <p>CUARTO: Encargar a la Ministra de Finanzas y Precios la aprobación de las formas de cobro de los
                                              servicios médi-cos y el valor de las pólizas de seguro a contratar con enti-dades aseguradoras
                                              cubanas, aplicables a viajeros, tanto extranjeros como cubanos residentes en el exterior y a
                                              ex-tranjeros residentes temporales.</p>
                            <p>QUINTO: Los ministros de Salud Pública y del Turis-mo, quedan facultados, en lo que a cada uno
                                              compete, para dictar las normas relativas al reordenamiento de la atención médica a viajeros, tanto
                                              extranjeros como cubanos residen-tes en el exterior y a extranjeros residentes temporales.</p>
                            <p>SEXTO: El presente Acuerdo comienza a regir a partir de 1ro. de mayo de 2010.</p>
                            <p>Y para remitir copia a los miembros del Comité Ejecuti-vo del Consejo de Ministros, y a cuantos otros
                                              sea pertinen-te, se expide la presente certificación en el Palacio de la Revolución, a los 16 días
                                              del mes de febrero de 2010.</p>
                            <h5 className="text-right">
                                <b>Amado Ricardo Guerra</b>
                            </h5>
                        </div>
                    </div>
                    <div>
                        <a className="text-right" download href="/assets/pdf/Acuerdo6774.pdf">Descargar en pdf
                            <i className="far fa-file-pdf"/></a>
                    </div>
                </section>
            </main>

            <style jsx> {`
                .fundamentoLegal-page h1, .fundamentoLegal-page h2, .fundamentoLegal-page h3, .fundamentoLegal-page h4, .fundamentoLegal-page p {
                  margin: 0;
                  padding: 0;
                }
                .fundamentoLegal-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }
                .fundamentoLegal-page h2 {
                  font-size: 20px;
                }
                .fundamentoLegal-page .container {
                  width: 1024px;
                  margin: auto;
                }
                .fundamentoLegal-page section.fundamento--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }
                .fundamentoLegal-page section.fundamento--Items h2 {
                  font-size: 22px;
                }
                .fundamentoLegal-page section.fundamento--Items h3 {
                  font-size: 20px;
                  font-weight: 400;
                }
                .fundamentoLegal-page section.fundamento--Items p {
                  font-size: 20px;
                  font-weight: 400;
                  margin-bottom: 15px;
                }
                .fundamentoLegal-page section.fundamento--Items a {
                  font-size: 20px;
                  color: #302d2d;
                }
                .fundamentoLegal-page section.fundamento--Items a i {
                  color: #074e7c;
                }
                .fundamentoLegal-page section.fundamento--Items a:hover {
                  font-size: 22px;
                  color: #074e7c;
                  transition: 0.3s ease-out;
                  -webkit-transition: 0.3s ease-out;
                  -moz-transition: 0.3s ease-out;
                  -ms-transition: 0.3s ease-out;
                  -o-transition: 0.3s ease-out;
                }
                .fundamentoLegal-page .fundamento--header {
                  width: 80%;
                }
                .fundamentoLegal-page .fundamento--header p {
                  text-align: left;
                }
                .fundamentoLegal-page .fundamento--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                }
                .fundamentoLegal-page .fundamento--Item {
                  margin-bottom: 20px;
                  font-family: serif;
                }
                .fundamentoLegal-page .separador {
                  border: 1px solid gray;
                  height: 2px;
                  width: 10%;
                }

                @media (max-width: 992px) {
                  .fundamentoLegal-page .container {
                    width: 90%;
                    margin: auto;
                  }
                  .fundamentoLegal-page section.fundamento--Items {
                    margin-top: 70px;
                  }
                }
                @media (max-width: 578px) {
                  .fundamentoLegal-page section.fundamento--Items {
                    margin-top: 90px;
                  }
                }
            `}</style>
        </Container>
    )
}

