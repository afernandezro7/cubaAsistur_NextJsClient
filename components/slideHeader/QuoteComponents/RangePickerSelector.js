import { DatePicker } from 'antd';
import moment from 'moment'

const { RangePicker } = DatePicker;

export const RangePickerSelector = ( { datevalues, setDatevalues } ) => {



    const handleChangePicker = (value)=>{
        const  arrivalMomentJs = value[0]
        const departureMomentJs = value[1]

        setDatevalues({
            arrivalDate: arrivalMomentJs,
            departureDate: departureMomentJs,
            amountOfDays: departureMomentJs.diff(arrivalMomentJs,"days") + 1
        })
       
    }

    return (
        < div className = "cardform-body mt-2"> 
            <div className="row">
                <div className="input-group no-border">
                    <div className="col-lg-12 col-sm-12">
                        <RangePicker 
                            size="middle"
                            locale={spanishConfig}  
                            style={{ width: '100%' }}  
                            onChange={ handleChangePicker }                   
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}


const spanishConfig = {
    "lang": {
      "locale": "es_ES",
      "placeholder": "Select date",
      "rangePlaceholder": ["Fecha Salida", "Fecha de Arribo"],
      "today": "Hoy",
      "now": "Ahora",
      "backToToday": "Back to today",
      "ok": "Ok",
      "clear": "Limpiar",
      "month": "Mes",
      "year": "Año",
      "timeSelect": "Select time",
      "dateSelect": "Selecciona Fecha",
      "monthSelect": "Selecciona el mes",
      "yearSelect": "Selecciona el año",
      "decadeSelect": "Selecciona la década",
      "yearFormat": "YYYY",
      "dateFormat": "D/M/YYYY",
      "dayFormat": "D",
      "dateTimeFormat": "D/M/YYYY HH:mm:ss",
      "monthFormat": "MMMM",
      "monthBeforeYear": true,
      "previousMonth": "Previous month (PageUp)",
      "nextMonth": "Next month (PageDown)",
      "previousYear": "Last year (Control + left)",
      "nextYear": "Next year (Control + right)",
      "previousDecade": "Last decade",
      "nextDecade": "Next decade",
      "previousCentury": "Last century",
      "nextCentury": "Next century"
    },
    "timePickerLocale": {
      "placeholder": "Select time"
    },
    "dateFormat": "YYYY-MM-DD",
    "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
    "weekFormat": "YYYY-wo",
    "monthFormat": "YYYY-MM"
}