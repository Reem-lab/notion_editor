import { addPopup, removePopup } from './popup.js';

const addHeader = (currentInput, currentId) => {
  const newInput = document.createElement('div');
  newInput.classList.add('input');
  newInput.setAttribute('contenteditable', true);
  newInput.setAttribute('spellcheck', true);
  newInput.setAttribute('placeholder', "Type '/' for blocks");
  newInput.setAttribute('id', `${Number(currentId) + 1}`);

  currentInput.insertAdjacentElement('afterend', newInput);
  newInput.focus();

  return newInput;
};

const addH1tag = (input, tagType) => {
  input.className = 'input';
  input.classList.add(tagType);
  input.textContent = input.textContent.slice(2).trim();
  input.setAttribute('placeholder', `Heading ${tagType}`);
  input.focus();
  removePopup();
};

const handleInput = (input = document.getElementById('heading')) => {
  // If the first character is /, show the popup, else remove it
  input.addEventListener('input', () => {
    if (input.textContent[0] === '/') {
      addPopup(input);
    } else {
      removePopup();
    }
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const text = input.textContent;

      if (text[0] === '/' && text[1] === '1') addH1tag(input, 'h1');
      if (text === '') input.removeAttribute('placeholder');
      const newInput = addHeader(input, input.id);
      handleInput(newInput);
    }
  });
};

export default handleInput;
