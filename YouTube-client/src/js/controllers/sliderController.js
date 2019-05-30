export default function runSliderController() {
  const previewSection = document.getElementsByClassName('main__video-preview')[0];
  let mouseDownPosition;
  let mouseCurrentPosition = null;
  let scrollStartPosition;
  const counter = document.getElementById('counter');
  const scrollBack = document.getElementById('scroll-back');
  previewSection.addEventListener('mousedown', (event) => {
    mouseDownPosition = event.pageX;
    mouseCurrentPosition = mouseDownPosition;
    previewSection.classList.add('active');
    scrollStartPosition = previewSection.scrollLeft;
  });
  previewSection.addEventListener('mousemove', (event) => {
    event.preventDefault();
    if (previewSection.classList.contains('active')) {
      mouseCurrentPosition = event.pageX;
      previewSection.scrollLeft = scrollStartPosition - (mouseCurrentPosition - mouseDownPosition);
    }
  });
  previewSection.addEventListener('mouseleave', () => {
    if (previewSection.classList.contains('active')) {
      previewSection.classList.remove('active');
      previewSection.scrollTo({ left: scrollStartPosition, behavior: 'smooth' });
    }
  });
  previewSection.addEventListener('mouseup', () => {
    const moveDistance = mouseCurrentPosition - mouseDownPosition;
    const previewSectionWidth = +(getComputedStyle(previewSection).width.slice(0, -2));

    if (Math.abs(moveDistance) >= (previewSectionWidth * 0.1)) {
      if (moveDistance < 0) {
        previewSection.scrollTo({ left: scrollStartPosition + previewSectionWidth, behavior: 'smooth' });

        counter.innerHTML = (+counter.innerHTML + 1).toString();
      } else if (+counter.innerHTML > 1) {
        previewSection.scrollTo({ left: scrollStartPosition - previewSectionWidth, behavior: 'smooth' });

        counter.innerHTML = (+counter.innerHTML - 1).toString();
      }
      if (+counter.innerHTML === 1) {
        scrollBack.style.opacity = 0;
      } else {
        scrollBack.style.opacity = 1;
      }
    } else if (scrollStartPosition || (moveDistance < 0)) {
      previewSection.scrollTo({ left: scrollStartPosition, behavior: 'smooth' });
    }
    previewSection.classList.remove('active');
  });
  document.body.onresize = () => {
    const previewSectionWidth = +(getComputedStyle(previewSection).width.slice(0, -2));
    previewSection.scrollLeft = previewSectionWidth * (+counter.innerHTML - 1);
  };
}
