const initialState = {
  tokenClient: "0",
};

export function tokenClientReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_TOKEN":
      return { ...state, tokenClient: action.test };
    default:
      return state;
  }
}
