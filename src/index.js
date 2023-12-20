import './style.css';
import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';
import { loadIntroContent } from './intro.js';
import { loadMainContent } from './mainContent.js';


document.addEventListener('DOMContentLoaded', function() {
const contentContainer = document.getElementById("content");


loadHeader(contentContainer);
loadIntroContent(contentContainer);
loadMainContent(contentContainer);
loadFooter(contentContainer);


});