const inState = {
    loading: false,
    data: []
}


export function GetSalons(state = inState, action) {
    switch (action.type) {
        case 'lOAD_SALONS':
            return {
                ...state,
                loading: true
            }

        case 'GET_SALONS':
            return {
                ...state,
                data: action.payload,
                loading: false
            }

        default:
            return state
    }
}

