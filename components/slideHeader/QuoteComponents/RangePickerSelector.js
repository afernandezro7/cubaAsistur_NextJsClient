import { DatePicker } from 'antd';
import { languageConfig } from '../../../helpers/languagePicker';

const { RangePicker } = DatePicker;

export const RangePickerSelector = ( { datevalues, setDatevalues, language} ) => {



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
                            locale={ 
                                languageConfig(language) 
                            }  
                            style={{ width: '100%' }}  
                            onChange={ handleChangePicker }                   
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

