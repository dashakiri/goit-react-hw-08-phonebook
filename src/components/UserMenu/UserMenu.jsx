import { useDispatch, useSelector } from "react-redux";
import { authOperations, authSelectors } from "../../redux/auth";
import { UserMenuContainer, UserMenuInfo } from "./UserMenu.styled";

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUsername);
    
    return (
        <UserMenuContainer>
            <UserMenuInfo>Welcome, {name}</UserMenuInfo>
            <button type='button' onClick={() => dispatch(authOperations.logOut())}>
                Logout
            </button>
        </UserMenuContainer>
    )
}