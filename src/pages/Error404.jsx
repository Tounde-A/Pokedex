import { Link } from "react-router";
import { ROUTES } from "../config/routes";
import s from "../components/pokedex.module.css"
import { useState } from "react";

export const Error404 = () => {

    const [hovered, setHovered] = useState(false);

    return (
        <div className={ s.error404 }>
            <h1 className={ hovered ? s.titleHovered : '' }>Error 404</h1>
            <span className={ hovered ? s.textHovered : '' }>
                This page doesn't exist
                <Link to={ROUTES.HOME}
                    className={ hovered ? s.linkHovered : '' }
                    onMouseEnter={ () => setHovered(true) }
                    onMouseLeave={ () => setHovered(false) }
                >Go to Home</Link>
                <span className={ s.errorBG }></span>
            </span>
        </div>
    );
}