const aboutPage = (contentContainer) => {

    // Create the main container for the About page
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    // Create container for the title and subtitle
    const aboutTitleContainer = document.createElement("div");
    aboutTitleContainer.classList.add("about-titles");

    // Create and set the main title for the About page
    const aboutTitle = document.createElement("h1");
    aboutTitle.textContent = "About Us";

    // Create and set the subtitle for the About page
    const aboutSubTitle = document.createElement("h3");
    aboutSubTitle.textContent = "Proudly Canadian serving Canadians since 1986";
   
    // Create container for the paragraphs of the About content
    const parAboutContainer = document.createElement("div");
    parAboutContainer.classList.add("about-para");

    // Create individual paragraphs and set their content
    const p1 = document.createElement("p");
    p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...";

    const p2 = document.createElement("p");
    p2.textContent = "Nam rutrum varius tincidunt. ...";

    const p3 = document.createElement("p");
    p3.textContent = "Integer non enim turpis. ...";

    const p4 = document.createElement("p");
    p4.textContent = "Praesent vel lobortis velit. ...";

    const p5 = document.createElement("p");
    p5.textContent = "Sed interdum lorem maximus vehicula ultrices. ...";

    // Append titles to their container
    aboutTitleContainer.appendChild(aboutTitle);
    aboutTitleContainer.appendChild(aboutSubTitle);

    // Append paragraphs to the container for About content
    parAboutContainer.appendChild(p1);
    parAboutContainer.appendChild(p2);
    parAboutContainer.appendChild(p3);
    parAboutContainer.appendChild(p4);
    parAboutContainer.appendChild(p5);

    // Append title container and content container to the main About container
    aboutContainer.appendChild(aboutTitleContainer);
    aboutContainer.appendChild(parAboutContainer);

    // Append the main About container to the content container of the page
    contentContainer.appendChild(aboutContainer);
};

export { aboutPage };
