// 장바구니!
const basketStaterEl = document.querySelector('header .basket-starter');
const basketEl = basketStaterEl.querySelector('.basket');

basketStaterEl.addEventListener('click', function (event){
  event.stopPropagation();
  if(basketEl.classList.contains('show')){
    hideBasket();
  }else{
    showBasket();
  }
})

basketEl.addEventListener('click', function (event){
  event.stopPropagation();
})

window.addEventListener('click', hideBasket)

function showBasket(){
  basketEl.classList.add('show');
}
function hideBasket(){
  basketEl.classList.remove('show');
}

//검색
const headerEl = document.querySelector('header');
const searchWraoEl = headerEl.querySelector('.search-wrap');
const searchStarterEl = headerEl.querySelector('.search-starter');
const searchCloserEl = headerEl.querySelector('.search-closer')
const searchShadowEl = headerEl.querySelector('.shadow')
searchStarterEl.addEventListener('click', showSearch)
searchCloserEl.addEventListener('click', hideSearch)
searchShadowEl.addEventListener('click', hideSearch)
function showSearch(){
  headerEl.classList.add('searching');
  document.documentElement.classList.add('fixed')
}
function hideSearch(){
  headerEl.classList.remove('searching');
  document.documentElement.classList.remove('fixed')
}