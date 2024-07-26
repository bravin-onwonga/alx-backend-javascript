export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    resolve(firstName);
  }).catch((err) => {
    return new Error;
  })
}