import { types } from "../types"

const initialState = {
    isChecking: true,
    currentLang: 'ES',
    availableLang: ['US','FR', 'ES', 'IT']
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
        default:
            return state;
    }
}
