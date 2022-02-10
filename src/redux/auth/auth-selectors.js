const getCurrentUser = state => state.auth.user;
const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrentUser = state => state.auth.isRefreshing;

const authSelectors = {
  getCurrentUser,
  getIsLoggedIn,
  getIsFetchingCurrentUser,
};

export default authSelectors;
