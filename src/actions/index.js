export const displayLogin = (bool1, bool2) => {
  return {
    type: 'DISPLAY_LOGIN',
    isLoginDisplayed: bool1,
    isCreateDisplayed: bool2,
  }
}

export const createAccount = (email, bool) => {
  return {    
    type: 'CREATE_ACCOUNT',
    email,
    bool
  }
}
