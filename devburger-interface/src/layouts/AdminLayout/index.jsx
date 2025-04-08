import { Navigate, Outlet } from "react-router-dom";
import { SideNavAdmin } from "../../components";
import { Container } from './style';

export function AdminLayout() {
    const { admin } = JSON.parse(localStorage.getItem('devburger:userData'));

    return admin ? (
        <Container>
            <SideNavAdmin />
            <main>
                <section>
                    <Outlet />
                </section>
            </main>
        </Container>
    ) : (<Navigate to='/login' />)
}