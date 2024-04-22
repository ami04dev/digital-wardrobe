let currentTopIndex = 1;
let currentBottomIndex = 1;
let outfitCount = 0;

function prevTop() {
  if (currentTopIndex > 1) {
    currentTopIndex--;
    document.querySelector('.top-image').src = `top${currentTopIndex}.jpg`;
  }
}

function nextTop() {
  const maxIndex = 8; // # of tops
  if (currentTopIndex < maxIndex) {
    currentTopIndex++;
    document.querySelector('.top-image').src = `top${currentTopIndex}.jpg`;
  }
}

function prevBottom() {
  if (currentBottomIndex > 1) {
    currentBottomIndex--;
    document.querySelector('.bottom-image').src = `bottom${currentBottomIndex}.jpg`;
  }
}

function nextBottom() {
  const maxIndex = 6; // # of bottoms
  if (currentBottomIndex < maxIndex) {
    currentBottomIndex++;
    document.querySelector('.bottom-image').src = `bottom${currentBottomIndex}.jpg`;
  }
}

function saveOutfit() {
  outfitCount++;
  const topImage = `top${currentTopIndex}.jpg`;
  const bottomImage = `bottom${currentBottomIndex}.jpg`;

  const outfitContainer = document.getElementById('outfits');
  const outfitElement = document.createElement('div');
  outfitElement.classList.add('outfit');
  outfitElement.innerHTML = `
    <h3>Outfit ${outfitCount}</h3>
    <img src="${topImage}" alt="Top">
    <img src="${bottomImage}" alt="Bottom">
  `;
  outfitContainer.appendChild(outfitElement);
}

function clearSavedOutfits() {
    const outfitContainer = document.getElementById('outfits');
    outfitContainer.innerHTML='';
    outfitCount=0;
}