const { log } = console;

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const {
    elements: { email, password }
  } = e.currentTarget;

  if (!email.value || !password.value) {
    return alert("Please fill in all the fields!");
  }
  else {
      const userData = {
          email: email.value,
          password: password.value
      };
      log(userData);
    }
  e.currentTarget.reset();
}