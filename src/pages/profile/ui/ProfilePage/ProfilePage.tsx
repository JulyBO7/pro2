import { FC, useEffect } from "react";
import {
    fetchProfileData, profileReducer,

} from "entities/profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AsyncReducersLoader } from "shared/lib/components/AsyncReducersLoader";
import {
    EditableProfileCard,
} from "features/edite-profile-card";
// import { Country, Currency } from "shared/const/common";

const ProfilePage:FC<{}> = () => {
    const dispatch = useAppDispatch();
    // const profile = useSelector(selectProfileData);
    // const profileForm = useSelector(selectProfileFormData);
    // const profileError = useSelector(selectProfileError);
    // const isLoading = useSelector(selectProfileIsLoading);

    // const profileReadonly = useSelector(selectProfileReadonly);

    // const handleChangeFirstName = (value: string) => {
    //     dispatch(profileActions.updateProfileForm({ first: value }));
    // };
    // const handleChangeSecondName = (value: string) => {
    //     dispatch(profileActions.updateProfileForm({ lastname: value }));
    // };
    // const handleChangeAge = (value: string) => {
    //     dispatch(profileActions.updateProfileForm({ age: Number(value) }));
    // };
    // const handleChangeCity = (value: string) => {
    //     dispatch(profileActions.updateProfileForm({ city: value }));
    // };
    // const handleChangeCurrency = (value: string) => {
    //     dispatch(profileActions.updateProfileForm({ currency: value as Currency }));
    // };
    // const handleChangeCountry = (value: string) => {
    //     dispatch(profileActions.updateProfileForm({ country: value as Country }));
    // };

    const asyncReducers = {
        profile: profileReducer,
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <AsyncReducersLoader reducers={asyncReducers}>
            {/* <ProfileHeader /> */}
            <EditableProfileCard />
            {/* <ProfileCard
                onChangeCountry={handleChangeCurrency}
                onChangeCurrency={handleChangeCountry}
                error={profileError}
                isLoading={isLoading}
                profile={profileForm}
                readonly={profileReadonly}
                onChangeFirstName={handleChangeFirstName}
                onChangeLastName={handleChangeSecondName}
                onChangeAge={handleChangeAge}
                onChangeCity={handleChangeCity}
            /> */}
        </AsyncReducersLoader>

    );
};
export default ProfilePage;
