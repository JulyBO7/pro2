import { Profile } from "entities/profile";
import { ProfileValidateErrors } from "../const/validateErrors";

export const validateProfileData = (profile?: Profile) => {
    const errors = [];
    const usernameRegex = /^[a-zA-ZА-Яа-я0-9_]+$/;
    if (!profile) {
        errors.push(ProfileValidateErrors.EMPTY_PROFILE);
    } else {
        if (!profile.age) {
            errors.push(ProfileValidateErrors.EMPTY_AGE);
        }
        if (!profile.first) {
            errors.push(ProfileValidateErrors.EMPTY_NAME);
        }
        if (!profile.lastname) {
            errors.push(ProfileValidateErrors.EMPTY_LAST_NAME);
        }
        if (profile.age && profile.age < 18) {
            errors.push(ProfileValidateErrors.SMALL_USER_AGE);
        }
        if (profile.first && profile.first.length > 15) {
            errors.push(ProfileValidateErrors.LONG_NAME_LENGTH);
        }
        if (profile.username && profile.username.length > 15) {
            errors.push(ProfileValidateErrors.LONG_USER_NAME_LENGTH);
        }
        if (profile.first && profile.first.length < 3) {
            errors.push(ProfileValidateErrors.SMALL_NAME_LENGTH);
        }
        if (profile.lastname && profile.lastname.length > 25) {
            errors.push(ProfileValidateErrors.LONG_LAST_NAME_LENGHT);
        }
        if (profile.lastname && profile.lastname.length < 2) {
            errors.push(ProfileValidateErrors.SMALL_LAST_NAME_LENGHT);
        }
        if (profile.lastname && !usernameRegex.test(profile.lastname)) {
            errors.push(ProfileValidateErrors.NOT_CORRECT_LAST_NAME);
        }
        if (profile.first && !usernameRegex.test(profile.first)) {
            errors.push(ProfileValidateErrors.NOT_CORRECT_NAME);
        }
    }

    return errors;
};
