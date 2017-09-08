export const displayLogin = (bool1, bool2) => {
  return {
    type: 'DISPLAY_LOGIN',
    isLoginDisplayed: bool1,
    isCreateDisplayed: bool2,
  }
}

// export const displayCreate = (bool) => {
//     return {
//       type: 'DISPLAY_CREATE',
//       isCreateDisplayed: bool
//     }
// }
