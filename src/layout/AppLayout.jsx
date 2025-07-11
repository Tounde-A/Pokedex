import { Outlet } from "react-router";
import { Header } from "../components/Header";

export const AppLayout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
        </>
    );
}