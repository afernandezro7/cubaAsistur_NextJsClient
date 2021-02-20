/*************************************
*         [LANG]  ACTIONS            *
**************************************/

import { tempContent } from "../store/tempData";
import { types } from "../types"

/*
    MIDDLESWARE
*/
export const startLangChecking_Action = ()=>{
    return async(dispatch) =>{

        //TODO:fetch available
        const availableLang = ['US','FR', 'ES', 'IT'];
        const getCurrentLang = localStorage.getItem('currentLang') || 'ES';
        const currentLang = (availableLang.indexOf(getCurrentLang)===-1) ? 'ES' : getCurrentLang



        dispatch(langCheckingAction(currentLang,availableLang))
    }
}

export const startLangSelect_Action = (language)=>{
    return async(dispatch) =>{

        const currentLang = language;
        const content = {...tempContent};

        dispatch(langSelectAction(currentLang,content))
    }
}


/*
    ACTIONS
*/
const langCheckingAction = ( currentLang, availableLang)=>{
    return{
        type: types.authLogin,
        payload: {
            currentLang,
            availableLang
        }
    }
}

const langSelectAction = ( currentLang, content)=>{
    return{
        type: types.lg_select,
        payload: {
            currentLang,
            content
        }
    }
}