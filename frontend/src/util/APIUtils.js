import { API_BASE_URL, ACCESS_TOKEN } from "../constants";

const request = options => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });

  if (localStorage.getItem(ACCESS_TOKEN)) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }

  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function getCurrentUser() {
  if (!localStorage.getItem(ACCESS_TOKEN)) {
    return Promise.reject("No access token set.");
  }

  return request({
    // url: API_BASE_URL + "/user/me",
    url: API_BASE_URL + "/user/me",
    method: "GET",
  });
}

export function login(loginRequest) {
  return request({
    url: API_BASE_URL + "/auth/login",
    method: "POST",
    body: JSON.stringify(loginRequest),
  });
}

export function signup(signupRequest) {
  return request({
    url: API_BASE_URL + "/auth/signup",
    method: "POST",
    body: JSON.stringify(signupRequest),
  });
}

const houseRequest = options => {
  const headers = new Headers({
    "Content-Type": "application/json",
    "encoding": "euc-kr",
  });
  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function getHouse(searchParameter) {
  return houseRequest({
    url: API_BASE_URL + "/search/house",
    method: "POST",
    encoding: "euc-kr",
    body: JSON.stringify(searchParameter),
  });
}

const testRequest = options => {
  const headers = new Headers({
    "Content-Type": "application/json",
  });
  const defaults = { headers: headers };
  options = Object.assign({}, defaults, options);

  return fetch(options.url, options).then(response =>
    response.json().then(json => {
      if (!response.ok) {
        return Promise.reject(json);
      }
      return json;
    })
  );
};

export function test(searchParameter) {
  return testRequest({
    url: API_BASE_URL + "/sales/api/hello",
    method: "POST",
    
    body: JSON.stringify(searchParameter),
  });
}
