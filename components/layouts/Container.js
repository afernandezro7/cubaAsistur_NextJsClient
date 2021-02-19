import Head from 'next/head'
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from "react-redux"
import Navigation from "../ui/navBar/Navigation"
import { Footer } from "../ui/footer/Footer"
import { startLangSelect_Action } from "../../redux/actions/langActions"

const Container = ({children}) => {

    const router = useRouter()
    const { language } = router.query

    const dispatch = useDispatch();
    const { lang } = useSelector( state => state );

    useEffect(() => {
        if(language && language.toUpperCase()!== lang.currentLang){
            dispatch(startLangSelect_Action(language.toUpperCase()))
        }
    }, [language])

    

    return (
        <>
            <Head>
                <title>CubaAsistur</title>

                {/* <!-- Required meta tags --> */}
                <link rel="icon" href="/assets/images/cubaasistur-icon.png"/>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"/>

                {/* <!--     Fonts and icons     --> */}
                <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,300;1,700&display=swap" rel="stylesheet"/>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.1/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>

            </Head>

            <Navigation/> 
            
            {children} 

            <Footer/>
        </>
    )
}

export default Container

