const initialState = {
  infosClient: {},
};

export function infosClientReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_INFOS":
      return { ...state, infosClient: action.setInfos };
    default:
      return state;
  }
}
