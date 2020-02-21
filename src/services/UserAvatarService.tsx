import axios from "axios";

export const getUserAvatar = () => {
  
    return axios.get( `${process.env.REACT_APP_API_URL}/api/user/avatar`,
       {
          method: "GET",
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json',
            },
       }
    );
  };