const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const menu = document.querySelector<HTMLDialogElement>('#mobile-menu');
const header = document.querySelector<HTMLElement>('.header');

if (menuButton && menu && typeof menu.showModal === 'function') {
  menuButton.hidden = false;
  const closeMenu = () => menu.close();
  menuButton.addEventListener('click', () => {
    if (menu.open) { closeMenu(); return; }
    menu.showModal();
    document.body.classList.add('menu-is-open');
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'メニューを閉じる');
  });
  menu.querySelector('.menu-close')?.addEventListener('click', closeMenu);
  menu.querySelectorAll<HTMLAnchorElement>('a').forEach(link => link.addEventListener('click', closeMenu));
  menu.addEventListener('click', event => {
    const rect = menu.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) closeMenu();
  });
  menu.addEventListener('close', () => {
    document.body.classList.remove('menu-is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'メニューを開く');
  });
  window.matchMedia('(min-width: 1101px)').addEventListener('change', event => {
    if (event.matches && menu.open) closeMenu();
  });
}

if (header) {
  let queued = false;
  const updateHeader = () => { header.classList.toggle('is-scrolled', window.scrollY > 24); queued = false; };
  updateHeader();
  window.addEventListener('scroll', () => {
    if (!queued) { queued = true; window.requestAnimationFrame(updateHeader); }
  }, { passive: true });
}
