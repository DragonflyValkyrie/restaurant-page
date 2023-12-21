const loadHeader = (contentContainer) => {
    // Header container creation
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header-container");
    
    const titleElement = document.createElement("h1");
    titleElement.textContent = "Maple Mountain Meals";

    // Navigation links
    const headerLinks = document.createElement('ul');
    headerLinks.classList.add('header-links');

    // List of links
    const links = ["Home", "Menu", "About Us", "Contact Us"];

    // Loop through the header links to make them list items with anchor tags
    for (let i = 0; i < links.length; i++) {
        const li = document.createElement("li");  
        const a = document.createElement("a");

        a.textContent = links[i];
       
        li.appendChild(a);
        headerLinks.appendChild(li);
    }

    // Append links to header container
    headerContainer.appendChild(titleElement);
    headerContainer.appendChild(headerLinks);
    
    // Append header container to content
    contentContainer.appendChild(headerContainer);
};

export { loadHeader };
