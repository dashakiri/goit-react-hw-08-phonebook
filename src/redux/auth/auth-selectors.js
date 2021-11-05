const getUsername = state => state.auth.user.name;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingCurrentUser = state => state.auth.isRefreshing;

const getToken = state => state.auth.token;

const authSelectors = {
  getUsername,
  getIsLoggedIn,
  getIsFetchingCurrentUser,
  getToken,
};

export default authSelectors;
