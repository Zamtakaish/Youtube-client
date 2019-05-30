export default function runScrollController() {
  const counter = document.getElementById('counter');
  const scrollBack = document.getElementById('scroll-back');
  const scrollForward = document.getElementById('scroll-forward');
  const previewSection = document.getElementsByClassName('main__video-preview')[0];
  const previewSectionWidth = +(getComputedStyle(previewSection).width.slice(0, -2));

  scrollBack.addEventListener('click', () => {
    previewSection.scrollTo({ left: previewSection.scrollLeft - previewSectionWidth, behavior: 'smooth' });

    if (+counter.innerHTML > 1) {
      counter.innerHTML = (+counter.innerHTML - 1).toString();
    }
    if (+counter.innerHTML === 1) {
      scrollBack.style.opacity = 0;
    }
  });

  scrollForward.addEventListener('click', () => {
    previewSection.scrollTo({ left: previewSection.scrollLeft + previewSectionWidth, behavior: 'smooth' });
    counter.innerHTML = (+counter.innerHTML + 1).toString();
    scrollBack.style.opacity = 1;
  });
}
