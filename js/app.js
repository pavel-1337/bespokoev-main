"use strict";

// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'


export const disableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = `${(window.innerWidth - vars.bodyEl.offsetWidth)}px`;

  vars.htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
  vars.bodyEl.style.paddingRight = paddingOffset;
  vars.bodyEl.classList.add('dis-scroll');
  vars.bodyEl.dataset.position = pagePosition;
  vars.bodyEl.style.top = `-${pagePosition}px`;
}

export const enableScroll = () => {
  const fixBlocks = document?.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(vars.bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => { el.style.paddingRight = '0px'; });
  vars.bodyEl.style.paddingRight = '0px';

  vars.bodyEl.style.top = 'auto';
  vars.bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  vars.bodyEl.removeAttribute('data-position');
  vars.htmlEl.style.scrollBehavior = 'smooth';
}


(function(){
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const menuItems = document?.querySelectorAll('[data-menu-item]');
    const overlay = document?.querySelector('[data-menu-overlay]');
  
    burger?.addEventListener('click', (e) => {
      burger?.classList.toggle('burger--active');
      menu?.classList.toggle('menu--active');
  
      if (menu?.classList.contains('menu--active')) {
        burger?.setAttribute('aria-expanded', 'true');
        burger?.setAttribute('aria-label', 'Закрыть меню');
        disableScroll();
      } else {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        enableScroll();
      }
    });
  
    overlay?.addEventListener('click', () => {
      burger?.setAttribute('aria-expanded', 'false');
      burger?.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('menu--active');
      enableScroll();
    });
  
    menuItems?.forEach(el => {
      el.addEventListener('click', () => {
        burger?.setAttribute('aria-expanded', 'false');
        burger?.setAttribute('aria-label', 'Открыть меню');
        burger.classList.remove('burger--active');
        menu.classList.remove('menu--active');
        enableScroll();
      });
    });
  })();



  let navs = document.querySelectorAll(".nav__link ");

  navs.forEach((nav) => {
      if (nav.href == window.location.href) {
          nav.classList.add("nav__link_active");
      }
  })