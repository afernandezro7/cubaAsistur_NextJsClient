import Container from '../../components/layouts/Container'
import Head from 'next/head'


export default function InfoCuba() {
    return (
        <Container>

            <Head>
                <title>Información sobre Cuba</title>
            </Head>

            <main className="infoCuba-page">
                <section className=" container infoCuba--Items">
                    <div className="infoCuba--header mb-3">
                        <h1 className="infoCuba--Title text-primary">INFORMACIÓN SOBRE CUBA</h1>
                        
                        <p className="infoCuba--headerContent">La República de Cuba es un país insular ubicado en el Mar Caribe. Está
                            organizado en quince provincias y un municipio especial y su capital, La Habana, tiene el título de
                            Ciudad Maravilla del Mundo Moderno.</p>
                        <p className="infoCuba--headerContent">Cuba es una asombrosa mezcla de culturas, ritmos, tradiciones y paisajes.
                            Su gente es encantadora y transmite ritmos tropicales cuando habla, camina y trabaja.
                        </p>
                        <p className="infoCuba--headerContent">Sus playas como Varadero, Guardalavaca y Playa Pilar entre muchas otras
                            recrean un paradisíaco paisaje de arenas finas y cálidas aguas transparentes. Esto unido a una de las
                            barreras coralinas más ricas del mundo, hacen de la Isla el lugar perfecto para disfrutar del sol y
                            playa y el submarinismo.</p>
                        <p className="infoCuba--headerContent">Explorar a Cuba por dentro, a través de sus senderos ecológicos y
                            montañas, como Viñales, la Ciénaga de Zapata y Topes de Collantes, posibilitan el contacto con una
                            amplia variedad de especies de flora y fauna, cuidadosamente preservadas. En la isla no se reportan
                            plantas ni animales venenosos o peligrosos, excepto los cocodrilos que, por su extinción gradual, han
                            sido confinados a zonas aisladas y poco accesibles. Esto genera mucha confianza y seguridad a todos los
                            interesados en disfrutar del turismo de naturaleza.
                        </p>
                        <p className="infoCuba--headerContent">Entre sus productos, el ron y los tabacos son los más reconocidos
                            internacionalmente, con prestigiosas marcas como Havana Club, Santiago, Cohíba y Romeo y Julieta.</p>
                        <p className="infoCuba--headerContent">La seguridad tampoco es un problema, la isla cuenta con un bajísimo
                            índice de criminalidad y el sistema de salud que abarca todas las ciudades y pueblos del país, lo cual
                            es una garantía de tranquilidad donde quiera que se encuentre el visitante.</p>
                        <p className="infoCuba--headerContent">Todo esto hace de Cuba un lugar maravilloso y seguro para tus próximas
                            vacaciones.
                        </p>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex justify-content-start ">
                            <h2 className="infoCuba--Tema text-primary ">Clima</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <p>En correspondencia con su posición geográfica, en Cuba predomina el clima tropical, estacionalmente
                                húmedo. La temperatura media anual es de 25,4 °C, un poco más alta en la zona oriental e ideal en la
                                época de invierno.
                            </p>
                        </div>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">Población</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <p>La Población cubana está conformada por más de once millones de habitantes en una fusión de raíces
                                étnicas provenientes en su mayoría de España, África y Asia.
                            </p>
                            <p>Composición Étnica: 65% blancos, 24% mestizos, 10% negros, 1% asiáticos</p>
                            <p>Idioma: Español</p>
                            <p>Religión: Predominan el Cristianismo y religiones de origen africano.</p>
                            <p>Esperanza de Vida: 80 años para las mujeres y 76 años para los hombres</p>
                        </div>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">Costumbres</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <p>Comida Criolla: Carne de cerdo, arroz, frijoles negros, tostones, yuca con mojo y ensalada de
                            vegetales.</p>
                            <p>Bebida de Cortesía: Café Cubano</p>
                            <p>Coctel: Mojito (ron blanco, soda, limón, angostura, hierba buena y azúcar)</p>
                            <p>Bailes Populares: Salsa y Casino</p>
                            <p>Deporte Nacional: Béisbol</p>
                            <p>Juego de Mesa Popular: Dominó</p>
                            <p>Camisa de Gala: Guayabera</p>
                            <p>Cervezas Populares: Cristal (clara) y Bucanero (fuerte)</p>
                        </div>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">Economía</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <p>La economía cubana se basa principalmente en el turismo, aunque también posee otros renglones de
                            exportación como el níquel, tabaco, ron, café, azúcar y la industria farmacéutica.</p>
                        </div>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">Recomendaciones</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <p>Al ser Cuba un país de clima tropical conviene llevar ropa ligera, preferiblemente de algodón la
                                mayoría de los meses del año, sin olvidar el traje de baño y las cremas anti solares. Para los meses
                                de invierno (de noviembre a marzo) un suéter o un abrigo ligero serán muy útiles y en época de
                                lluvias (de mayo a octubre) se aconseja disponer de un impermeable ligero o paraguas.</p>
                            <p>Para los recorridos de ciudad o caminatas se recomienda el uso de calzado y beber siempre agua
                                embotellada. Cuando salga fuera del hotel o lugar de alojamiento, no deje al descuido o confíe a
                                desconocidos objetos de valor como celulares, cámaras fotográficas o de video, entre otros.</p>
                            <p>La ropa informal (jeans, short, camiseta, etc.) se considera correcta en casi todos los lugares. Para
                                asistir a teatros, restaurants de lujo, salas de concierto y otros, se requiere ropa más formal. En
                                la mayoría de estos lugares una camisa de mangas largas y una corbata será suficiente, sin descartar
                                el uso de sacos.</p>
                        </div>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">Moneda</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <p>En Cuba circulan dos monedas: el Peso (CUP) y el Peso Convertible (CUC). La población cubana utiliza
                                mayormente el Peso y los turistas el Peso Convertible cubano.</p>
                            <p>El cambio de divisas por Pesos Convertibles se realiza en bancos, aeropuertos, hoteles y casas de
                                cambio (CADECAS), realizando la conversión sobre la base de que Un Peso Convertible = Un Dólar
                                Americano. En caso de cambio en efectivo de Dólares estadounidenses por Pesos Convertibles se grava
                                el dólar con un impuesto del 10%. Se recomienda NO cambiar dinero en la calle con desconocidos.
                            </p>
                        </div>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">Regulaciones aduanales</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <p>Consulte las Disposiciones Aduaneras Vigentes en el sitio web de la Aduana General de la República de
                                Cuba:
                                <a href="http://www.aduana.gob.cu" target="_blank">www.aduana.gob.cu</a>.</p>
                        </div>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">Seguro de viaje</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <p>Para viajar a Cuba es necesario disponer de un seguro de viaje que incluya una póliza de gastos
                                médicos, con cobertura dentro de Cuba. En el siguiente enlace puede acceder al fundamento de esta
                                disposición legal:
                                <a href="http://www.cubaAsitur/es/fundamento-legal" target="_blank">www.cubaAsitur/Fundamento_Legal</a>.</p>
                        </div>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">Energía eléctrica</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <p>La corriente eléctrica de uso general es de 110 V/ 60 Hz, aunque en la mayoría de los hoteles se
                                incluye de 220 V / 60 Hz. Para los equipos eléctricos dotados de espigas redondas se recomienda un
                                adaptador de espigas planas, que son las que admiten los enchufes o tomacorrientes del país.</p>
                        </div>
                    </div>
                    <div className="infoCuba--Item ">
                        <div className="infoCuba--ItemTitle text-primary d-flex text-left ">
                            <h2 className="infoCuba--Tema text-primary ">Números telefónicos importantes</h2>
                        </div>
                        <div className="infoCuba--ItemContent">
                            <ul className="text-left">
                                <li>Policía: 106</li>
                                <li>Bomberos: 105</li>
                                <li>Ambulancia: 104</li>
                                <li>Información Empresa Telefónica: 113</li>
                                <li>Toxicología: (07)274-3008 / 260-1230 / 260-8751</li>
                                <li>Información aeropuertos internacionales:
                                    <ul>
                                        <li>Habana / José Martí: (07)266-4644</li>
                                        <li>Varadero / Juan Gualberto Gómez: (045)61-3016</li>
                                        <li>Cayo Coco / Jardines del Rey: (033)30-9161</li>
                                        <li>Cayo Largo / Vitalio Acuña: (045)24-8207</li>
                                        <li>Santiago de Cuba / Antonio Maceo: (022)69-8614</li>
                                        <li>Holguín / Frank País: (024)47-4525</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </main>

            <style jsx>{`
                .infoCuba-page h1,
                .infoCuba-page h2,
                .infoCuba-page h3,
                .infoCuba-page h4,
                .infoCuba-page p {
                  margin: 0;
                  padding: 0;
                }

                .infoCuba-page h1 {
                  font-size: 3em;
                  font-weight: 100;
                }

                .infoCuba-page h2 {
                  font-size: 20px;
                }

                .infoCuba-page .container {
                  width: 1024px;
                  margin: auto;
                }

                .infoCuba-page section.infoCuba--Items {
                  margin-top: 150px;
                  margin-bottom: 100px;
                }

                .infoCuba-page section.infoCuba--Items p {
                  font-size: 16px;
                  font-weight: 400;
                }

                .infoCuba-page .infoCuba--header {
                  width: 90%;
                }

                .infoCuba-page .infoCuba--header p {
                  text-align: left;
                }

                .infoCuba-page .infoCuba--Title {
                  font-size: 30px;
                  text-shadow: none;
                  text-align: left;
                  width: 90%;
                  margin: auto;
                }

                .infoCuba-page .infoCuba--Item {
                  margin-bottom: 20px;
                }

                .infoCuba-page .infoCuba--itemTitle {
                  overflow: hidden;
                }

                .infoCuba-page .infoCuba--itemTitle a {
                  font-size: 24px;
                }

                .infoCuba-page .infoCuba--ItemContent,
                .infoCuba-page .infoCuba--headerContent,
                .infoCuba-page .subItem .infoCuba--ItemTitle {
                  width: 90%;
                  margin: auto;
                  margin-top: 20px;
                }

                .infoCuba-page .infoCuba--ItemContent p,
                .infoCuba-page .infoCuba--headerContent p,
                .infoCuba-page .subItem .infoCuba--ItemTitle p {
                  text-align: left;
                  margin-bottom: 15px;
                }

                .infoCuba-page .infoCuba--ItemContent a,
                .infoCuba-page .infoCuba--headerContent a,
                .infoCuba-page .subItem .infoCuba--ItemTitle a {
                  color: #074e7c;
                }

                .infoCuba-page .infoCuba--ItemContent li,
                .infoCuba-page .infoCuba--headerContent li,
                .infoCuba-page .subItem .infoCuba--ItemTitle li {
                  font-size: 16px;
                  font-weight: 400;
                }

                @media (max-width: 992px) {
                  .infoCuba-page .container {
                    width: 90%;
                    margin: auto;
                  }
              
                  .infoCuba-page section.infoCuba--Items {
                    margin-top: 70px;
                  }
                }

                @media (max-width: 578px) {
                  .infoCuba-page section.infoCuba--Items {
                    margin-top: 90px;
                  }
                } 
            `}</style>
        </Container>
    )
}

