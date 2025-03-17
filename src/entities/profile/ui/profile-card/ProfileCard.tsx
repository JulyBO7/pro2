import { FC } from "react";
import { Input, InputTheme } from "shared/components/input";
import { useTranslation } from "react-i18next";
import { Loader } from "shared/components/loader";
import { TextThem, Text } from "shared/components/text";
import { Avatar } from "shared/components/avatar/ui/Avatar";
import profileImage from "shared/assets/images/defaultAvatar.png";
import { Country } from "entities/countries";
import { Currency } from "entities/currencies";
import cls from "./ProfileCard.module.scss";
import { Profile } from "../../model/types/profile";
import { Select } from "../../../../shared/components/select/ui/Select";

type ProfileCardProps = {
    profile?: Profile
    readonly?: boolean
    error?: string
    isLoading?: boolean
    onChangeFirstName?: (value: string)=> void
    onChangeLastName?: (value: string)=> void
    onChangeAge?: (value: string)=> void
    onChangeCity?: (value: string)=> void
    onChangeCountry?: (value: string)=> void
    onChangeCurrency?: (value: string)=> void
    onChangeAvatar?:(value: string)=> void
    onChangeUserName?:(value: string)=> void
}

const countries = [
    { value: Country.Armenia, text: Country.Armenia },
    { value: Country.Belarus, text: Country.Belarus },
    { value: Country.Kazakhstan, text: Country.Kazakhstan },
    { value: Country.Russia, text: Country.Russia },
    { value: Country.Ukraine, text: Country.Ukraine },
];
const currencies = [
    { value: Currency.EUR, text: Currency.EUR },
    { value: Currency.RUB, text: Currency.RUB },
    { value: Currency.USD, text: Currency.USD },
];

export const ProfileCard:FC<ProfileCardProps> = (props) => {
    const {
        profile,
        readonly,
        error,
        isLoading,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeCity,
        onChangeCountry,
        onChangeCurrency,
        onChangeAvatar,
        onChangeUserName,
    } = props;

    const { t } = useTranslation("profilePage");

    if (isLoading) {
        return (
            <div className={cls.container}>
                <div className={cls.loaderWrap}>
                    <Loader />
                </div>
            </div>
        );
    }
    if (error) {
        return (
            <div className={cls.container}>
                <div className={cls.errorWrap}>
                    <Text className={cls.error} title={error} theme={TextThem.ERROR} />
                </div>
            </div>
        );
    }
    return (
        <div className={cls.container}>
            <div className={cls.avatarWrapper}>
                <Avatar alt={t("profile")} src={profile?.avatar || profileImage} className={cls.avatar} />
            </div>
            <Input
                placeholder={String(t("name"))}
                theme={InputTheme.CLEAR}
                caret
                readOnly={readonly}
                value={profile?.first}
                onChange={onChangeFirstName}
            />
            <Input
                placeholder={String(t("lastName"))}
                theme={InputTheme.CLEAR}
                caret
                readOnly={readonly}
                value={profile?.lastname}
                onChange={onChangeLastName}
            />
            <Input
                placeholder={String(t("age"))}
                theme={InputTheme.CLEAR}
                caret
                readOnly={readonly}
                value={profile?.age}
                onChange={onChangeAge}
            />
            <Input
                placeholder={String(t("city"))}
                theme={InputTheme.CLEAR}
                caret
                readOnly={readonly}
                value={profile?.city}
                onChange={onChangeCity}
            />
            <Input
                placeholder={String(t("enterUserName"))}
                theme={InputTheme.CLEAR}
                caret
                readOnly={readonly}
                value={profile?.username}
                onChange={onChangeUserName}
            />
            <Input
                placeholder={String(t("enterRefOnAvatar"))}
                theme={InputTheme.CLEAR}
                caret
                readOnly={readonly}
                value={profile?.avatar}
                onChange={onChangeAvatar}
            />
            <Select
                onChange={onChangeCountry}
                className={cls.selector}
                options={countries}
                label={t("choiceCountry")}
                disabled={readonly}
                value={profile?.country}
            />
            <Select
                onChange={onChangeCurrency}
                className={cls.selector}
                options={currencies}
                label={t("choiceCurrency")}
                disabled={readonly}
                value={profile?.currency}
            />

        </div>
    );
};
