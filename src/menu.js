function renderMenu() {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    header.textContent = "Menu";
    header.classList.add("title");
    const starters = document.createElement("h2");
    starters.textContent = "🚀 Starters";
    const main = document.createElement("h2");
    main.textContent = "🪐 Main Course";
    const dessert = document.createElement("h2");
    dessert.textContent = "✨ Desserts";
    const starter1 = document.createElement("p");
    starter1.textContent = "🌌 Supernova Bites - Spiced asteroid-fried cheese spheres served with a dark matter dipping sauce.";
    const starter2 = document.createElement("p");
    starter2.textContent = "🛸 Cosmic Calamari - Lightly breaded space squid rings with a nebula glaze.";
    const main1 = document.createElement("p");
    main1.textContent = "🍔 Meteorite Burger - A flame-grilled, black-bun burger with cosmic cheddar, meteor dust aioli, and asteroid hash fries.";
    const main2 = document.createElement("p");
    main2.textContent = "🌱 Galactic Greens Bowl - A hyper-nutrient-packed plant-based bowl with lunar quinoa, Martian kale, and Saturn sesame dressing.";
    const dessert1 = document.createElement("p");
    dessert1.textContent = "🍰 Black Hole Lava Cake - A decadent dark chocolate cake with an oozing caramel core, inspired by the mysteries of the universe.";
    const dessert2 = document.createElement("p");
    dessert2.textContent = "🍧 Starlight Sorbet - A refreshing, color-changing sorbet infused with cosmic fruit extracts.";
    
    content.appendChild(header);
    content.appendChild(starters);
    content.appendChild(starter1);
    content.appendChild(starter2);
    content.appendChild(main);
    content.appendChild(main1);
    content.appendChild(main2);
    content.appendChild(dessert);
    content.appendChild(dessert1);
    content.appendChild(dessert2);
}

export default renderMenu;