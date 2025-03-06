import { Profile } from "entities/profile";
import { ProfileValidateErrors } from "../const/validateErrors";
import { validateProfileData } from "./validateProfileData";

describe("validate profile data tests", () => {
    const profile = {
        first: "JUl",
        lastname: "Ivanov",
        age: 18,
        username: "user",
    };
    test("invalid first name", async () => {
        const profileForm: DeepPartial<Profile> = {
            ...profile,
            first: "@JUl",
        };
        const result = [ProfileValidateErrors.NOT_CORRECT_NAME];
        expect(validateProfileData(profileForm)).toEqual(result);
    });
    test("invalid last name", async () => {
        const profileForm: DeepPartial<Profile> = {
            ...profile,
            lastname: "&Ivanov",
        };
        const result = [ProfileValidateErrors.NOT_CORRECT_LAST_NAME];
        expect(validateProfileData(profileForm)).toEqual(result);
    });
    test("small user age", async () => {
        const profileForm: DeepPartial<Profile> = {
            ...profile,
            age: 12,
        };
        const result = [ProfileValidateErrors.SMALL_USER_AGE];
        expect(validateProfileData(profileForm)).toEqual(result);
    });
    test("empty name", async () => {
        const profileForm: DeepPartial<Profile> = {
            ...profile,
            first: "",
        };
        const result = [ProfileValidateErrors.EMPTY_NAME];
        expect(validateProfileData(profileForm)).toEqual(result);
    });
    test("empty last name", async () => {
        const profileForm: DeepPartial<Profile> = {
            ...profile,
            lastname: "",
        };
        const result = [ProfileValidateErrors.EMPTY_LAST_NAME];
        expect(validateProfileData(profileForm)).toEqual(result);
    });
    test("empty profile", async () => {
        const result = [ProfileValidateErrors.EMPTY_PROFILE];
        expect(validateProfileData()).toEqual(result);
    });
    test("long lastname", async () => {
        const profileForm: DeepPartial<Profile> = {
            ...profile,
            lastname: "jdslfjlksdfkljsdfdsjflksjdflkjdsfdsklfdsfdsfdfsf",
        };
        const result = [ProfileValidateErrors.LONG_LAST_NAME_LENGHT];
        expect(validateProfileData(profileForm)).toEqual(result);
    });
    test("long first name", async () => {
        const profileForm: DeepPartial<Profile> = {
            ...profile,
            first: "jdslfjlksdfkljsdfdsjflksjdflkjdsfdsklfdsfdsfdfsf",
        };
        const result = [ProfileValidateErrors.LONG_NAME_LENGTH];
        expect(validateProfileData(profileForm)).toEqual(result);
    });
    test("long user name", async () => {
        const profileForm: DeepPartial<Profile> = {
            ...profile,
            username: "jdslfjlksdfkljsdfdsjflksjdflkjdsfdsklfdsfdsfdfsf",
        };
        const result = [ProfileValidateErrors.LONG_USER_NAME_LENGTH];
        expect(validateProfileData(profileForm)).toEqual(result);
    });
});
