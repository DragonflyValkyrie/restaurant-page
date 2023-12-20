import pancakes from './images/pancakes.jpg';

const loadIntroContent = (contentContainer) => {
    // Create Intro Container
    const introContainer = document.createElement("div");
    introContainer.classList.add("intro-container");

    // Create Intro Content
    const introContent = document.createElement("div");
    introContent.classList.add("intro-content");

    // Create Intro Title
    const introTitle = document.createElement("div");
    introTitle.classList.add("intro");
    introTitle.textContent = "Welcome to Maple Mountain Meals";

    // Create Intro Subtext
    const introSubtext = document.createElement("div");
    introSubtext.classList.add("subtext");
    introSubtext.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nulla ex labore illum, ea repellat quam, recusandae mollitia laudantium officia necessitatibus. Iusto consequatur magnam esse debitis pariatur deleniti similique obcaecati!";

    // Append Subtext to Intro Content
    introContent.appendChild(introTitle);
    introContent.appendChild(introSubtext);

    // Create Intro Image
    const introImage = document.createElement("img");
    introImage.classList.add("intro-image");
    introImage.src = pancakes;
    introImage.alt = "Pancakes covered with Maple Syrup";

    // Append Elements to Intro Container
    introContainer.appendChild(introContent);
    introContainer.appendChild(introImage);

    // Append Intro Container to Content Container
    contentContainer.appendChild(introContainer);

};

export { loadIntroContent };