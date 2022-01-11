import {useSelector} from 'react-redux';
import { authSelectors } from '../../redux/auth';
import MainNav from '../Navigation/MainNav';
import AuthNav from '../Navigation/AuthNav';
import UserMenu from '../UserMenu/UserMenu'; 
import {Header} from './AppBar.styled';

export default function AppBar () {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <Header>
            <MainNav/>
            {isLoggedIn ? <UserMenu/> : <AuthNav/>}
        </Header>
    );
};