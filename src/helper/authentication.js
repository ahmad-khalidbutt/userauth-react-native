import AsyncStorage from '@react-native-community/async-storage';

const handleLogin = (username, password) => {
  let myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  let body = JSON.stringify({ username, password });

  let requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body,
  };

  return fetch('http://localhost:4000/users/authenticate', requestOptions)
    .then((response) => response.json())
    .then((result) => {
      AsyncStorage.setItem('auth_meta', JSON.stringify(result));
      return result;
    })
    .catch((err) => {
      return false;
    });
};

export { handleLogin };
