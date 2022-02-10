import { useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { authOperations, authSelectors} from "../../redux/auth";
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