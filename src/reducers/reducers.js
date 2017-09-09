export const displayLogin = (state={isLoginDisplayed: false, isCreateDisplayed: false}, action) => {
  switch(action.type) {
    case 'DISPLAY_LOGIN':
      return {isLoginDisplayed: action.isLoginDisplayed, isCreateDisplayed: action.isCreateDisplayed}

    default:
      return state
  }
}

export const loginEval = (state={email: '', bool: false, error: ''}, action) => {
  switch(action.type) {
    case 'CREATE_ACCOUNT':
      return {user: action.email, bool: action.bool, error: action.error}

    default:
      return state
  }
}
