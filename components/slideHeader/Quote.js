import { useState } from "react"
import { useSelector } from "react-redux"
import { PassengerSelector } from "./QuoteComponents/PassengerSelector"
import { RangePickerSelector } from "./QuoteComponents/RangePickerSelector"


export const Quote = () => {

    const [ selectors, setSelectors ] = useState({
        select1: null,
        select2: null
    })

    const [datevalues, setDatevalues] = useState({
        arrivalDate: null,
        departureDate: null,
        amountOfDays: null
    })

    const { lang } = useSelector( state => state );
    const { quoteBox }= lang.content

    return (
        <> 
            <div 
                className="container" 
                id="containerform"
                style={
                    {
                        position:'absolute',
                        top: '90px',
                        zIndex: 1,
                        
                    }
                }
            >
                <div className="cardform cardform-body" data-background-color="orange">
                    <form id="cotizador" className="form">
                        <div className="card-header text-left">
                            <h3 className="card-title" align="left">
                                <span className="titulo-D">{ quoteBox.header[0] }</span>
                                <br/>
                                <span className="titulo-D">{quoteBox.header[1]}</span>
                            </h3>
                        </div>
                        <div className="bordeamarillo">

                            <RangePickerSelector
                                datevalues = {datevalues}
                                setDatevalues = {setDatevalues}
                                language = { lang.currentLang }
                            />

                            <PassengerSelector
                                selectors={ selectors }
                                setSelectors={ setSelectors }  
                                language = { quoteBox }
                            />

                            <div className="card-footer text-right">
                                <a className="btn btn-neutral btn-round btn-lg">{quoteBox.button}</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

