const navItems = document.querySelectorAll('.nav-item');

navItems.forEach(navItem => {
  navItem.addEventListener('click', () => {
    navItem.classList.toggle('opened');
  });
});
console.log(navItems);
