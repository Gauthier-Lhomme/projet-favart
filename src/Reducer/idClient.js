const initialState = {
  idClient: 0,
};

export function idClientReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_ID":
      return { ...state, idClient: action.setId };
    case "UNSET_ID":
      return initialState;
    default:
      return state;
  }
}
