import { FC } from "react";
import { Loader } from "@/shared/components/loader";
import cls from "./PageLoader.module.scss";

type PageLoaderProps = {

}

export const PageLoader:FC<PageLoaderProps> = () => {
    return (
        <div className={cls.pageLoader}>
            <Loader />
        </div>
    );
};
