
export const postCredentials = (email: string, password: string) => {
  const body={
    email: email ,
    password: password
    }

  return fetch('http://localhost:8000/api/login/',
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