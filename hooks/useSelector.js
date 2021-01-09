import { useState } from 'react'
import { createSelectOptions } from '../helpers/createSelectOptions'

export const useSelector = ( selectors, setSelectors ) => {

    const [selectorValues1, setselectorValues1] = useState( createSelectOptions(5) )
    const [selectorValues2, setselectorValues2] = useState( createSelectOptions(5) )


    const { select1, select2 } = selectors



    const handleChange=( value, selector )=>{

        if(selector === "selector1"){
            setSelectors({
                ...selectors,
                select1: value
            })

            setselectorValues2(createSelectOptions(5-value))

        }else if(selector === "selector2"){

            setSelectors({
                ...selectors,
                select2: value
            })

            setselectorValues1(createSelectOptions(5-value))
        }

    }

    return {
        selectorValues1,
        selectorValues2,
        select1, 
        select2,
        handleChange
    }
}
