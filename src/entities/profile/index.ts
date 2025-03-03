export type { Profile, ProfileSchema } from "./model/types/profile";
export { profileReducer } from "./model/slice/profileSlice";
export { selectProfileData } from "./model/selectors/profile-data-selector/selectProfileData";
export { profileActions } from "./model/slice/profileSlice";
export { selectProfileIsLoading } from "./model/selectors/profile-loading-selector/selectProfileIsLoading";
export { selectProfileError } from "./model/selectors/profile-error-selector/selectProfileError";

export { fetchProfileData } from "./services/fetch-profile-data/fetchProfileData";
export { ProfileCard } from "./ui/profile-card/ProfileCard";
