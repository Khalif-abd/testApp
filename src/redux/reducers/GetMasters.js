const inState = {
    loading: false,
    data: []
}


export function GetMasters(state = inState, action) {
    switch (action.type) {
        case 'lOAD_MASTERS':
            return {
                ...state,
                loading: true
            }

        case 'GET_MASTERS':
            return {
                ...state,
                data: action.payload,
                loading: false
            }

        default:
            return state
    }
}

