import SearchRequest from '../requests/SearchRequest';

export default function runRequestController() {
  const input = document.getElementsByClassName('header__search-field__input_search')[0];
  const search = document.getElementsByClassName('header__search-field__button_submit_wrapper')[0];
  const counter = document.getElementById('counter');
  const pageWidth = +getComputedStyle(document.body).width.slice(0, -2);
  let prevPage = 0;
  search.addEventListener('click', () => {
    const previewSection = document.getElementsByClassName('main__video-preview')[0];
    previewSection.innerHTML = '';
    previewSection.scrollLeft = 0;
    counter.innerHTML = '1';
    const request = new SearchRequest(input.value);
    request.render();
    document.getElementsByClassName('main__scroll_wrapper')[0].removeAttribute('hidden');
    const observer = new MutationObserver(() => {
      switch (true) {
        case (pageWidth <= 425): {
          if (((+counter.innerHTML % 14) === 0) && (+counter.innerHTML > prevPage)) {
            request.render();
            prevPage = +counter.innerHTML;
          }
          break;
        }
        case ((pageWidth > 425) && (pageWidth <= 768)): {
          if (((+counter.innerHTML % 7) === 0) && (+counter.innerHTML > prevPage)) {
            request.render();
            prevPage = +counter.innerHTML;
          }
          break;
        }
        case ((pageWidth > 768) && (pageWidth <= 1024)): {
          if (((+counter.innerHTML % 4) === 0) && (+counter.innerHTML > prevPage)) {
            request.render();
            prevPage = +counter.innerHTML;
          }
          break;
        }
        case (pageWidth > 1024): {
          if (((+counter.innerHTML % 3) === 0) && (+counter.innerHTML > prevPage)) {
            request.render();
            prevPage = +counter.innerHTML;
          }
          break;
        }
        default: {
          break;
        }
      }
    });
    observer.observe(counter, { childList: true, characterData: true });
  });
}
