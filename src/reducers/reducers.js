export const displayLogin = (state={isLoginDisplayed: false, isCreateDisplayed: false}, action) => {
  switch(action.type) {
    case 'DISPLAY_LOGIN':
      return {isLoginDisplayed: action.isLoginDisplayed, isCreateDisplayed: action.isCreateDisplayed}

    default:
      return state
  }
}

// export const displayCreate  = (state=false, action) => {
//   switch(action.type) {
//     case 'DISPLAY_CREATE':
//       return action.isCreateDisplayed
//
//     default:
//       return state
//   }
// }
