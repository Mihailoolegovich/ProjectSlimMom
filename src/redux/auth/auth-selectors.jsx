export const getLoggedOn = state => state.auth.isLoggedOn;

export const getUserName = state => state.auth.user.login;

export const getUserToken = state => state.auth.token;

export const getLoading = state => state.auth.isLoading;

// export default { getLoggedOn, getUserName, getUserToken, getLoading };
