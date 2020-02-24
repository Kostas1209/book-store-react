import axios from "axios";

export const getUserInfo = (accessToken : string ) => 
{
    return axios.get( `${process.env.REACT_APP_API_URL}/api/user/me`,
        {
            method: "GET",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            }
        })
}

export const changeUserInfo = (param: any) => 
{
    return axios.put( `${process.env.REACT_APP_API_URL}/api/user/me`,
    {
        method: "PUT",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
            firstName: param.first_name,
            LastName: param.last_name,
            avatar: param.avatar
    })
}