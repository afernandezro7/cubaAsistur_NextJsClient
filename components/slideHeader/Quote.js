import { useState } from "react"
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
                                <span className="titulo-D">Cotice su póliza</span>
                                <br/>
                                <span className="titulo-D">para viajar a CUBA</span>
                            </h3>
                        </div>
                        <div className="bordeamarillo">

                            <RangePickerSelector
                                datevalues = {datevalues}
                                setDatevalues = {setDatevalues}
                            />

                            <PassengerSelector
                                selectors={ selectors }
                                setSelectors={ setSelectors }  
                            />

                            <div className="card-footer text-right">
                                <a className="btn btn-neutral btn-round btn-lg">COTIZAR</a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

