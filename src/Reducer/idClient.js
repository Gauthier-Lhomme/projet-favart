const initialState = {
    idClient: 0,
};

export function idClientReducer(state = initialState, action) {
    switch (action.type) {
        case "SET_ID":
            return {...state, idClient: action.test };
        default:
            return state;
    }
}