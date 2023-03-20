let menuElem = document.querySelector('.ul-list');
let titleElem = document.querySelector('.title');
console.log(menuElem);

titleElem.onclick = function () {
  menuElem.classList.toggle('open');
};