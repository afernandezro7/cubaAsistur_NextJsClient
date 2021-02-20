import { Select } from 'antd';
import { useState } from 'react';
import { useSelector } from '../../../hooks/useSelector';




export const PassengerSelector = ({selectors, setSelectors, language} ) => {


    const {selectorValues1, selectorValues2, select1, select2, handleChange} = useSelector(selectors, setSelectors)

    
    return (
        <div className="cardform-body">
            <div className="row">
                <div className="input-group no-border">
                    <div className="col-lg-6 col-sm-6">
                        <label htmlFor="form1-state">
                            <i className="now-ui-icons users_single-02"/>&nbsp;&nbsp;{ language.minor69 }&nbsp;&nbsp;
                            <i className="now-ui-icons travel_info" data-placement="right" title={ language.infoTravelers}/>
                        </label>

                        <Select 
                            size="middle"
                            placeholder="Cantidad viajeros"
                            value={ select1 }
                            onChange={ (value)=>handleChange(parseInt(value), 'selector1') } 
                            style={{ width: '100%' }}
                        >
                            { selectorValues1 }
                        </Select>

                        
                    </div>
                    <div className="col-lg-6 col-sm-6">
                        <label htmlFor="form2-state">
                            <i className="now-ui-icons users_single-02"/>&nbsp;&nbsp;{ language.mayor69 }&nbsp;&nbsp;
                            <i className="now-ui-icons travel_info" data-placement="right" title={ language.infoTravelers}/>
                        </label>

                        <Select 
                            size="middle"
                            placeholder={ language.qtyTravelers }
                            value={ select2 } 
                            onChange={ (value)=>handleChange(parseInt(value), 'selector2') } 
                            style={{ width: '100%' }}
                        >
                            {selectorValues2}
                        </Select>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}



{/* <select name="CantidadViajeros1" data-toggle="tooltip" className="custom-select text-center" id="form1-state">
                            <option value={0}
                                selected>Cantidad de Viajeros</option>
                            <option className="sel1"
                                value={0}>0</option>
                            <option className="sel1"
                                value={1}>1</option>
                            <option className="sel1"
                                value={2}>2</option>
                            <option className="sel1"
                                value={3}>3</option>
                            <option className="sel1"
                                value={4}>4</option>
                            <option className="sel1"
                                value={5}>5</option>
                        </select> */}