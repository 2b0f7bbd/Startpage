import Tabs from './tabs';
import Todo from './todo';
import clock from './clock';
import Weather from './weaher';

const tabs = new Tabs(document.querySelector('.container'));
tabs.init();

const todos = new Todo(document.querySelector('.container'));
todos.init();

const weather = new Weather(document.querySelector('.container'));
weather.init();

clock(document.querySelector('.container'));
setInterval(() => {
  clock(document.querySelector('.container'));
}, 60000);
