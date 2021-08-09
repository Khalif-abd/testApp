let inState = {
  auth: false,
  accessToken: null,
  refreshToken: null,
  validToken: false
};

export function GetAuth(state = inState, action) {
  switch (action.type) {
    case "AUTH":
      return {
        ...state,
        auth: true,
        accessToken: action.payload.access,
        refreshToken: action.payload.refresh,
        validToken: true
      };
    case "EXIT":
      return {
        ...state,
        auth: false,
        accessToken: null,
        refreshToken: null,
        validToken: false
      };
    default:
      return state;
  }
}
