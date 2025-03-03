import { StateSchema } from "app/providers/store-provider";

export const selectProfileFormData = (state: StateSchema) => state.profile?.formData;
