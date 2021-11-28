
 const config = (getState, method, url, data = null) => {

  const token = getState().auth.token;

  const configs = {
    method: method,
    url: url,
    headers: {},
    data: data ? data : "",
  };

  if (token) {
    configs.headers["Authorization"] = `Bearer ${token}`
  }

  return configs
};


export default config