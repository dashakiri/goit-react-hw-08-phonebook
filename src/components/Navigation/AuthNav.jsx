import { StyledNavLink } from "./Navigation.styled"

export default function AuthNav() {
    return (
       <div>
        <StyledNavLink to="/login" exact>
            Login
        </StyledNavLink>
        <StyledNavLink to="/register" exact>
            Register
        </StyledNavLink>
       </div>
    )
};