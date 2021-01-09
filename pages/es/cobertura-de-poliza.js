import Container from '../../components/layouts/Container'
import Head from 'next/head'


export default function CoberturaPoliza() {
    return (
        <Container>

            <Head>
                <title>Cobertura de Pólizas</title>
            </Head>

            <main className="coberPolizas-page">
                <section className = " container cober--Items"> 
                    <div className="cober--header mb-3">
                        <h1 className="cober--Title text-primary">Cobertura de Pólizas Asistur</h1>
                        <p className="cober--headerContent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, suscipit
                        excepturi ipsa dignissimos sapiente quasi temporibus, voluptates nisi voluptatum sequi quas. Blanditiis
                        hic ad est, sed molestiae id. Nam, vitae? Unde quia facere, harum libero modi vel eveniet ratione quis
                        maxime aliquid placeat in veritatis ipsum, aspernatur earum, voluptate dolor!</p>
                    </div>
                    <div className="cober--Item">
                        <div className="cober--ItemTitle text-primary text-center">
                            <h2 className="cober--Tema text-primary">Tabla de Beneficios</h2>
                        </div>
                        <div className="cober--ItemContent">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th colSpan={2}
                                            scope="col">GARANTÍAS Y LÍMITES POR ASEGURADO</th>
                                        <th scope="col">Viaje Super</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th colSpan={2}
                                            scope="col">GASTOS MÉDICOS POR ENFERMEDAD Y ACCIDENTE Monto Máximo Global
                                                                    (MMG)</th>
                                        <th scope="col">12,000.00</th>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Asistencia Médica en caso de Accidente o Enfermedad No preexistente</td>
                                        <td>Hasta 12,000.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Primera Atención Médica en caso de Enfermedad preexistente</td>
                                        <td>Hasta 300.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Medicamentos ambulatorios</td>
                                        <td>Hasta 300.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Medicamentos en caso de hospitalización</td>
                                        <td>Incluidos en MMG</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Gasto de acompañante durante la hospitalización</td>
                                        <td>Hasta 1200.00
                                            <br/>(Máx 50 por día /day)</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Odontología de Urgencias</td>
                                        <td>Hasta 300.00
                                            <br/>(Máx. 150.00 por piezas</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Traslados Sanitarios</td>
                                        <td>Incluidos en MMG</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}
                                            scope="col">REPATRIACIONES (SANITARIA O FUNERARIA)</th>
                                        <th scope="col">Hasta 15,000.00</th>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Regreso de acompañante del titular repatriado</td>
                                        <td>Incluido</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Traslado de un familiar</td>
                                        <td>Incluido</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Gastos de hotel por convalecencia</td>
                                        <td>Hasta 600.00
                                            <br/>(Máx. 120.00 por día)</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Acompañante de menores o mayores</td>
                                        <td>Incluido</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}
                                            scope="col">ANTICIPO DE FONDOS</th>
                                        <th scope="col"/>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Anticipo de fondos para pago de Asistencia Legal por responsabilidad en un
                                                                    accidente</td>
                                        <td>Préstamo hasta 5,000.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Anticipo de fondos para finanzas</td>
                                        <td>Préstamo hasta 5,000.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>
                                            <b>SEGURO DE ACCIDENTE (incluye muerte e incapacidad permanente)</b>
                                            <br/>
                                            Mayores de 70 años: Excluye muerte por cualquier causa salvo accidente como pasajero en
                                                                    transporte público</td>
                                        <td>6000.00</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}
                                            scope="col">EQUIPAJE</th>
                                        <th scope="col"/>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Localización de equipaje</td>
                                        <td>Incluido</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Indemnización por pérdida de equipaje</td>
                                        <td>Complementario 500.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Compensación por demora en la Localización de equipaje</td>
                                        <td>Hasta 200.00</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}
                                            scope="col">GESTIÓN DE DOCUMENTOS</th>
                                        <th scope="col"/>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Asistencia en caso de robo y extravío de documentos</td>
                                        <td>Incluido</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Gastos de gestíon por pérdida de documentos</td>
                                        <td>300.00</td>
                                    </tr>
                                    <tr>
                                        <th colSpan={2}
                                            scope="col">OTROS GASTOS</th>
                                        <th scope="col"/>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Transmisión de mensajes urgentes</td>
                                        <td>Incluido</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Reembolso por vuelo demorado o cancelado</td>
                                        <td>100.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>Diferencia de tarifa por viaje de regreso retrasado o anticipado</td>
                                        <td>Incluido</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2}>LÍMITE MÁXIMO DE COBERTURA</td>
                                        <td>33,000.00</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={3}>
                                            <div className="d-flex">
                                                <span className="d-block pr-1">
                                                    <b>EXTRAPRIMA:</b>
                                                </span>
                                                <span className="d-block">2.00 CUC por pax por día por la realización de actividades de
                                                                                alto riesgo.
                                                    <br/>
                                                    Excluido para los mayores de 70 años</span>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <hr style={
                            {
                                backgroundColor: '#4386b3',
                                marginTop: '2px',
                                marginBottom: '2px'
                            }
                        }/>
                    </div>
                    <div className="cober--Item ">
                        <div className="cober--ItemTitle text-primary d-flex justify-content-start ">
                            <h2 className="cober--Tema text-primary ">EXCLUSIONES DEL SEGURO DE VIAJE</h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>No están cubiertos por este seguro, los gastos originados por:</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">a)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Las prestaciones que no hayan sido solicitadas al Asegurador a través de la Central de Alarma de
                                                ASISTUR y efectuadas sin su acuerdo, salvo en caso de fuerza mayor o de imposibilidad material
                                                demostrada.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">b)</h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Los siniestros causados por dolo del Asegurado, del Tomador del Seguro, o de las personas que viajen
                            con el Asegurado. Afecciones, enfermedades o lesiones derivadas directa o indirectamente de riña
                            (salvo que se tratase de legítima defensa), huelga, actos de vandalismo o tumulto popular en que el
                            Asegurado hubiese participado como elemento activo. El intento de o la comisión de un acto ilegal y,
                            en general, cualquier acto doloso o criminal del Asegurado, incluido el suministrode información
                            falsa o diferente de la realidad.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">c)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Los siniestros ocurridos en caso de guerra (declarada o no), manifestaciones y movimientos populares,
                            actos de terrorismo y sabotaje, huelgas, detenciones por parte de cualquier autoridad por delito no
                            derivado de accidente automotor, restricciones a la libre circulación o cualquier otro caso de
                            fuerza mayor, a menos que el Asegurado pruebe que el siniestro no tiene relación con tales
                            acontecimientos.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">d)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Participación en competencias peligrosas de cualquier índole, así como los entrenamientos o pruebas,
                            las apuestas y las consecuencias que sobrevengan de la práctica de pasatiempos peligrosos o de alto
                            riesgo, incluyendo, pero no limitado a: caza, actividades subacuáticas, aladeltismo, alpinismo,
                            motociclismo, automovilismo, boxeo, vehículos todo terreno, etc. Esta exclusión podrá quedar sin
                            efecto mediante el pago de una
                                <a className="text-primary" href="faqs-cubaasistur.html" target="_blank" rel="noopener noreferrer">extrapremio</a>.
                            </p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">e)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Los siniestros que tengan por causa las irradiaciones procedentes de la transmutación o
                            desintegración nuclear o la radiactividad.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">f)</h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>El rescate en mar o montaña.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">g)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Viajes aéreos en aviones no destinados y autorizados como transporte público.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">h)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Suicidio o enfermedades y lesiones resultantes del intento de suicidio o causadas intencionalmente
                            por el Asegurado a sí mismo.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">i)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Tratamientos, enfermedades y estados patológicos, así como cualquier consecuencia producida por la
                            ingestión intencional o administración de tóxicos (drogas), alcohol, narcóticos o por la utilización
                            de medicamentos sin prescripción médica.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">j)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Gastos de prótesis, órtesis, síntesis o ayudas mecánicas de todo tipo, ya sean de uso interno o
                                externo, incluyendo pero no limitados a:
                                <br/>
                                artículos de ortopedia, prótesis dentales, audífonos,
                                anteojos, lentes de contacto, férulas, muletas, nebulizadores, respiradores, etc.
                            </p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">k)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Embarazos, partos y abortos, independientemente de su etiología, así como cualquier consecuencia
                            derivada de un estado de gestación, a menos que se trate de una complicación clara e imprevisible.
                            Los estados de embarazo posteriores a la semana 26 de gestación están excluidos cualquiera sea la
                            naturaleza de la causa que motiva el tratamiento.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">l)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Todo hecho derivado de una alteración mental, por cualquier causa y aún transitoria.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">m)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Controles de tensión arterial. Hipertensión arterial y sus consecuencias.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">n)
                            </h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Síndrome de inmunodeficiencia humana, SIDA y HIV en todas sus formas agudizaciones, secuelas y
                            consecuencias. Enfermedades venéreas o de transmisión sexual.</p>
                        </div>
                    </div>
                    <div className="cober--Item subItem">
                        <div className="cober--ItemTitle text-primary d-flex text-left ">
                            <h2 className="cober--Tema text-primary ">o)</h2>
                        </div>
                        <div className="cober--ItemContent">
                            <p>Enfermedades crónicas y/o preexistentes: Quedan expresamente excluidos los estudios y/o los
                            tratamientos relacionados con enfermedades crónicas o preexistentes o congénitas o recurrentes,
                            conocidas o no por el Asegurado padecidas con anterioridad al inicio de la vigencia de este seguro
                            y/o del viaje, lo que sea posterior, así como sus agudizaciones, secuelas o consecuencias (incluso
                            cuando las mismas aparezcan durante el viaje).</p>
                        </div>
                    </div>
                </section>

            </main>

            <style jsx>{`
                .coberPolizas-page h1,
                .coberPolizas-page h2,
                .coberPolizas-page h3,
                .coberPolizas-page h4,
                .coberPolizas-page p {
                  margin: 0;
                  padding: 0;
                }

                .coberPolizas-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }

                .coberPolizas-page h2 {
                  font-size: 20px;
                }

                .coberPolizas-page .container {
                  width: 1024px;
                  margin: auto;
                }

                .coberPolizas-page section.cober--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }

                .coberPolizas-page section.cober--Items p {
                  font-size: 16px;
                  font-weight: 400;
                }

                .coberPolizas-page .cober--header p {
                  width: 90%;
                  text-align: left;
                }

                .coberPolizas-page .cober--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                  width: 90%;
                  margin: auto;
                }

                .coberPolizas-page .cober--Item {
                  margin-bottom: 20px;
                }

                .coberPolizas-page .cober--itemTitle {
                  overflow: hidden;
                }

                .coberPolizas-page .cober--itemTitle a {
                  font-size: 24px;
                }

                .coberPolizas-page .cober--ItemContent,
                .coberPolizas-page .cober--headerContent,
                .coberPolizas-page .subItem .cober--ItemTitle {
                  width: 90%;
                  margin: auto;
                  margin-top: 20px;
                }

                .coberPolizas-page .cober--ItemContent p,
                .coberPolizas-page .cober--headerContent p,
                .coberPolizas-page .subItem .cober--ItemTitle p {
                  text-align: left;
                }

                .coberPolizas-page table th,
                .coberPolizas-page table td {
                  text-align: left;
                }

                .coberPolizas-page table th:nth-child(2),
                .coberPolizas-page table td:nth-child(2) {
                  text-align: center;
                }

                @media (max-width: 992px) {
                  .coberPolizas-page .container {
                    width: 90%;
                    margin: auto;
                  }
              
                  .coberPolizas-page section.cober--Items {
                    margin-top: 70px;
                  }
                }

                @media (max-width: 578px) {
                  .coberPolizas-page section.cober--Items {
                    margin-top: 90px;
                  }
                }
            `}</style>
        </Container>
    )
}


