import axios from "axios";

export const getUserAvatar = (accessToken: string) => {
  
    return axios.get( `${process.env.REACT_APP_API_URL}/api/user_avatar/`,
       {
          method: "GET",
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
       }
    );
  };