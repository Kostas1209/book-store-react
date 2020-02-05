import { RootState } from "../rootReducer";

export interface Login{
    isLogin: boolean
}

export const initialState: Login  =
{
    isLogin: false
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

        default:
            return state;
    }
}

export const changeUserStatus = (state: RootState) => state.login;