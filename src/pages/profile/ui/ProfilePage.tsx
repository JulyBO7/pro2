import { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { fetchProfileData, ProfileCard, profileReducer } from "entities/profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AsyncReducersLoader } from "shared/lib/components/AsyncReducersLoader";

const ProfilePage:FC<{}> = () => {
    const { t } = useTranslation("profilePage");
    const dispatch = useAppDispatch();

    const asyncReducers = {
        profile: profileReducer,
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <AsyncReducersLoader reducers={asyncReducers}>
            <div>{t("descriptionProfilePage")}</div>
            <ProfileCard />
        </AsyncReducersLoader>

    );
};
export default ProfilePage;
