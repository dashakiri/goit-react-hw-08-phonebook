import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authSelectors } from "../../redux/auth";

export default function MainNav() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <nav>
            <NavLink to="/" exact>
                Home
            </NavLink>

            {isLoggedIn && (
                <>
                <NavLink to="/contacts" exact>
                    Contacts
                </NavLink>
                </>
            )}
        </nav>
    )
};