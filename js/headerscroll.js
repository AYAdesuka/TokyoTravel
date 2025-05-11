document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const headerInner = document.querySelector('.header__inner');
  const introSection = document.querySelector('.intro');
  const introHeight = introSection.offsetHeight;
  function checkScroll() {
    if (window.scrollY > introHeight) {
      header.classList.add('--scroll');
      headerInner.classList.add('--scroll');
    } else {
      header.classList.remove('--scroll');
      headerInner.classList.remove('--scroll');
    }
  };

  checkScroll();
  
  let isScrolling;
  window.addEventListener('scroll', function() {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(checkScroll, 1);
  }, { passive: true });
});