import Link from 'next/link'
import { useDropdownMenu } from '../../../hooks/useDropdownMenu';
import { LanguageSelector } from '../languageSelector/LanguageSelector';

export default function Navigation({language}) {

    const { isDropdown,setIsDropdown, buttonClass,  navBarDiv } = useDropdownMenu()


    return (
        <div className={isDropdown ? 'nav-open' : ''}>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark custom-nav">

                {/* One of the primary actions on mobile is to call a business - This displays a phone button on mobile only */}
                <div className="navbar-toggler-right">
                    <button 
                        className={`navbar-toggler ${buttonClass}`}
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbar" 
                        aria-controls="navbarTogglerDemo02" 
                        aria-expanded={isDropdown}
                        aria-label="Toggle navigation"
                        onClick={ ()=> setIsDropdown(!isDropdown) }
                    >
                        <span className="navbar-toggler-icon"/>
                    </button>
                </div>

                <Link href="/">
                    <a className="navbar-brand d-block d-sm-none" >
                        <img 
                            src="/assets/images/cubaasistur-icon.png" 
                            alt="Cuba Asistur"
                            width={60}
                            height={60}
                        />
                    </a>
                </Link>

                <div 
                    id="navbar" 
                    className={`flex-column justify-content-between navbar-collapse ${navBarDiv}`} 
                >
                    {/* navbar primary row blue */}
                    <ul className="navbar-nav w-100 px-3 mr-auto first-row">
                        <div className="row-header" style={{display: 'inherit'} }>
                            <li className="nav-item">
                                <a className="nav-link item-icon" href="https://www.facebook.com/BelraysaCuba" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link item-icon" href="https://twitter.com/Belraysa_Tours" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"/></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link item-icon" href="https://instagram.com/belraysa_tours?igshid=1az4m776avicz" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"/></a>
                            </li>
                            <li className="nav-item ml-auto pt-1 mr-4">
                                <a className="nav-link btn btn-first-row" href="https://www.belraysatours.com/index.html#content5-16" target="_blank" rel="noopener noreferrer">¿Eres una agencia?</a>
                            </li>
                        </div>
                        <div className="mx-auto order-0">
                            <li className="nav-item">
                                <a className="nav-link number" href="#" rel="nofollow">Llamadas a
                                    <span id="callButton" href="tel:+507 5147 2323" className="number-call" rel="nofollow">+507 51472323</span> la central de Alarma
                                </a>
                            </li>
                        </div>
                        {/* buscador */}
                        <div className="order-3 row-header row justify-content-center">
                            <form 
                                className="form-inline"
                            >
                                <div className="input-group">
                                    <input type="text" className="form-control search-input" placeholder="Busca su Póliza" aria-label="Username" aria-describedby="basic-addon1"/>
                                    <div className="input-group-append">
                                        <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"/></span>
                                    </div>
                                </div>
                            </form>

                            {/* Selector de Idiomas*/}
                            <LanguageSelector/>
                            {/* Selector de Idiomas*/} 
                        </div>
                        {/* buscador */} 
                    </ul>
                    {/* ENDnavbar primary row blue */}

                    {/* Navbar secundary row white */}
                    <ul className="navbar-nav w-100 bg-secondary px-3 second-row">
                        <div className="row-header" style={{display: 'inherit'}}>
                            <li className="nav-item d-none d-sm-block">
                                <Link href= '/'>
                                    <a className="nav-link"><i className="fa fa-home"/></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href= '/es/quienes-somos'>
                                    <a className="nav-link trans--underline">Quienes Somos</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href= '/es/cobertura-de-poliza'>
                                    <a className="nav-link trans--underline">Cobertura de Póliza</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/es/info-cuba">
                                    <a className="nav-link trans--underline">Info de Cuba</a>
                                </Link>
                            </li>
                            <li className="nav-item noshowseparator">
                                <Link href="/es/clinicas-en-cuba">
                                    <a className="nav-link no-separator trans--underline">Clínicas en Cuba</a>
                                </Link>
                            </li>
                        </div>
                        <div className="mx-auto order-0 d-none d-sm-block logo">
                            <li className="nav-item noshowseparator">
                                <Link href= '/'>
                                    <a className="nav-link noshow link-img no-separator">
                                        <img src="/assets/images/Logo-CAA-1.png" className="img-fluid img-brand"/>
                                    </a>
                                </Link>
                            </li>
                        </div>
                        <div className="order-3 row-header" style={{display: 'inherit'}} >
                            <li className="nav-item">
                                <Link href= '/es/terminos-condiciones'>
                                    <a className="nav-link trans--underline">Términos y Condiciones</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href= '/es/faqs'>
                                    <a className="nav-link trans--underline">FAQ'S</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href= '/es/fundamento-legal'>
                                    <a className="nav-link trans--underline">Fundamento Legal</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href= '/es/asistur-cuba'>
                                    <a className="nav-link trans--underline">ASISTUR en Cuba</a>
                                </Link>
                            </li>
                            <li className="nav-item noshowseparator">
                                <Link href= '/'>
                                    <a className="nav-link no-separator"><i className="fa fa-user"/></a>
                                </Link>  
                            </li>
                        </div>
                    </ul>
                    {/* ENDnavbar secundary row white */} 
                </div>
            </nav>

        </div>
    )

}

