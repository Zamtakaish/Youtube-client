import addNewElement from './addHtmlElement';
import renderScroll from './renderScroll';

export default function renderPage() {
  // Header
  let parent = document.body;
  parent = addNewElement('header', 'header', parent);
  // Search field
  parent = addNewElement('section', 'header__search-field', parent);
  // Submit button
  let newElement = addNewElement('img', 'header__search-field__button_submit', addNewElement('button', 'header__search-field__button_submit_wrapper', parent));
  newElement.setAttribute('src', './src/assets/images/search.svg');
  // Search text field
  newElement = addNewElement('input', 'header__search-field__input_search', parent);
  newElement.setAttribute('type', 'text');
  newElement.setAttribute('name', 'search');
  newElement.setAttribute('placeholder', 'What are you looking for?');

  // Main
  parent = document.body;
  parent = addNewElement('main', 'main', parent);

  // Video preview section
  parent = addNewElement('section', 'main__video-preview_wrapper', parent);
  parent = addNewElement('ul', 'main__video-preview', parent);

  // Scroll section
  renderScroll();
}
