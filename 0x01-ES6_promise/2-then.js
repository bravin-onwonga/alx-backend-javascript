export default function handleResponseFromAPI(promise) {
  return promise
    .then((success) => ({ status: 200, body: success }))
    .catch((err) => new Error(err));
}

console.log('Got a response from the API');
