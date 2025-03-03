import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/components/button";
import { Text } from "shared/components/text";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import {
    profileActions, ProfileCard, selectProfileError, selectProfileIsLoading,
} from "entities/profile";
import { useSelector } from "react-redux";
import { Country, Currency } from "shared/const/common";
import cls from "./EditableProfileCard.module.scss";
import { selectProfileReadonly } from "../model/selectors/profile-readonly-selector/selectProfileReadonly";
import { updateProfileData } from "../services/update-profile-data/updateProfileData";
import { selectProfileFormData } from "../model/selectors/profile-form-selector/selectProfileFormData";

type EditableProfileCardProps={}

export const EditableProfileCard:FC<EditableProfileCardProps> = () => {
    const { t } = useTranslation("profilePage");
    const dispatch = useAppDispatch();

    const profileReadonly = useSelector(selectProfileReadonly);
    const profileForm = useSelector(selectProfileFormData);
    const profileError = useSelector(selectProfileError);
    const isLoading = useSelector(selectProfileIsLoading);

    const handleChangeFirstName = (value: string) => {
        dispatch(profileActions.updateProfileForm({ first: value }));
    };
    const handleChangeSecondName = (value: string) => {
        dispatch(profileActions.updateProfileForm({ lastname: value }));
    };
    const handleChangeAge = (value: string) => {
        dispatch(profileActions.updateProfileForm({ age: Number(value) }));
    };
    const handleChangeCity = (value: string) => {
        dispatch(profileActions.updateProfileForm({ city: value }));
    };
    const handleChangeCurrency = (value: string) => {
        dispatch(profileActions.updateProfileForm({ currency: value as Currency }));
    };
    const handleChangeCountry = (value: string) => {
        dispatch(profileActions.updateProfileForm({ country: value as Country }));
    };

    const handleClickEditBtn = () => {
        dispatch(profileActions.setReadonly(false));
    };
    const handleClickSaveBtn = () => {
        dispatch(updateProfileData());
    };
    const handleClickCancelBtn = () => {
        dispatch(profileActions.cancelChanges());
    };
    return (
        <div>
            <div className={cls.container}>
                <Text title={t("profile")} className={cls.textItem} />
                {profileReadonly ? <Button onClick={handleClickEditBtn} className={cls.button}>{t("edit")}</Button>
                    : (
                        <div>
                            <Button className={cls.buttonSave} onClick={handleClickSaveBtn}>{t("save")}</Button>
                            <Button
                                theme={ButtonTheme.OUTLINE_RED}
                                onClick={handleClickCancelBtn}
                            >
                                {t("cancel")}
                            </Button>
                        </div>
                    )}
            </div>
            <ProfileCard
                error={profileError}
                isLoading={isLoading}
                profile={profileForm}
                readonly={profileReadonly}
                onChangeFirstName={handleChangeFirstName}
                onChangeLastName={handleChangeSecondName}
                onChangeAge={handleChangeAge}
                onChangeCity={handleChangeCity}
                onChangeCountry={handleChangeCountry}
                onChangeCurrency={handleChangeCurrency}
            />

        </div>

    );
};
