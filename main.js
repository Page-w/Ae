

window.addEventListener('scroll', function() {
    const button = document.querySelector('.navbar1');
    const scrollPosition = window.scrollY;

// Sesuaikan nilai ini dengan posisi scroll yang diinginkan
    if (scrollPosition >= 400) { 
      button.style.opacity = 1;
    } else {
      button.style.opacity = 0;
    }
  });

  // fix up button

  const myButton = document.getElementById('myButton');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // User scrolled down
        myButton.classList.remove('show');
    } else {
        // User scrolled up
        myButton.classList.add('show');
    }

    lastScrollTop = scrollTop;
});
