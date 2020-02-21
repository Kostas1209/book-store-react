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