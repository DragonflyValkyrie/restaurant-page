import tea from './images/hot-pour.jpg';
import kitchen from './images/kitchen.jpg';
import mapleLeaf from './images/maple-leaf.jpg';
import mountain from './images/mountain.jpg';

const loadMainContent = (contentContainer) => {
    // Main container creation
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main-container");

    // Array of information objects
    const infoData = [
        { 
            imageSrc: mapleLeaf, 
            altText: "Maple Leaf", 
            textContent: "Every dish, a tribute to Canada's rich heritage." 
        },
        { 
            imageSrc: mountain, 
            altText: "Mountains", 
            textContent: "A taste of Canada's majestic landscapes, on a plate." 
        },
        { 
            imageSrc: tea, 
            altText: "Hot water in mug", 
            textContent: "Hospitality as warm as a Canadian embrace." 
        },
        { 
            imageSrc: kitchen, 
            altText: "kitchen", 
            textContent: "Where quality meets passion in every dish." 
        }
    ];

    // Loop through the infoData array to create info divs
    infoData.forEach(data => {
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info");

        const imgElement = document.createElement("img");
        imgElement.classList.add("info-image", "image-text");
        imgElement.src = data.imageSrc;
        imgElement.alt = data.altText;

        const textDiv = document.createElement("div");
        textDiv.classList.add("text");
        textDiv.textContent = data.textContent;

        infoDiv.appendChild(imgElement);
        infoDiv.appendChild(textDiv);

        mainContainer.appendChild(infoDiv);
    });

    // Append Intro Container to Content Container
    contentContainer.appendChild(mainContainer);

};

export { loadMainContent };