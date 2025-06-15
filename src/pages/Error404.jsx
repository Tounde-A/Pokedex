import { Link } from "react-router";
import { ROUTES } from "../config/routes";

export const Error404 = () => {
    return (
        <>
            <h1>Error 404</h1>
            <span>
                This page doesn't exist
                <Link to={ROUTES.HOME}>Go to Home</Link>
            </span>
        </>
    );
}