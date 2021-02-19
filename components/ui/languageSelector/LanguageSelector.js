import React, { useMemo } from 'react'
import ReactFlagsSelect from 'react-flags-select';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'
import { startLangSelect_Action } from '../../../redux/actions/langActions';



export const LanguageSelector = () => {

    
    const { lang } = useSelector( state => state );
    const { availableLang, currentLang, isChecking }= lang
    const router = useRouter()
    
    const dispatch = useDispatch();

    const customLabels = useMemo(() => (
        availableLang.reduce( (acc, itemlist) => ({
            ...acc, 
            [itemlist]: itemlist
        }), {})
    ), [currentLang])

    const onSelect = (languageCode)=>{
        dispatch( startLangSelect_Action(languageCode) )
        const url = router.pathname.replace('[language]', languageCode.toLowerCase())
        router.replace(url)

    }

    return (
        <>
            <ReactFlagsSelect
                selected={currentLang}
                countries={availableLang}
                customLabels={ customLabels }
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
