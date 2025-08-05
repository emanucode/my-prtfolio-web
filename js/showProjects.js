import { createdProjects } from "./const-projects.js";

function showProjects() {
  const container = document.getElementById("projects");
  container.innerHTML = "";

  createdProjects.forEach((project) => {
    console.log("hay render");
    const card = document.createElement("div");
    card.classList.add("card-project");
    card.innerHTML = `
        <h3>${project.title} </h3>
        <p>${project.description}</p>
        <span>${project.tags
          .map((tag) => `<strong>${tag}</strong>`)
          .join("   ")}</span>
      `;
    container.appendChild(card);
  });
}

showProjects();
