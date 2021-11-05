import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    
    return (
        <div>
            <span>Welcome, {name}</span>
            <button type='button' onClick={() => dispatch(authOperations.logOut())}>
                Logout
            </button>
        </div>
    )
}