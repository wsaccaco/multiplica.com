let $list = document.getElementById('list');

function createListItems(quantity){
  let items = '';
  for(let i = 0; i <= quantity; i++){
    items += `<li class="item">item ${i}</li>`
  }
  return items;
}

$list.innerHTML = createListItems(6666);

function displayDate(e){
  let {target} = e;
  if(target.classList.contains('item')){
    target.innerHTML = new Date().toLocaleString();
    target.classList.remove('item');
  }
}

$list.addEventListener('click', displayDate, false);

