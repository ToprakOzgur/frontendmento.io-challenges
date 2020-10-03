const txtInfos = document.querySelectorAll('.txtInfo');
const personImgs = document.querySelectorAll('.person');
const prevBtn = document.querySelector('.personImg__prevBtn');
const nextBtn = document.querySelector('.personImg__nextBtn');

function change() {
  txtInfos.forEach((x) => x.classList.toggle('hidden'));
  personImgs.forEach((x) => x.classList.toggle('hidden'));
}

prevBtn.addEventListener('click', change);
nextBtn.addEventListener('click', change);
