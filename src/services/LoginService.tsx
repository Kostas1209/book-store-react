export const postLoginCredentials = (email: string, password: string) => {
  const body={
    email: email ,
    password: password
    }

  return fetch( `${process.env.REACT_APP_API_URL}/api/login/`,
     {
        method: "POST",
        mode: "cors",
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(body)
     }
  );
};