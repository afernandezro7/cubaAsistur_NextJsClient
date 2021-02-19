/*************************************
*         [LANG]  ACTIONS            *
**************************************/

import { types } from "../types"

/*
    MIDDLESWARE
*/
export const startLangCheckingAction = ()=>{
    return async(dispatch) =>{

        //TODO:fetch available
        const availableLang = ['US','FR', 'ES', 'IT'];
        const getCurrentLang = localStorage.getItem('currentLang') || 'ES';
        const currentLang = (availableLang.indexOf(getCurrentLang)===-1) ? 'ES' : getCurrentLang



        dispatch(langCheckingAction(currentLang,availableLang))
    }
}

/*
    ACTIONS
*/
const langCheckingAction = ( currentLang, listOfLang)=>{
    return{
        type: types.authLogin,
        payload: {
            currentLang:currentLangm,
            availableLang:listOfLang
        }
    }
}