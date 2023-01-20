const form = document.querySelector("form");
const emailInput = document.querySelector('input[name="email"]');
const errorText = document.querySelector(".text-error");
const submitBtn = document.querySelector("#btn-submit");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = emailInput.value;

  if (!email) {
    // if email is empty
    errorText.classList.remove("hidden");
    submitBtn.setAttribute("disabled", true);
  } else if (!validateEmail(email)) {
    // if email is not valid
    errorText.classList.remove("hidden");
    submitBtn.setAttribute("disabled", true);
  } else {
    // if email is valid
    errorText.classList.add("hidden");
    submitBtn.removeAttribute("disabled");
    // submit the form
    form.submit();
  }
});

// Email validation function
function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
