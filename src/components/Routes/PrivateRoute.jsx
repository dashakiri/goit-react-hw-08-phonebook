import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { authSelectors } from "../../redux/auth";

export default function PrivateRoute ({children, redirectTo='/', ...routeProps}) {
    const idLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <Route {...routeProps}>
            {idLoggedIn ? children : <Redirect to={redirectTo}/>}
        </Route>
    )
};