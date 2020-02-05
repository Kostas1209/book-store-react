
export interface UserBasket{
    isLogin: boolean
}

const initialState: User  =
{
    isLogin: false
};

export function UserBasketReducer(state: UserBasket = initialState, action : any)
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