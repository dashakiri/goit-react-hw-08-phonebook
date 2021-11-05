const getUsername = state => state.auth.user.name;

const getIsLoggedIn = state => state.auth.isLoggedIn;

const getIsFetchingCurrentUser = state => state.auth.isRefreshing;

const authSelectors = {
  getUsername,
  getIsLoggedIn,
  getIsFetchingCurrentUser,
};

export default authSelectors;
