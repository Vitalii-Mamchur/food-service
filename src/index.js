import menu from '../menu.json';
import css from './styles.css';

//console.log(menu);

const menuContainer = document.querySelector('.js-menu');
const menuItem = createMenu(menu);
//console.log(menuItem);
function createMenu(el) { 
  return el.map(el => {
    return `
    <li class='menu__item'>
      <article class='card'>
      <img src='${el.image}'
        alt='${el.name}'
        class='card__image'
      />
        <div class='card__content'>
          <h2 class='card__name'>${el.name}</h2>
          <p class='card__price'>
            <i class='material-icons'>monetization_on</i>
            ${el.price} кредитов
          </p>

          <p class='card__descr'>
            ${el.description}
          </p>

          <ul class='tag-list'>
            <li class='tag-list__item'></li>
          </ul>
        </div>

        <button class='card__button button'>
          <i class='material-icons button__icon'>shopping_cart</i>
          В корзину
        </button>
      </article>
    </li>
    `;
  }).join('');
}

menuContainer.insertAdjacentHTML('afterbegin', menuItem);

const switchToggle = document.querySelector('#theme-switch-toggle');

switchToggle.addEventListener('change', choiceTheme);

const bod = document.querySelector('body');

function choiceTheme(){ 
  bod.classList.add('dark-theme');
}