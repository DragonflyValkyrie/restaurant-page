const loadFooter = (contentContainer) => {
    // Footer container creation
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer");
    footerContainer.textContent = "DragonflyValkyrie's Maple Mountain Meals 2023";

    // Append footer container to content
    contentContainer.appendChild(footerContainer);
};

export { loadFooter };
