import { useSelector } from "react-redux";
import { authSelectors } from "../../redux/auth";
import { StyledNavLink } from "./navigation.styled";

export default function MainNav() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <nav>
            <StyledNavLink to="/" exact>
                Home
            </StyledNavLink>

            {isLoggedIn && (
                <>
                <StyledNavLink to="/contacts" exact>
                    Contacts
                </StyledNavLink>
                </>
            )}
        </nav>
    )
};