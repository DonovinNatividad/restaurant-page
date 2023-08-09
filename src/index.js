import './styles.css';
import Icon from './pizza.png';


const mainDiv = document.getElementById('content');

const header = document.createElement('h1');
header.textContent = "Papa's Pizzaeria";

mainDiv.appendChild(header);

const container = document.createElement('div');
container.classList += 'container';
const menu = document.createElement('div');
menu.classList += 'menu';

const menuTitle = document.createElement('h2');
menuTitle.classList += 'menuTitle';
menuTitle.textContent = 'Menu';

const ul = document.createElement('ul');

const Pizza = new Image(100, 100);
Pizza.src = Icon;

const pizzaItem = document.createElement('h1');
pizzaItem.innerText = '$25.99 Great Potbelly Pizza Pie';

const item = document.createElement('div');
item.classList += 'item';
item.appendChild(Pizza);
item.appendChild(pizzaItem);
ul.appendChild(item);

const hours = document.createElement('li');
hours.innerText = 'Open all days from 12pm - 6pm';
ul.appendChild(hours);




menu.appendChild(menuTitle);
menu.appendChild(ul);
container.append(menu);
mainDiv.appendChild(container);
