import axios from "axios";

export const postRegistrationCredentials = (email: string, password: string, username:string, first_name:string, last_name:string) => {
    const body={
      email: email ,
      password: password,
      username: username,
      first_name: first_name,
      last_name: last_name
      }
  
    return axios.post( `${process.env.REACT_APP_API_URL}/api/registr/`,
       {
          method: "POST",
          headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
          body: JSON.stringify(body)
       }
    );
  };