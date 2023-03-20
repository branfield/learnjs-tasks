let list = document.querySelectorAll('li');
for (let li of list) {
  let item = li.firstChild.data;
  let count = li.getElementsByTagName('li').length;
  alert(`${item}: ${count}`);
}