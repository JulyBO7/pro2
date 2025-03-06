import { FC, useEffect } from "react";
import {
    fetchProfileData, profileReducer,

} from "entities/profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AsyncReducersLoader } from "shared/lib/components/AsyncReducersLoader";
import {
    EditableProfileCard,
} from "features/edite-profile-card";

const ProfilePage:FC<{}> = () => {
    const dispatch = useAppDispatch();
    const asyncReducers = {
        profile: profileReducer,
    };

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <AsyncReducersLoader reducers={asyncReducers}>
            <EditableProfileCard />
        </AsyncReducersLoader>

    );
};
export default ProfilePage;
