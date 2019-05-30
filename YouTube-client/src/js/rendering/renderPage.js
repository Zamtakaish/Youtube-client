import addNewElement from './addHtmlElement';

export default function renderPage() {
  // Header
  let parent = document.body;
  parent = addNewElement('header', 'header', parent);
  // Search field
  parent = addNewElement('section', 'header__search-field_wrapper', parent);
  parent = addNewElement('form', 'header__search-field', parent);
  // Submit button
  let newElement = addNewElement('div', 'header__search-field__button_submit', parent);
  // Search text field
  newElement = addNewElement('input', 'header__search-field__input_search', parent);
  newElement.setAttribute('type', 'text');
  newElement.setAttribute('name', 'search');

  // Main
  parent = document.body;
  parent = addNewElement('main', 'main', parent);

  // Video preview section
  parent = addNewElement('section', 'main__video-preview_wrapper', parent);
  parent = addNewElement('ul', 'main__video-preview', parent);

  // Scroll section
  parent = document.body.lastElementChild;
  parent = addNewElement('section', 'main__scroll_wrapper', parent);
  parent = addNewElement('ul', 'main__scroll', parent);
  newElement = addNewElement('img', 'main__scroll__item_button', addNewElement('li', 'main__scroll__item', parent, 'scroll-back'));
  newElement.setAttribute('src', './src/assets/images/arrow-left-solid.svg');
  newElement = addNewElement('div', 'main__scroll__item_counter', addNewElement('li', 'main__scroll__item', parent), 'counter');
  newElement.innerHTML = '1';
  newElement = addNewElement('img', 'main__scroll__item_button', addNewElement('li', 'main__scroll__item', parent, 'scroll-forward'));
  newElement.setAttribute('src', './src/assets/images/arrow-right-solid.svg');
}
