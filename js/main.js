const menu = document.querySelector('.menu'),
      menuBar = document.querySelector('.menuBar'),
      close  = document.querySelector('.close');

menu.addEventListener('click', () => {
    menuBar.style.display = 'block';
});

close.addEventListener('click', () => {
    menuBar.style.display = 'none';
});

