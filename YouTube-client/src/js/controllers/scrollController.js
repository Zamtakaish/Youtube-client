export default function runScrollController() {
  const counter = document.getElementById('counter');
  const scrollBack = document.getElementById('scroll-back');
  const scrollForward = document.getElementById('scroll-forward');
  const previewSection = document.getElementsByClassName('main__video-preview')[0];
  const previewSectionWidth = +(getComputedStyle(previewSection).width.slice(0, -2));
  const tooltip = document.getElementsByClassName('main__scroll__item_button_tooltip');

  scrollBack.addEventListener('mousedown', () => {
    tooltip[0].style.opacity = 1;
    tooltip[0].style.visibility = 'visible';
  });
  scrollBack.addEventListener('click', () => {
    previewSection.scrollTo({ left: previewSection.scrollLeft - previewSectionWidth, behavior: 'smooth' });
    if (+counter.innerHTML > 1) {
      counter.innerHTML = (+counter.innerHTML - 1).toString();

      tooltip[0].innerHTML = (+tooltip[0].innerHTML - 1).toString();
      tooltip[1].innerHTML = (+tooltip[1].innerHTML - 1).toString();
    }
    if (+counter.innerHTML === 1) {
      scrollBack.style.opacity = 0;
    }
    tooltip[0].style.opacity = 0;
    tooltip[0].style.visibility = 'none';
  });

  scrollForward.addEventListener('mousedown', () => {
    tooltip[1].style.opacity = 1;
    tooltip[1].style.visibility = 'visible';
  });
  scrollForward.addEventListener('click', () => {
    previewSection.scrollTo({ left: previewSection.scrollLeft + previewSectionWidth, behavior: 'smooth' });
    counter.innerHTML = (+counter.innerHTML + 1).toString();
    scrollBack.style.opacity = 1;
    tooltip[1].style.opacity = 0;
    tooltip[1].style.visibility = 'none';
    tooltip[0].innerHTML = (+tooltip[0].innerHTML + 1).toString();
    tooltip[1].innerHTML = (+tooltip[1].innerHTML + 1).toString();
  });
}
