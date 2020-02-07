

export const ChangeUserStatus = (isLogin : boolean, ) =>(
    {
        type : "CHANGE_USER_STATUS",
        isLogin
    }
); 

export const SaveAccessToken = (accessToken : string ) =>(
    {
        type : "SAVE_ACCESS_TOKEN",
        accessToken
    }
);

export const SaveRefreshToken = (refreshToken : string ) =>(
    {
        type : "SAVE_REFRESH_TOKEN",
        refreshToken
    }
);

export const DeleteTokens = () =>(
    {
        type : "DELETE_TOKENS"
    }
);
