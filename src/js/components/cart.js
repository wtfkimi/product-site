const cartBtn = document.querySelector('.cart__btn');
const miniCart = document.querySelector('.mini-cart');


let price = 0;
const productBtn = document.querySelectorAll('.product__btn');
console.log(productBtn);

cartBtn.addEventListener('click', () => {
  miniCart.classList.add('mini-cart--visible');
});

document.addEventListener('click', (e) => {
  console.log(e.target)
  if (!e.target.classList.contains('mini-cart') && !e.target.classList.contains('cart__btn')) {
    miniCart.classList.remove('mini-cart--visible');
  }
});



