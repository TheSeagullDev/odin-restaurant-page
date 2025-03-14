function renderAbout() {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    header.textContent = "About";
    header.classList.add("title");
    const mission = document.createElement("h2");
    mission.textContent = "Our Mission: Flavors Beyond the Stars";
    const p1 = document.createElement("p");
    p1.textContent = "At Nebula Bites, we believe that dining should be an adventure. Inspired by the wonders of space and the creativity of science fiction, we've crafted a menu that takes traditional flavors and launches them into a whole new dimension. Our chefs use the latest culinary innovations to create a multi-sensory experience, blending taste, texture, and visual appeal into every dish.";
    const p2 = document.createElement("p");
    p2.textContent = "Whether you're a space explorer, a sci-fi fanatic, or just someone looking for a dining experience that's truly unique, Nebula Bites is your gateway to an unforgettable meal.";
    const close = document.createElement("p");
    close.textContent = "Join us at our lunar outpost and prepare to dine among the stars.";
    close.classList.add("bold");
    
    
    content.appendChild(header);
    content.appendChild(mission);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(close);
}

export default renderAbout;