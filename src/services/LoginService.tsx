import axios from "axios";

export const postLoginCredentials = (email: string, password: string) => {

  return axios.post( `${process.env.REACT_APP_API_URL}/api/login/`,
     {
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        "email" : email,
        "password" : password
     }
  );
};