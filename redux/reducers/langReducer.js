import { types } from "../types"

const initialState = {
    isChecking: true,
    currentLang: 'ES',
    availableLang: ['US','FR', 'ES', 'IT'],
    content: {}
}

export const langReducer = ( state= initialState,action) => {
    switch (action.type) {
        case types.lg_check:
            return {
                ...state,
                isChecking: false,
                currentLang: action.payload.currentLang,
                availableLang: action.payload.availableLang              
            };
        case types.lg_select:
            return {
                ...state,
                currentLang: action.payload.currentLang, 
                content: action.payload.content,           
            };   
        default:
            return state;
    }
}
