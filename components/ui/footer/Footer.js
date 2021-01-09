export const Footer = () => {
    return (
        <footer className="mt-4">
            <div className="container-fluid pb-4">
                <div className="footer--transparency"></div>
                <div className="footer--Content px-4">
                    <img src="/assets/images/Logo-CAA-2.png" className="img-fluid img-brand my-3" alt="Aseguradora en CUBA"/>
                    <div className="row justify-content-between">
                        <div className="footer--column col-sm-6 col-md-4 text-left">
                            <div>
                                <a  href="#">
                                    <i className="fas fa-globe"></i> Mapa del Sitio</a>
                                <p className="font-weight-bold my-2">Nuestras Redes Sociales: </p>
                                <div className="d-flex justify-content-start mb-3">
                                    <a className="pr-2" href="https://www.facebook.com/BelraysaCuba" target="_blank" rel="noopener noreferrer"><img src="/assets/images/facebook.png" alt="facebook"/></a>
                                    <a className="pr-2" href="https://twitter.com/Belraysa_Tours" target="_blank" rel="noopener noreferrer"><img src="/assets/images/twitter2.png" alt="twitter"/></a>
                                    <a className="pr-2" href="https://instagram.com/belraysa_tours?igshid=1az4m776avicz" target="_blank" rel="noopener noreferrer"><img src="/assets/images/instagram_ico2.png" alt="instagram"/></a>
                                </div>
                            </div>
                            <p className="font-weight-bold mt-2">Seguridad Garantizada</p>
                            <div className="footer--cardsecurity d-flex justify-content-start">
                                <img src="/assets/images/cardsecurity-2.png" alt="facebook"/>
                                <img src="/assets/images/pagofacil.png" alt="twitter"/>
                                <img src="/assets/images/cardsecurity-3.png" alt="instagram"/>
                            </div>
                        </div>
                        <div className="footer--column col-sm-6 col-md-4 ">
                            <div className="text-right ">
                                <p className=" font-weight-bold my-2">Dirección:
                                </p>
                                    <span>Calle Erick del Valle, Edificio Katy 2, Planta Baja e/ Via Argentina y Calle Alberto Navarro, 
                                    El Cangrejo, Bella Vista, Ciudad Panamá, Panamá.</span>
                                <p className=" font-weight-bold my-2">Contactos: </p>
                                <a  href="mailto:comercial@belraysatours.com"><i className="fas fa-envelope"/>
                                    comercial@belraysatours.com
                                </a>
                                <a  href="tel:+507 6930 3581"><i className="fas fa-phone"/>
                                    Tel: +507 6930 3581
                                </a>
                                <a  href="tel:+507 6450 4824"><i className="fas fa-mobile-alt"/>
                                    Cell: +507 6450 4824
                                </a>
                            </div>
                        </div>
                        <div className="footer--column col-sm-6 col-md-4 ">
                            <p className="font-weight-bold my-2 text-left ">Ventajas de CubaAsistur </p>
                            <div>
                                <ul>
                                    <li><i className="fas fa-chevron-right"/>
                                        ASISTUR es la Compañía líder de seguros en Cuba
                                        <ul>
                                            <li><i className="fas fa-chevron-right"/>
                                                Experiencia desde 1991</li>
                                            <li><i className="fas fa-chevron-right"/>
                                                Personal calificado</li>
                                            <li><i className="fas fa-chevron-right"/>
                                                Una extensa red de proveedores</li>
                                            <li><i className="fas fa-chevron-right"/>
                                                Central de Alarma disponible las 24 horas</li>
                                        </ul>
                                    </li>
                                    <li><i className="fas fa-chevron-right"/>
                                        Reserva online segura con certificados digitales
                                    </li>
                                    <li><i className="fas fa-chevron-right"/>
                                        Tecnología de avanzada
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="containerfull">
                <p className="my-3 text-primary display-7 font-weight-normal">Copyright 2012 - 2020 |BELRAYSA S.A. | All Right Reserved | Belraysa Tours and Travel</p>
            </div>
        </footer>
    )
}

