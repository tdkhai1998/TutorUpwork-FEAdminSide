// đăng ký thành công hay chưa ?
export const isAddNewAdminSucceed = (state = false, action) => {
  switch (action.type) {
    case 'ADD_NEW_ADMIN_SUCCEED': {
      return true;
    }
    default:
      return state;
  }
};

export const isLogin = (state = false, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCEED': {
      return true;
    }
    default:
      return state;
  }
};
