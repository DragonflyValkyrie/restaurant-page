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
    p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec scelerisque sem, quis ultricies lorem. Sed sollicitudin, ipsum eget viverra laoreet, orci tellus blandit sem, nec facilisis mi dui at risus. Fusce volutpat ornare semper. Aenean egestas efficitur sem, ut ullamcorper eros vestibulum a. Aliquam at lacus sit amet nisi egestas hendrerit ut vel enim. Donec semper dolor sapien, sit amet feugiat massa egestas quis. Vivamus justo purus, imperdiet non urna sit amet, eleifend consectetur odio. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum sed neque odio. Praesent luctus pulvinar ligula vel porta. Maecenas vel volutpat nibh. Nullam auctor in elit non malesuada.";

    const p2 = document.createElement("p");
    p2.textContent = "Nam rutrum varius tincidunt. Donec dapibus mauris nisl, dictum mattis orci finibus eget. Nullam a pellentesque augue. Vivamus feugiat augue tellus, vitae rhoncus quam interdum interdum. Nunc imperdiet finibus volutpat. In efficitur vehicula ex, sit amet accumsan quam fermentum quis. Phasellus leo ante, elementum a nisl vitae, vulputate porttitor tortor. In sed tincidunt tellus.";

    const p3 = document.createElement("p");
    p3.textContent = "Integer non enim turpis. In non efficitur nunc, at efficitur magna. Donec ut justo auctor, venenatis urna ac, luctus tortor. Nullam vel porttitor arcu, euismod sagittis mauris. Fusce vehicula sem lorem, at mattis massa vestibulum at. Etiam diam elit, auctor non lobortis ut, vehicula eu erat. Suspendisse potenti. Nam laoreet risus eu metus varius luctus. Nunc vestibulum blandit ante, in rhoncus erat maximus ut. Quisque egestas, mauris elementum luctus vestibulum, odio metus auctor arcu, nec ornare lorem odio ac turpis. Pellentesque eleifend pellentesque libero et efficitur. Cras vel faucibus augue, non tempor metus. Nunc tincidunt, metus ut vulputate venenatis, dui tellus faucibus odio, at fringilla est quam nec nisl. Mauris tortor ipsum, vulputate quis sem a, blandit porta est.";

    const p4 = document.createElement("p");
    p4.textContent = "Praesent vel lobortis velit. Mauris lobortis blandit libero, eget facilisis diam tempor et. Nulla non ultricies purus, in sollicitudin leo. Vestibulum non augue nec urna varius commodo eu a tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eget consectetur eros. Phasellus a arcu nisl. Donec euismod maximus purus, sit amet maximus erat.";

    const p5 = document.createElement("p");
    p5.textContent = "Sed interdum lorem maximus vehicula ultrices. Nam nisl ligula, faucibus sit amet bibendum semper, tempor eget nisl. Phasellus dui urna, posuere ac maximus vitae, elementum in leo. Phasellus posuere convallis mauris sit amet varius. Fusce scelerisque sem varius nulla porttitor, eget aliquam felis mattis. Ut eu vulputate dolor, nec blandit enim. Suspendisse blandit est et faucibus vulputate.";

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
