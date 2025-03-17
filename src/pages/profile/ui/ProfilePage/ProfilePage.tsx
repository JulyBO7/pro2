import { FC, useEffect } from "react";
import { fetchProfileData, profileReducer } from "entities/profile";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { AsyncReducersLoader } from "shared/lib/components/AsyncReducersLoader";
import { EditableProfileCard } from "features/edite-profile-card";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserAuthData } from "entities/user";

const asyncReducers = {
    profile: profileReducer,
};

const ProfilePage:FC<{}> = () => {
    const dispatch = useAppDispatch();
    let { id } = useParams();
    const authData = useSelector(selectUserAuthData);

    if (!id) {
        id = String(authData?.id);
    }

    useEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    }, [dispatch, id]);

    return (
        <AsyncReducersLoader reducers={asyncReducers}>
            <EditableProfileCard />
        </AsyncReducersLoader>

    );
};
export default ProfilePage;
