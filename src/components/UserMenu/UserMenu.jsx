import { useDispatch} from "react-redux";
import { authOperations} from "../../redux/auth";
import { UserMenuContainer} from "./UserMenu.styled";

export default function UserMenu() {
    const dispatch = useDispatch();

    return (
        <UserMenuContainer>
            <button type='button' onClick={() => dispatch(authOperations.logOut())}>
                Logout
            </button>
        </UserMenuContainer>
    )
}