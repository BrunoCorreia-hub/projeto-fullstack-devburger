import { Container, Menu, MenuLink, ExitButton } from './style';
import Logo from '../../assets/Logo.svg';
import { NavLinks } from './NavLinks';
import { useNavigate, useResolvedPath } from 'react-router-dom';
import { ExitToAppSharp } from '@mui/icons-material';
import { useUser } from '../../hooks/UserContext';
import { toast } from 'react-toastify';

export function SideNavAdmin() {
    const { logOut } = useUser();
    const navigate = useNavigate();

    const { pathname } = useResolvedPath();

    return (
        <Container>
            <div>
            <div>
                <img src={Logo} />
            </div>
            <Menu>
                {NavLinks.map((link) => (
                    <MenuLink 
                    key={link.id} 
                    $isActive={link.path === pathname}
                    to={link.path}>
                        {link.icon}
                        {link.label}
                    </MenuLink>
                ))}
            </Menu>
            </div>
            <ExitButton
            onClick={() => (
                logOut(),
                navigate('/login'),
                toast.success('Administrador deslogado, faça login para continuar')
            )}
            ><ExitToAppSharp />Sair</ExitButton>
        </Container>
    )
};