import {LoginActions} from './types';

export const ChangeUserStatus = (isLogin : boolean, ) =>(
    {
        type : LoginActions.CHANGE_USER_STATUS,
        isLogin
    }
); 

export const SaveAccessToken = (accessToken : string ) =>(
    {
        type : LoginActions.SAVE_ACCESS_TOKEN,
        accessToken
    }
);

export const SaveRefreshToken = (refreshToken : string ) =>(
    {
        type : LoginActions.SAVE_REFRESH_TOKEN,
        refreshToken
    }
);

export const DeleteTokens = () =>(
    {
        type : LoginActions.DELETE_TOKENS
    }
);
