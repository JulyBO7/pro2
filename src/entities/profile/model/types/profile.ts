import { Country } from "entities/countries";
import { Currency } from "entities/currencies";
import { ProfileValidateErrors } from "features/edite-profile-card";

export interface Profile {
    first?: string,
    lastname?:string,
    age?: number,
    currency?: Currency,
    country?:Country,
    city?: string,
    username?: string,
    avatar?: string
}
export interface ProfileSchema {
    data?: Profile
    formData?: Profile
    isLoading: boolean
    error?: string
    readonly: boolean
    validateErrors?:ProfileValidateErrors[]
}
