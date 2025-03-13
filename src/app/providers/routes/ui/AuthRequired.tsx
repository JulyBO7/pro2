import { selectUserAuthData } from "entities/user";
import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { AppRoutes } from "shared/config/route-config/router";

export const AuthRequired:FC = ({ children }) => {
    const userAuthData = useSelector(selectUserAuthData);
    const location = useLocation();

    if (!userAuthData) {
        return (
            <Navigate to={AppRoutes.MAIN} state={{ from: location }} />
        );
    }

    return (
        <>
            { children }
        </>
    );
};
