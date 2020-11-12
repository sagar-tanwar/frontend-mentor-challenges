function handleValidation(event) {
  const form = event.target;
  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    if(input.hasAttribute('required')) {
      if(input.validity.valueMissing) {
        event.preventDefault();
        input.parentNode.parentNode.classList.add('feedback');
        input.parentNode.nextElementSibling.textContent = `${input.dataset.name} cannot be empty.`;
      } else {
        if(input.getAttribute('type') === 'email') {
          if(!input.validity.valid) {
            event.preventDefault();
            console.log(input.validity.valid);
            input.parentNode.parentNode.classList.add('feedback');
            input.parentNode.nextElementSibling.textContent = 'Looks like this is not an email.';
          }
        }
      }
    }
    
  })
}

const signupForm = document.querySelector('#signup');
const inputs = signupForm.querySelectorAll('input');
inputs.forEach(input => {
  input.addEventListener('input', () => {
    input.parentNode.parentNode.classList.remove('feedback');
    input.parentNode.nextElementSibling.textContent = '';
  });
});
signupForm.addEventListener('submit', handleValidation);


/*
  - Validate on form submission
  - Show Custom Validation Feedback
    - Grab all inputs
    - Check if input has required attribute if yes, check validity
    - Check if the input type is email, if yes check if it validates the email constraint
  - Normal state for the input in focus
*/