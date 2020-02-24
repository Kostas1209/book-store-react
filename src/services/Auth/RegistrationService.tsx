import axios from "axios";

export const postRegistrationCredentials = (email: string, password: string, username:string, first_name:string, last_name:string) => {
    return axios.post( `${process.env.REACT_APP_API_URL}/api/auth/registration/`,
       {
          method: "POST",
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            email: email ,
            password: password,
            username: username,
            firstName: first_name,
            lastName: last_name
       }
    );
  };