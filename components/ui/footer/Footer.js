import { useSelector } from "react-redux";

export const Footer = () => {

    const { content: language } = useSelector( state => state.lang );

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
                                    <i className="fas fa-globe"></i> { language.footer.siteMap }</a>
                                <p className="font-weight-bold my-2">{ language.footer.socials }</p>
                                <div className="d-flex justify-content-start mb-3">
                                    <a className="pr-2" href="https://www.facebook.com/BelraysaCuba" target="_blank" rel="noopener noreferrer"><img src="/assets/images/facebook.png" alt="facebook"/></a>
                                    <a className="pr-2" href="https://twitter.com/Belraysa_Tours" target="_blank" rel="noopener noreferrer"><img src="/assets/images/twitter2.png" alt="twitter"/></a>
                                    <a className="pr-2" href="https://instagram.com/belraysa_tours?igshid=1az4m776avicz" target="_blank" rel="noopener noreferrer"><img src="/assets/images/instagram_ico2.png" alt="instagram"/></a>
                                </div>
                            </div>
                            <p className="font-weight-bold mt-2">{ language.footer.guaranteed }</p>
                            <div className="footer--cardsecurity d-flex justify-content-start">
                                <img src="/assets/images/cardsecurity-2.png" alt="facebook"/>
                                <img src="/assets/images/pagofacil.png" alt="twitter"/>
                                <img src="/assets/images/cardsecurity-3.png" alt="instagram"/>
                            </div>
                        </div>
                        <div className="footer--column col-sm-6 col-md-4 ">
                            <div className="text-right ">
                                <p className=" font-weight-bold my-2">
                                    { language.footer.addressLabel }
                                </p>
                                <span>{ language.footer.address }</span>
                                <p className=" font-weight-bold my-2">
                                    { language.footer.contactLabel }
                                </p>
                                <a  
                                    href={`mailto:${ language.footer.contactMail }`}
                                >
                                    <i className="fas fa-envelope"/>&nbsp;
                                    { language.footer.contactMail }
                                </a>
                                <a  
                                    href={ `tel:${language.footer.phone[1]} `}
                                >
                                    <i className="fas fa-phone"/>&nbsp;
                                    { language.footer.phone[0] + language.footer.phone[1] }
                                </a>
                                <a  
                                    href={ `tel:${language.footer.cellphone[1]} `}
                                >
                                    <i className="fas fa-mobile-alt"/>&nbsp;
                                    { language.footer.cellphone[0] + language.footer.cellphone[1] }
                                </a>
                            </div>
                        </div>
                        <div className="footer--column col-sm-6 col-md-4 ">
                            <p className="font-weight-bold my-2 text-left ">{ language.footer.proslabel }</p>
                            <div>
                                <ul>
                                    { 
                                        language.footer.pros.map( (item, index) => (
                                            <li key={index} ><i className="fas fa-chevron-right"/>&nbsp;{ item.header }
                                                <ul>
                                                    {
                                                        item.content.map( (subItem,i)=>(
                                                            <li key={i}><i className="fas fa-chevron-right"/>&nbsp;{subItem}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="containerfull">
                <p className="my-3 text-primary display-7 font-weight-normal">{ language.footer.copyRight }</p>
            </div>
        </footer>
    )
}

