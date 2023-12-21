const contactPage = (contentContainer) => {

    // Create the main container for the contact page
    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");

    // Create container for the title
    const contactTitleContainer = document.createElement("div");
    contactTitleContainer.classList.add("contact-titles");

    // Create and set the main title for the contact page
    const contactTitle = document.createElement("h1");
    contactTitle.textContent = "Contact Us";
   
    // Create container for the paragraphs of the contact content
    const parContactContainer = document.createElement("div");
    parContactContainer.classList.add("contact-para");

    // Create individual paragraphs and set their content
    const p1 = document.createElement("p");
    p1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum lectus sit amet nulla ornare porta. Aliquam urna mi, condimentum quis dapibus ac, luctus quis urna. Phasellus nulla nisl, mollis ut nisl a, aliquam sodales neque. Phasellus aliquet pellentesque vehicula. Phasellus sit amet leo ac dolor efficitur tempor id ut risus. In ut lectus at est vestibulum mollis volutpat ut eros. Sed ac ipsum nec purus vulputate efficitur vitae pellentesque mi. Mauris tincidunt ac arcu eget lobortis. Duis condimentum sapien non felis tristique, eu rhoncus mauris mollis.";

    const p2 = document.createElement("p");
    p2.textContent = "Pellentesque sit amet blandit libero, consequat auctor elit. Proin maximus lectus id metus vestibulum, at elementum magna ullamcorper. Phasellus non elit nibh. Mauris gravida libero at enim rhoncus, et pretium justo posuere. Donec est sapien, suscipit eu egestas vel, mattis at leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin fermentum eros sapien, eget sollicitudin metus vulputate vel. Integer vulputate a purus non pulvinar. Nulla nec blandit tortor. Cras commodo et ex non rutrum. Fusce tempor maximus sodales. Mauris nulla libero, consequat sit amet lobortis a, vehicula at mi. In posuere, metus eget semper ullamcorper, lacus odio scelerisque lacus, nec laoreet ex justo ac lectus. Etiam a turpis ex. Quisque nisi urna, egestas cursus mi quis, viverra luctus ex.";

    // Append paragraphs to the contact content container
    parContactContainer.appendChild(p1);
    parContactContainer.appendChild(p2);

    // Create the form container
    const contactFormContainer = document.createElement("div");
    contactFormContainer.classList.add("contact-form");

    // Create the form element
    const contactForm = document.createElement("form");
    

    // Create input fields, labels, and other form elements here as needed
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name:";
    const nameInput = document.createElement("input");
    nameInput.type = "text";

    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Email:";
    const emailInput = document.createElement("input");
    emailInput.type = "email";

    // Append the form elements to the form
    contactForm.appendChild(nameLabel);
    contactForm.appendChild(nameInput);
    contactForm.appendChild(emailLabel);
    contactForm.appendChild(emailInput);

    // Append title, contact content container, and form to the main contact container
    contactContainer.appendChild(contactTitle);
    contactContainer.appendChild(parContactContainer);
    contactContainer.appendChild(contactForm);

    // Append the main contact container to the content container of the page
    contentContainer.appendChild(contactContainer);
};

export { contactPage };
