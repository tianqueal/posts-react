export const ajax = async ({ url, method = 'GET', body, headers = {} }) =>
  fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: JSON.stringify(body),
  });
