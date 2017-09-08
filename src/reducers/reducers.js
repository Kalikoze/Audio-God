export const displayLogin = (state=false, action) => {
  switch(action.type) {
    case 'DISPLAY_LOGIN':
      return action.isDisplayed

    default:
      return state
  }
}
