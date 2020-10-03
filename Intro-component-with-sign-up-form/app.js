const submitBtn = document.querySelector('.btn');
const inputs = document.querySelectorAll('input');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  inputs.forEach((input) => validate(input));
});

function validate(input) {
  if (input.value === '') {
    input.parentNode.querySelector('p').classList.remove('hidden');
    input.parentNode.querySelector('img').classList.remove('hidden');
  } else {
    input.parentNode.querySelector('p').classList.add('hidden');
    input.parentNode.querySelector('img').classList.add('hidden');
  }

  if (input.type === 'email') {
    let emailValue = input.value.trim();

    let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailValue.match(pattern)) {
      input.parentNode.querySelector('p').classList.remove('hidden');
      input.parentNode.querySelector('img').classList.remove('hidden');
    } else {
      input.parentNode.querySelector('p').classList.add('hidden');
      input.parentNode.querySelector('img').classList.add('hidden');
    }
  }
}
