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
    const links = ["Menu", "About Us", "Contact Us"];

    // Loop through the header links to make them list items with anchor tags
    for (let i = 0; i < links.length; i++) {
        const li = document.createElement("li");  
        const a = document.createElement("a");

        a.textContent = links[i];
        a.href = "#";

        if (links[i] === "Menu") {
            a.addEventListener('click', function(event) {
                // Prevent default link behavior
                event.preventDefault();  
                
                // Call the menuPage function
                menuPage();  
            });
        }

        li.appendChild(a);
        headerLinks.appendChild(li);
    }

    // Append links to header container
    headerContainer.appendChild(titleElement);
    headerContainer.appendChild(headerLinks);
    
    // Prepend header container to content
    contentContainer.prepend(headerContainer);
};

export { loadHeader };
