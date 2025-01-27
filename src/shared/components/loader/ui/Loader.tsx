import { FC } from "react";
import "./Loader.scss";

type LoaderProps = {}

export const Loader:FC<LoaderProps> = () => {
    return (

        <div className="lds-roller">
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>

    );
};
