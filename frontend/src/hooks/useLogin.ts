import React from "react";

export default function useLogin(email: string, password: string) {
  /**
   * example endpoint
   *
   * localhost:8080/login?email=root@pelikanholidays.com&password=root
   */

  const URL = `localhost:8080/login?email=${email}&password=${password}`;

  const [loggedUser, setLoggedUser] = React.useState();

  const loginRequest = async () => {
      const response = await fetch(URL);
      const data = await response.json();
      setLoggedUser(data);
  }

  return loggedUser;  
}
