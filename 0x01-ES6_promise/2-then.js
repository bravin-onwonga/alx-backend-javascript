export default function handleResponseFromAPI(promise) {
  return promise
  .then((success) => {
    return ({ status: 200, body: success });
  })
  .catch((err) => {
    return (new Error(err));
  })
  .finally(() => {
    console.log('Got a response from the API');
  });
}