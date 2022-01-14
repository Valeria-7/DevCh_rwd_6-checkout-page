const formButton = document.querySelector('.form-button');
const inputs = document.querySelectorAll('.form-input');

formButton.addEventListener('click', () => {
  let count = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value == "") count++;
  }
  if (count == 0) 
  alert("Thank you! Your data was successfully sent");
})