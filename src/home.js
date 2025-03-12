function renderHome() {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    header.textContent = "Welcome to Nebula Bites - A Cosmic Culinary Experience!";
    header.classList.add("title");
    const p1 = document.createElement("p");
    p1.textContent = "Step into the future and embark on a journey across the stars with every bite. At Nebula Bites, we bring the flavors of the galaxy to your plate, combining cutting-edge culinary techniques with flavors inspired by science fiction. Whether you're craving a meteorite burger or a nebula-infused dessert, we promise a meal that is truly out of this world.";
    const p2 = document.createElement("p");
    p2.textContent = "🪐 Zero-Gravity Flavor. Interstellar Atmosphere. Cosmic Comfort.";
    const p3 = document.createElement("p");
    p3.textContent = "Reserve your table now and prepare for liftoff!";
    content.appendChild(header);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
}

export default renderHome;