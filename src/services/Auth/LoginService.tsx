import axios from "axios";

export const postLoginCredentials = (email: string, password: string) => {

  return axios.post( `${process.env.REACT_APP_API_URL}/api/auth/login`,
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

export const LoginWithFaceBookService = () => {
  return axios.post(`${process.env.REACT_APP_API_URL}/api/auth/facebook`,
    {
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
    }
  );
}