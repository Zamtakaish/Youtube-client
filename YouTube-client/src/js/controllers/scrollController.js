export default function runEvents() {
  const counter = document.getElementById('counter');
  const scrollBack = document.getElementById('scroll-back');
  const scrollForward = document.getElementById('scroll-forward');

  scrollBack.addEventListener('click', () => {
    if (+counter.innerHTML > 1) {
      counter.innerHTML = (+counter.innerHTML - 1).toString();
    }
    if (+counter.innerHTML === 1) {
      scrollBack.style.opacity = 0;
    }
  });

  scrollForward.addEventListener('click', () => {
    counter.innerHTML = (+counter.innerHTML + 1).toString();
    scrollBack.style.opacity = 1;
  });
}
