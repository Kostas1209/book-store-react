import { RootState } from "../rootReducer";
import { LoginActions } from './types';

export interface Login{
    isLogin: boolean,
    accessToken: string,
    refreshToken: string
}

export const initialState: Login  =
{
    isLogin: false,
    accessToken: "",
    refreshToken: ""
};

export function LoginReducer(state: Login = initialState, action : any)
{
    switch(action.type)
    {
        case LoginActions.CHANGE_USER_STATUS:
            {
                return {
                    ...state,
                    isLogin: action.isLogin
                }
            }
        case  LoginActions.SAVE_ACCESS_TOKEN:
            {
                return {
                    ...state,
                    accessToken: action.accessToken
                }
            }
        case  LoginActions.SAVE_REFRESH_TOKEN:
            {
                return {
                        ...state,
                        refreshToken: action.refreshToken
                    }
            }
        case  LoginActions.DELETE_TOKENS:
            {
                return{
                    ...state,
                    accessToken: "",
                    refreshToken: ""
                }
            }
        default:
            return state;
    }
}

export const changeUserStatus = (state: RootState) => state.login;