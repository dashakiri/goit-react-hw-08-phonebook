import { StyledNavLink } from "./navigation.styled"

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