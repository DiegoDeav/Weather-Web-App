import './style.css'
import Home from './pages/Home.js';

async function initApp() {
  const app = document.querySelector('#app');
  const homeContent = await Home();
  app.innerHTML = homeContent;
}

initApp();