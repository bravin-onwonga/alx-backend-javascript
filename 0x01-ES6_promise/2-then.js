export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    promise.then((success) => {
      console.log('Got a response from the API');
      resolve({ status: 200, body: success });
    }).catch(() => {
      reject(new Error());
    });
  });
}
