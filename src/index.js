import './style.css';
import { loadHeader } from './header.js';
import { loadFooter } from './footer.js';
import { loadIntroContent } from './intro.js';
import { loadMainContent } from './mainContent.js';
import { menuPage } from './menu.js';
import { aboutPage } from './about.js';
import { contactPage } from './contact.js';

const clearPage = () => (document.getElementById("content").innerHTML = "");
document.addEventListener('DOMContentLoaded', function() {
const contentContainer = document.getElementById("content");

loadHeader(contentContainer);
loadIntroContent(contentContainer);
loadMainContent(contentContainer);
loadFooter(contentContainer);


 // Add event listener to the content container
 contentContainer.addEventListener('click', function(event) {
    const target = event.target;

    if (target.tagName === 'A') {
        event.preventDefault();
        switch (target.textContent.trim()) {
            case 'Menu':
                clearPage();
                loadHeader(contentContainer);
                menuPage(contentContainer);
                loadFooter(contentContainer);
                break;
            case 'About Us':
                clearPage();
                loadHeader(contentContainer);
                aboutPage(contentContainer);
                loadFooter(contentContainer);
                break;
            case 'Contact Us':
                clearPage();
                loadHeader(contentContainer);
                contactPage(contentContainer);
                loadFooter(contentContainer);
                break;
            default:
                console.log("Link not recognized");
        }
    }
});

});