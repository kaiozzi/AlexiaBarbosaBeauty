const menuButton = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('#main-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  mainNav?.classList.toggle('is-open', !open);
});

mainNav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  mainNav.classList.remove('is-open');
}));

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelectorAll('[data-gallery-slot]').forEach((slot) => {
  const image = slot.querySelector('img');
  const placeholder = slot.querySelector('.gallery-placeholder');
  image.addEventListener('error', () => {
    image.hidden = true;
    placeholder.style.display = 'flex';
  }, { once: true });
});
