import { FC } from "react";
import "./Loader.scss";
import { classNames } from "shared/lib/helpers/classNames";

type LoaderProps = {
}

export const Loader:FC<LoaderProps> = () => (

    <div className={classNames("lds-roller")}>
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
