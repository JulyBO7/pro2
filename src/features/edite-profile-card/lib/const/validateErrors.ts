export enum ProfileValidateErrors {
    SMALL_USER_AGE = "small user age",
    SMALL_USER_NAME_LENGTH = "small user name length",
    SMALL_NAME_LENGTH = "small name lenght",
    SMALL_LAST_NAME_LENGHT = "small last name length",

    LONG_USER_NAME_LENGTH = "long user name length",
    LONG_NAME_LENGTH = "long name lenght",
    LONG_LAST_NAME_LENGHT = "long last name length",

    EMPTY_NAME = "empty name",
    EMPTY_LAST_NAME = "empty last name",
    EMPTY_AGE = "empty age",

    NOT_CORRECT_NAME = "not correct name",
    NOT_CORRECT_LAST_NAME = "not correct last name",

    EMPTY_PROFILE = "empty profile"

}

export const validateErrorsObject = {
    [ProfileValidateErrors.EMPTY_AGE]: "enterYourAge",
    [ProfileValidateErrors.EMPTY_LAST_NAME]: "enterYourLastName",
    [ProfileValidateErrors.EMPTY_NAME]: "enterYourName",
    [ProfileValidateErrors.EMPTY_PROFILE]: "enterProfileFields",
    [ProfileValidateErrors.LONG_LAST_NAME_LENGHT]: "maxLenghtLastNameIs",
    [ProfileValidateErrors.LONG_NAME_LENGTH]: "maxLenghtNameIs",
    [ProfileValidateErrors.LONG_USER_NAME_LENGTH]: "maxLenghtUserNameIs",
    [ProfileValidateErrors.NOT_CORRECT_LAST_NAME]: "notCorrectLastName",
    [ProfileValidateErrors.NOT_CORRECT_NAME]: "notCorrectName",
    [ProfileValidateErrors.SMALL_LAST_NAME_LENGHT]: "smallLastNameLength",
    [ProfileValidateErrors.SMALL_NAME_LENGTH]: "smallNameLength",
    [ProfileValidateErrors.SMALL_USER_AGE]: "smallUserAge",
    [ProfileValidateErrors.SMALL_USER_NAME_LENGTH]: "smallUserNameLength",
};
