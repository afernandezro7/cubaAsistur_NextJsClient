import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select';

export const LanguageSelector = () => {

    const [selected, setSelected] = useState('ES');

    const onSelect = (languageCode)=>{
        setSelected(languageCode)
    }
    
    return (
        <>
            <ReactFlagsSelect
                selected={selected}
                countries={["US","FR","ES","IT"]}
                customLabels={{"US": "EN","FR": "FR","ES": "ES","IT": "IT"}}
                onSelect={ onSelect }
                selectedSize={14}
                selectButtonClassName="menu-flags-button"
            />
            <style jsx>{`
                
                button.menu-flags-button{
                    color: #fff;
                }

            `}</style>

        </>
    )
}
