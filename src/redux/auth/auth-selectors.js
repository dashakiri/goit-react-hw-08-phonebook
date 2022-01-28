const getIsLoggedIn = state => state.auth.isLoggedIn;
const getIsFetchingCurrentUser = state => state.auth.isRefreshing;

const authSelectors = {
  getIsLoggedIn,
  getIsFetchingCurrentUser,
};

export default authSelectors;
