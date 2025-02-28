import { FC } from "react";
import { useSelector } from "react-redux";
import { Button } from "shared/components/button";
import { Text } from "shared/components/text";
import { selectProfileData } from "../../model/selectors/profile-data-selector/selectProfileData";
import cls from "./ProfileCard.module.scss";

type ProfileCardProps = {

}

export const ProfileCard:FC<ProfileCardProps> = ({}) => {
    const profile = useSelector(selectProfileData);

    return (
        <div className={cls.container}>
            <Text text={profile?.first} className={cls.textItem} />
            <Text text={profile?.lastname} className={cls.textItem} />

            <Button className={cls.button}>click me</Button>
        </div>
    );
};
