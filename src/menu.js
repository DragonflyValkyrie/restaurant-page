const menuPage = () => {
    const contentContainer = document.getElementById("content");

    // Create main menu container
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");

    const menuItems = [
        { 
            name: "Montreal-Style Smoked Meat Sandwich",
            price: "$2.73",
            desc: "Lorem, deren, trataro, filede, nerada",
            img: "food.jpg",
        },
        { 
            name: "Peameal Bacon",
            price: "$10.58",
            desc: "Lorem, deren, trataro, filede, nerada",
            img: "food.jpg", 
        },
        { 
            name: "Tourtière",
            price: "$6.07",
            desc: "Lorem, deren, trataro, filede, nerada",
            img: "food.jpg",
        },
        { 
            name: "Butter Tarts",
            price: "$15.43",
            desc: "Lorem, deren, trataro, filede, nerada",
            img: "food.jpg", 
        }
    ];
  
    // Take menu items and create DOM elements for each item
    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const img = document.createElement("img");
        img.src = item.img;
        img.alt = item.name;
        menuItem.appendChild(img);

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;
        menuItem.appendChild(itemName);

        const itemDesc = document.createElement("p");
        itemDesc.textContent = item.desc;
        menuItem.appendChild(itemDesc);

        const itemPrice = document.createElement("p");
        itemPrice.textContent = item.price;
        menuItem.appendChild(itemPrice);

        menuContainer.appendChild(menuItem);
    });

    contentContainer.appendChild(menuContainer);
  };
  
  export { menuPage };