import './style.css';

document.addEventListener('DOMContentLoaded', function() {
const content = document.getElementById("content");

// Header container creatation
const headerContainer = document.createElement("div");
headerContainer.classList.add("header-container");
const titleElement = document.createElement("h1");
titleElement.textContent = "Maple Mountain Meals";

// Navigation links
let headerLinks = document.createElement('ul');
headerLinks.classList.add('header-links');

// List of links
let links = ["Menu", "About Us", "Contact Us"];

// Loop through the header links to make them list items with anchor tags
for (let i = 0; i < links.length; i++) {
    let li = document.createElement("li");  
    let a = document.createElement("a");

    a.textContent = links[i];
    a.href = "#";

    li.appendChild(a);
    headerLinks.appendChild(li);
}

// Append links to header container
headerContainer.appendChild(titleElement);
headerContainer.appendChild(headerLinks);

// Create Intro Container
const introContainer = document.createElement("div");
introContainer.classList.add("intro-container");

// Create Intro Content
const introContent = document.createElement("div");
introContent.classList.add("intro");
introContent.textContent = "Welcome to Maple Mountain Meals";

// Create Intro Subtext
const introSubtext = document.createElement("div");
introSubtext.classList.add("subtext");
introSubtext.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla ex labore illum, ea repellat quam, recusandae mollitia laudantium officia necessitatibus. Iusto consequatur magnam esse debitis pariatur deleniti similique obcaecati!";

// Append Subtext to Intro Content
introContent.appendChild(introSubtext);

// Create Intro Image
const introImage = document.createElement("img");
introImage.classList.add("intro-image");
introImage.src = "/path/to/your/image.jpg";
introImage.alt = "Pancakes covered with Maple Syrup";

// Append Elements to Intro Container
introContainer.appendChild(introContent);
introContainer.appendChild(introImage);

// Main container creation
const mainContainer = document.createElement("div");
mainContainer.classList.add("main-container");

// Array of information objects
const infoData = [
    { 
        imagePath: "", 
        altText: "Maple Leaf", 
        textContent: "Every dish, a tribute to Canada's rich heritage." 
    },
    { 
        imagePath: "", 
        altText: "Mountains", 
        textContent: "A taste of Canada's majestic landscapes, on a plate." 
    },
    { 
        imagePath: "", 
        altText: "Hot water in mug", 
        textContent: "Hospitality as warm as a Canadian embrace." 
    },
    { 
        imagePath: "", 
        altText: "Heart", 
        textContent: "Where quality meets passion in every dish." 
    }
];

// Loop through the infoData array to create info divs
infoData.forEach(data => {
    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");

    const imgElement = document.createElement("img");
    imgElement.classList.add("info-image", "image-text");
    imgElement.src = data.imagePath;
    imgElement.alt = data.altText;

    const textDiv = document.createElement("div");
    textDiv.classList.add("text");
    textDiv.textContent = data.textContent;

    infoDiv.appendChild(imgElement);
    infoDiv.appendChild(textDiv);

    mainContainer.appendChild(infoDiv);
});

// Footer container creation
const footerContainer = document.createElement("div");
footerContainer.classList.add("footer");
footerContainer.textContent = "DragonflyValkyrie's Maple Mountain Meals 2023";


// Append the elements to the webpage
content.appendChild(headerContainer);
content.appendChild(introContainer);
content.appendChild(mainContainer);
content.appendChild(footerContainer);

});