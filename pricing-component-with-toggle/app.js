const basicPrice = document.getElementById('basic');
const proPrice = document.getElementById('pro');
const masterPrice = document.getElementById('master');

const toggle = document.getElementById('toggle');

let annualSelected = true;

toggle.addEventListener('click', () => {
  annualSelected = !annualSelected;

  if (annualSelected) {
    basicPrice.innerHTML = '$199.99';
    proPrice.innerHTML = '$249.99';
    masterPrice.innerHTML = '$399.99';
  } else {
    basicPrice.innerHTML = '$19.99';
    proPrice.innerHTML = '$24.99';
    masterPrice.innerHTML = '$39.99';
  }
});
