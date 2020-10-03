const formGroup = document.querySelector('.form');
const email = document.getElementById('email');

formGroup.addEventListener('submit', (e) => {
  e.preventDefault();

  let emailValue = email.value.trim();

  let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (emailValue === '' || !emailValue.match(pattern)) {
    document.querySelector('.error-message').classList.remove('hidden');
    email.value = '';
  } else {
    document.querySelector('.error-message').classList.add('hidden');
    email.value = '';
  }
});
