import theme from './js/theme.js'
import menu from '../menu.json'
import createMenu from '../templates/food-list.hbs'
import css from './styles.css'

const Handlebars = require('handlebars');
const menuContainer = document.querySelector('.js-menu');
const menuItem = createMenu(menu);
menuContainer.insertAdjacentHTML('afterbegin', menuItem);