import { AppDispatch } from "app/providers/store-provider";
import { useDispatch } from "react-redux";

export const useAppDispatch = () => { return useDispatch<AppDispatch>(); };
