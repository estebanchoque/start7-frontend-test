export function validate(input) {
  const emailRegExp = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
  const passwordRegExp = new RegExp(
    /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
  );

  const errors = {};

  if (!input.username) {
    errors.username = "E-mail is required";
  } else if (!emailRegExp.test(input.username)) {
    errors.username = "Enter a valid e-mail";
  }
  if (!input.password) {
    errors.password = "Password is required";
  } else if (input.password.length < 8 || input.password.length > 16) {
    errors.password = "Password must contain between 8 to 16 characters";
  } else if (!passwordRegExp.test(input.password)) {
    errors.password =
      "Must contain capital and lower case letters, numbers and symbols";
  }

  return errors;
}
