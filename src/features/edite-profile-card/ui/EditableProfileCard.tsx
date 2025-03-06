import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/components/button";
import { Text, TextThem } from "shared/components/text";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import {
    profileActions, ProfileCard, selectProfileError, selectProfileIsLoading,
} from "entities/profile";
import { useSelector } from "react-redux";
import { Currency } from "entities/currencies";
import { Country } from "entities/countries";
import cls from "./EditableProfileCard.module.scss";
import { selectProfileReadonly } from "../model/selectors/profile-readonly-selector/selectProfileReadonly";
import { updateProfileData } from "../services/update-profile-data/updateProfileData";
import { selectProfileFormData } from "../model/selectors/profile-form-selector/selectProfileFormData";
import { selectProfileValidateErrors } from "../model/selectors/profile-validate-errors/selectProfileValidateErrors";
import { validateErrorsObject } from "../lib/const/validateErrors";

export const EditableProfileCard:FC<{}> = () => {
    const { t } = useTranslation("profilePage");
    const dispatch = useAppDispatch();

    const profileReadonly = useSelector(selectProfileReadonly);
    const profileForm = useSelector(selectProfileFormData);
    const profileError = useSelector(selectProfileError);
    const isLoading = useSelector(selectProfileIsLoading);
    const validateErrors = useSelector(selectProfileValidateErrors);

    const validateErrorsList = useMemo(() => validateErrors?.map((error) => (
        <Text
            key={error}
            text={t(validateErrorsObject[error])}
            theme={TextThem.ERROR}
        />
    )), [validateErrors, t]);

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
    const handleChangeAvatar = (value: string) => {
        dispatch(profileActions.updateProfileForm({ avatar: value }));
    };
    const handleChangeUserName = (value: string) => {
        dispatch(profileActions.updateProfileForm({ username: value }));
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
            {validateErrorsList}
            <ProfileCard
                onChangeAvatar={handleChangeAvatar}
                onChangeUserName={handleChangeUserName}
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
