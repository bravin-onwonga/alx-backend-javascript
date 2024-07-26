export default function signUpUser(firstName, lastName) {
  const myObj = {
    firstName,
    lastName,
  };
  return new Promise((resolve) => {
    resolve(myObj);
  });
}
