AOS.init({
  once: true,
});

let active = false;
let colors;

document.querySelector('#heaven').addEventListener('click', () => {
  active = !active;
  if (active) {
    colors = setInterval(() => {
      document.body.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.body.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      document.querySelector('.container-img img').style.filter = 'saturate(50)';
    }, 500);
  } else {
    clearInterval(colors);
  }
});

const readingProgress = document.querySelector('#bar-progress-fill');

document.addEventListener('scroll', function (e) {
  let w =
    ((document.body.scrollTop || document.documentElement.scrollTop) /
      (document.documentElement.scrollHeight - document.documentElement.clientHeight)) *
    100;
  readingProgress.style.setProperty('width', w + '%');
});
