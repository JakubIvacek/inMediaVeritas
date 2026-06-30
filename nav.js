function toggleNav() {
  const menu = document.querySelector('.nav-menu');
  const btn = document.getElementById('navHamburger');
  menu.classList.toggle('open');
  btn.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const menu = document.querySelector('.nav-menu');
  const btn = document.getElementById('navHamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove('open');
    btn.classList.remove('open');
  }
});
