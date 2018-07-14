const userReducer = (state = {}, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        id: action.id,
        name: action.name
      };
    case 'USER_SIGN_UP':
      return {
        id: action.id
      };
    default:
      return state;

  }
};

export default userReducer;