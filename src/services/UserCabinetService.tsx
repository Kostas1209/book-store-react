export const getUserInfo = (accessToken : string ) => 
{
    return fetch( `${process.env.REACT_APP_API_URL}/api/user_info/`,
        {
            method: "GET",
            mode: "cors",
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer  ' + accessToken
            }
        })
}