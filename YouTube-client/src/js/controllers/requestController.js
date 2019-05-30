import SearchRequest from '../requests/SearchRequest';

export default function runRequestController() {
  const input = document.getElementsByClassName('header__search-field__input_search')[0];
  const search = document.getElementsByClassName('header__search-field__button_submit')[0];
  const counter = document.getElementById('counter');
  const pageWidth = +getComputedStyle(document.body).width.slice(0, -2);
  search.addEventListener('click', () => {
    const previewSection = document.getElementsByClassName('main__video-preview')[0];
    previewSection.innerHTML = '';
    previewSection.scrollLeft = 0;
    counter.innerHTML = '1';
    const request = new SearchRequest(input.value);
    request.render();
    const observer = new MutationObserver(() => {
      switch (true) {
        case (pageWidth <= 425): {
          if ((+counter.innerHTML % 14) === 0) {
            request.render();
          }
          break;
        }
        case ((pageWidth > 425) && (pageWidth <= 768)): {
          if ((+counter.innerHTML % 7) === 0) {
            request.render();
          }
          break;
        }
        case ((pageWidth > 768) && (pageWidth <= 1024)): {
          if ((+counter.innerHTML % 4) === 0) {
            request.render();
          }
          break;
        }
        default: {
          request.render();
          break;
        }
      }
    });
    observer.observe(counter, { childList: true, characterData: true });
  });
}
