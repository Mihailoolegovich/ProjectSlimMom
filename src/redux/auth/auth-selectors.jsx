const getLoggedOn = state => state.auth.isLoggedIn;

const getUserEmail = state => state.auth.user.email;

const getUserToken = state => state.auth.token;

const getLoading = state => state.auth.isLoading;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  getLoggedOn,
  getUserEmail,
  getUserToken,
  getLoading,
  getIsFetchingCurrent,
};

export default authSelectors;
// const getIsLoggedIn = state => state.auth.isLoggedIn;

// const getUsername = state => state.auth.user.name;

// const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
//   getIsFetchingCurrent,
// };

// export default authSelectors;
