import { FC } from "react";
import { AppLink, AppLinkTheme } from "shared/components/app-link";
import { classNames } from "shared/lib/helpers/classNames";
import { useTranslation } from "react-i18next";
import { Item } from "widgets/sidebar/model/sidebarItems";
import cls from "./SidebarItem.module.scss";

type SidebarItemProps = {
    item: Item
    isCollapse: boolean
    className?: string
}

export const SidebarItem:FC<SidebarItemProps> = ({ item, isCollapse, className }) => {
    const { t } = useTranslation();
    return (
        <div>
            <AppLink
                to={item.routePath}
                theme={AppLinkTheme.INVERTED_PRIMARY}
                className={classNames(cls.appLink, { [cls.collapsed]: isCollapse }, [className])}
            >
                <item.Icon className={cls.lincIcon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        </div>

    );
};
