import Container from '../../components/layouts/Container'
import Head from 'next/head'


export default function QuienesSomos() {
    return (
        <Container >
            <Head>
                <title>Quienes Somos</title>
            </Head>

            <main className="quienesSomos-page">
                < section className = "container cober--Items" > 
                    <div className="cober--header mb-3">
                        <h1 className="cober--Title text-primary">CUBAASISTUR.COM</h1>
                    </div>
                    <div className="cober--Item ">
                        <div className="cober--ItemTitle text-primary d-flex justify-content-start ">
                            <h2 className="cober--Tema text-primary ">QUIENES SOMOS</h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>
                                <b>CubaAsistur.com</b>
                                es propiedad de Belraysa Tours &amp; Travel Group SA., Agencia de Viajes panameña
                                con oficinas en Ciudad Panamá, La Habana y Nicaragua. La Agencia es la propietaria de
                                <b>CubaAsistur.com</b>
                                y de otros sitios especializados en turismo convencional, de salud, de
                                congresos y eventos.
                                <b>Belraysa Tours &amp; Travel Group SA</b>
                                está radicada en Panamá con domicilio
                                en Calle Eric del Valle e/ Vía Argentina y Alberto Navarro, Edif. Rapiventa, Planta Baja, El
                                Cangrejo, Bella Vista Panamá.
                                <b>Belraysa Tours &amp; Travel Group SA</b>
                                a través de CubaAsistur opera
                                en exclusivo el canal de ventas online de pólizas de seguro de
                                <b>ASISTUR</b>, que es una sociedad
                                mercantil cubana del sector de los seguros y los servicios financieros, con oficina central en La
                                Habana, Prado No. 208 entre Trocadero y Colón, Habana Vieja, La Habana, teléfonos +53 7866 4499 /+53
                                7866 8087.
                            </p>
                        </div>
                    </div>
                    <div className="cober--Item ">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">CÓMO FUNCIONAN NUESTRAS PÓLIZAS</h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Las pólizas de CubaAsistur se activan realizando una llamada a la CENTRAL DE ALARMA a los teléfonos
                            (53 7) 866 8527, 8339 y 8920 y comunicando su emergencia y número de póliza. Si su emergencia es
                            médica puede acercarse directamente al centro de atención más cercano y mostrar la información
                            relacionada con su póliza para que la misma sea activada o sea remitido al centro de atención donde
                            le ofrecerán asistencia médica.</p>
                        </div>
                    </div>
                    <div className="cober--Item">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">VENTAJAS DE CUBAASISTUR</h2>
                        </div>
                        <div className="cober--ItemContent text-left">
                            <ul className="pl-0">
                                <li>ASISTUR es la Compañía líder de seguros en Cuba
                                    <ul>
                                        <li>Experiencia desde 1991 en la prestación de servicios especializados de asistencia a los
                                        viajeros.</li>
                                        <li>Personal calificado</li>
                                        <li>Una extensa red de proveedores</li>
                                        <li>Central de Alarma disponible las 24 horas del día durante todo el año.</li>
                                    </ul>
                                </li>
                                <li>Reserva online segura
                                    <ul>
                                        <li>Todos los datos que Usted proporcione en el proceso de reserva y pago con tarjeta de
                                        crédito están protegidos a través de certificados digitales de nuestra pasarela de pago
                                        Páguelo Fácil, que cuenta con poderosos procesos para la encriptación de información
                                        sensible, garantizando que no puedan ser utilizados por terceros.</li>
                                    </ul>
                                </li>
                                <li>Tecnología de avanzada.
                                    <ul>
                                        <li>Somos conscientes del valor del tiempo en la navegación por internet y en la toma de
                                        decisiones de los usuarios. Es por ello que diseñamos un sitio web intuitivo y rápido,
                                        que se adapta a cualquier dispositivo.</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            </main>

            <style jsx>{`
                .quienesSomos-page h1,
                .quienesSomos-page h2,
                .quienesSomos-page h3,
                .quienesSomos-page h4,
                .quienesSomos-page p {
                  margin: 0;
                  padding: 0;
                }

                .quienesSomos-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }

                .quienesSomos-page h2 {
                  font-size: 20px;
                }

                .quienesSomos-page .container {
                  width: 1024px;
                  margin: auto;
                }

                .quienesSomos-page section.cober--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }

                .quienesSomos-page section.cober--Items p {
                  font-size: 16px;
                  font-weight: 400;
                }

                .quienesSomos-page .cober--header {
                  width: 80%;
                }

                .quienesSomos-page .cober--header p {
                  text-align: left;
                }

                .quienesSomos-page .cober--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                }

                .quienesSomos-page .cober--Item {
                  margin-bottom: 20px;
                }

                .quienesSomos-page .cober--itemTitle {
                  overflow: hidden;
                }

                .quienesSomos-page .cober--itemTitle a {
                  font-size: 24px;
                }

                .quienesSomos-page .cober--ItemContent,
                .quienesSomos-page .cober--headerContent,
                .quienesSomos-page .subItem .cober--ItemTitle {
                  width: 90%;
                  margin: auto;
                  margin-top: 20px;
                }

                .quienesSomos-page .cober--ItemContent p,
                .quienesSomos-page .cober--headerContent p,
                .quienesSomos-page .subItem .cober--ItemTitle p {
                  text-align: left;
                }

                .quienesSomos-page .cober--ItemContent li,
                .quienesSomos-page .cober--headerContent li,
                .quienesSomos-page .subItem .cober--ItemTitle li {
                  font-size: 16px;
                  font-weight: 400;
                }

                @media (max-width: 992px) {
                  .quienesSomos-page .container {
                    width: 90%;
                    margin: auto;
                  }
              
                  .quienesSomos-page section.cober--Items {
                    margin-top: 70px;
                  }
                }

                @media (max-width: 578px) {
                  .quienesSomos-page section.cober--Items {
                    margin-top: 90px;
                  }
                }

            `}</style>
        </Container>
    )
}

