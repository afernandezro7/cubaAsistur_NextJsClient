import Head from "next/head";
import Container from "../../components/layouts/Container";

export default function TerminosCondiciones() {
    return (
        <Container>

            <Head>
                <title>Términos y Condiciones</title>
            </Head>

            <main className="terms-page">
                <section className=" container terms--Items">
                    <div className="terms--header mb-3">
                        <h1 className="terms--Title text-primary">TÉRMINOS Y CONDICIONES DEL SITIO</h1>
                        <p className="terms--headerContent">CubaAsistur funciona como canal de ventas online exclusivo de ASISTUR, que
                                        es una sociedad mercantil cubana del sector de los seguros y los servicios financieros. Al utilizar este
                                        sitio o reservar una póliza a través del mismo, Usted acepta estos Términos y Condiciones. Toda
                                        referencia a Usted significa Todas las personas que con Usted disfrutarán nuestros productos o
                                        servicios. Lea cuidadosamente estos Términos y Condiciones.</p>
                    </div>
                    <div className="terms--Item ">
                        <div className="terms--ItemTitle text-primary d-flex justify-content-start ">
                            <h2 className="terms--Tema text-primary ">Obligaciones al utilizar nuestro sitio web</h2>
                        </div>
                        <div className="terms--ItemContent">
                            <p>Usted asegura contar con 18 años de edad o más, con capacidad legal de utilizar este sitio y que
                                              respetará las obligaciones legales para cualquier responsabilidad en que pueda incurrir como
                                              resultado del uso del mismo.</p>
                            <p>Usted asegura que toda la información introducida durante la reservación es correcta y acepta la
                                              responsabilidad financiera de todas las transacciones hechas bajo su nombre o cuenta.</p>
                            <p>La información de este sitio sólo podrá tener uso personal y sin propósitos comerciales.</p>
                            <p>NO garantizamos que el sitio esté libre de virus informáticos ni de otras propiedades que puedan
                                              causar pérdidas o perjuicios.</p>
                            <p>CubaAsistur y sus prestatarios no son responsables de la documentación requerida para su viaje a
                                              Cuba.</p>
                        </div>
                    </div>
                    <div className="terms--Item ">
                        <div className="terms--ItemTitle text-primary d-flex text-left ">
                            <h2 className="terms--Tema text-primary ">Uso de datos personales</h2>
                        </div>
                        <div className="terms--ItemContent">
                            <p>CubaAsistur hace todos los esfuerzos para asegurarse de que la información que usted intercambia en
                                              este sitio on-line, incluyendo datos personales e información de su tarjeta de crédito, sea tratada
                                              con toda la seguridad para proteger la información enviada desde su navegador hacia nuestros
                                              sistemas.</p>
                            <p>Todos los datos que Usted proporcione en el proceso de reserva y pago con tarjeta de crédito están
                                              protegidos a través de certificados digitales de nuestra pasarela de pago Páguelo Fácil, que cuenta
                                              con poderosos procesos para la encriptación de información sensible, garantizando que no puedan ser
                                              utilizados por terceros.</p>
                        </div>
                    </div>
                    <div className="terms--Item ">
                        <div className="terms--ItemTitle text-primary d-flex text-left ">
                            <h2 className="terms--Tema text-primary ">Exactitud de la información</h2>
                        </div>
                        <div className="terms--ItemContent">
                            <p>CubaAsistur es cuidadoso con los contenidos en este sitio, toda la información publicada tiene
                                              propósito de orientación y está sujeta a cambios en cualquier momento.</p>
                        </div>
                    </div>
                    <div className="terms--Item ">
                        <div className="terms--ItemTitle text-primary d-flex text-left ">
                            <h2 className="terms--Tema text-primary ">Fuerza mayor</h2>
                        </div>
                        <div className="terms--ItemContent">
                            <p>CubaAsistur no es responsable de eventos producidos por Fuerza Mayor, como resultado de
                                              acontecimientos fuera de su control. El término Fuerza Mayor incluye, pero NO se limita a desastres
                                              naturales, incendios, huelgas, guerras, bloqueos, insurrecciones, manifestaciones, terremotos, actos
                                              o restricciones impuestas por las autoridades gubernamentales, o cualquier otra razón que escape al
                                              control de CubaAsistur.</p>
                        </div>
                    </div>
                    <div className="terms--Item ">
                        <div className="terms--ItemTitle text-primary d-flex text-left ">
                            <h2 className="terms--Tema text-primary ">Vínculos a sitios web de terceros</h2>
                        </div>
                        <div className="terms--ItemContent">
                            <p>Este sitio web contiene enlaces a terceros sitios web, ajenos a CubaAsistur, solamente para su
                                              conveniencia y referencia. CubaAsistur no responde por sus contenidos.</p>
                        </div>
                    </div>
                    <div className="terms--Item ">
                        <div className="terms--ItemTitle text-primary d-flex text-left ">
                            <h2 className="terms--Tema text-primary ">Descargo de responsabilidad</h2>
                        </div>
                        <div className="terms--ItemContent">
                            <p>Se hacen cambios periódicamente a la información expuesta en este sitio web. CubaAsistur puede
                                              perfeccionar y/o hacer cambios en este sitio web en cualquier momento.</p>
                            <p>CubaAsistur se reserva el derecho de hacer cambios a estos Términos y Condiciones de Uso en cualquier
                                              momento.</p>
                        </div>
                    </div>
                    <div className="terms--Item ">
                        <div className="terms--ItemTitle text-primary d-flex text-left ">
                            <h2 className="terms--Tema text-primary ">Política de Cancelación
                            </h2>
                        </div>
                        <div className="terms--ItemContent">
                            <p>Si Usted cancela total o parcialmente una póliza de seguro a Cuba después de recibir nuestra
                                              confirmación y voucher de reserva y los fondos han sido depositados en nuestra cuenta, CubaAsistur
                                              aplicará descuentos al reembolso por concepto de los gastos financieros y de operaciones relativos a
                                              su póliza.</p>
                            <p>Por concepto de gastos de operaciones se aplicará al reembolso un descuento de 3.00 USD.</p>
                            <p>Por concepto de gastos financieros se aplicará un descuento del 6% del valor total a reembolsar.</p>
                            <p>Si usted cancela en un plazo menor o igual a 3 días de la fecha de inicio de la póliza o durante la
                                              vigencia de la misma, se aplicará una penalización correspondiente al importe total de la reserva.
                            </p>
                            <p>Para solicitar la cancelación de una póliza por favor hacer clic aquí:
                                <a href="#" target="_blank">www.cubaAsistur.com/Contactenos</a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx> {`
                .terms-page h1,
                .terms-page h2,
                .terms-page h3,
                .terms-page h4,
                .terms-page p {
                  margin: 0;
                  padding: 0;
                }

                .terms-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }

                .terms-page h2 {
                  font-size: 20px;
                }

                .terms-page .container {
                  width: 1024px;
                  margin: auto;
                }

                .terms-page section.terms--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }

                .terms-page section.terms--Items p {
                  font-size: 16px;
                  font-weight: 400;
                }

                .terms-page .terms--header {
                  width: 90%;
                }

                .terms-page .terms--header p {
                  text-align: left;
                }

                .terms-page .terms--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                }

                .terms-page .terms--Item {
                  margin-bottom: 20px;
                }

                .terms-page .terms--itemTitle {
                  overflow: hidden;
                }

                .terms-page .terms--itemTitle a {
                  font-size: 24px;
                }

                .terms-page .terms--ItemContent,
                .terms-page .terms--headerContent,
                .terms-page .subItem .terms--ItemTitle {
                  width: 90%;
                  margin: auto;
                  margin-top: 20px;
                }

                .terms-page .terms--ItemContent p,
                .terms-page .terms--headerContent p,
                .terms-page .subItem .terms--ItemTitle p {
                  text-align: left;
                  margin-bottom: 15px;
                }

                .terms-page .terms--ItemContent a,
                .terms-page .terms--headerContent a,
                .terms-page .subItem .terms--ItemTitle a {
                  color: #074e7c;
                }

                .terms-page table th,
                .terms-page table td {
                  text-align: left;
                }

                .terms-page table th:nth-child(2),
                .terms-page table td:nth-child(2) {
                  text-align: center;
                }

                @media (max-width: 992px) {
                  .terms-page .container {
                    width: 90%;
                    margin: auto;
                  }
              
                  .terms-page section.terms--Items {
                    margin-top: 70px;
                  }
                }

                @media (max-width: 578px) {
                  .terms-page section.terms--Items {
                    margin-top: 90px;
                  }
                }
                
            `}</style>
        </Container>
    )
}

