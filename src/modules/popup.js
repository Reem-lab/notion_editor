let flag = false;

const addPopup = (currentInput) => {
  if (flag) return;
  const popupHtml = `
  <div class="popup">
    <div class="popup__header">
      <h4>Basic Blocks</h4>
    </div>
    <div class="popup__list" role="listitem">
    <h1>Heading1....</h1>
    </div>
  </div>`;

  currentInput.insertAdjacentHTML('afterend', popupHtml);
  flag = true;
};

const removePopup = () => {
  const popup = document.querySelector('.popup');
  if (popup) {
    popup.remove();
    flag = false;
  }
};

export { addPopup, removePopup };
