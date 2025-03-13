import { FC, useMemo, useState } from "react";
import { LangSwitcher } from "widgets/lang-switcher";
import { Button, ButtonSize, ButtonTheme } from "shared/components/button";
import { classNames } from "shared/lib/helpers/classNames";
import { useSelector } from "react-redux";
import { selectUserAuthData } from "entities/user";
import { ToggleThem } from "widgets/toggle-theme";
import cls from "./Sidebar.module.scss";
import { SidebarItem } from "../sidebar-item/SidebarItem";
import { sidebarItems } from "../../model/sidebarItems";

export const Sidebar: FC = () => {
    const [collapse, setCollapse] = useState(false);
    const userAuthData = useSelector(selectUserAuthData);

    const items = useMemo(() => sidebarItems.map((item) => {
        if (userAuthData) {
            return <SidebarItem key={item.routePath} item={item} isCollapse={collapse} />;
        }
        if (!item.authOnly) {
            return <SidebarItem key={item.routePath} item={item} isCollapse={collapse} />;
        }
        return null;
    }), [userAuthData, collapse]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsedSidebar]: collapse })}
        >
            <div className={cls.linksContainer}>
                {items}
            </div>
            <Button
                data-testid="sidebarBtn"
                square
                className={cls.collapseButton}
                theme={ButtonTheme.INVERTED_BACKGROUND}
                onClick={() => setCollapse((prev) => !prev)}
                size={ButtonSize.M}
            >
                {collapse ? ">" : "<"}
            </Button>
            <div className={cls.switchers}>
                <ToggleThem />
                <LangSwitcher shortLang={collapse} />
            </div>
        </div>
    );
};
