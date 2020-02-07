import { RootState } from "../rootReducer";

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
        case 'CHANGE_USER_STATUS':
            {
                return {
                    ...state,
                    isLogin: action.isLogin
                }
            }
        case 'SAVE_ACCESS_TOKEN':
            {
                return {
                    ...state,
                    accessToken: action.accessToken
                }
            }
        case 'SAVE_REFRESH_TOKEN':
            {
                return {
                        ...state,
                        refreshToken: action.refreshToken
                    }
            }
        case 'DELETE_TOKENS':
            {
                return{
                    initialState
                }
            }
        default:
            return state;
    }
}

export const changeUserStatus = (state: RootState) => state.login;