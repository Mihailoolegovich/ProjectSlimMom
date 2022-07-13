const getLoggedOn = state => state.auth.isLoggedIn;

const getUserName = state => state.auth.user.name;

const getUserToken = state => state.auth.token;

const getLoading = state => state.auth.isLoading;

const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

export default { getLoggedOn, getUserName, getUserToken, getLoading, getIsFetchingCurrent };

// const getIsLoggedIn = state => state.auth.isLoggedIn;

// const getUsername = state => state.auth.user.name;

// const getIsFetchingCurrent = state => state.auth.isFetchingCurrentUser;

// const authSelectors = {
//   getIsLoggedIn,
//   getUsername,
//   getIsFetchingCurrent,
// };

// export default authSelectors;
