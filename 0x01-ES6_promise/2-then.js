export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise.then((success) => {
      resolve({ status: 200, body: success });
    }).catch(() => {
      reject(new Error());
    }).finally(() => {
      console.log('Got a response from the API');
    })
  });
}
