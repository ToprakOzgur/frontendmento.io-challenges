const slider = document.getElementById('slider');
let theme = localStorage.getItem('theme');

slider.addEventListener('click', toggleTheme);
slider.checked = false;
if (theme === 'dark') {
  document.documentElement.setAttribute('data-theme', theme);
  slider.checked = true;
} else {
  slider.checked = false;
}

function toggleTheme(event) {
  console.log(theme);

  if (theme !== 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    theme = 'dark';
  } else {
    document.documentElement.removeAttribute('data-theme');
    localStorage.removeItem('theme');
    theme = undefined;
  }
}
