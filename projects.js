document.addEventListener("DOMContentLoaded", () => {

    fetch("./projects-data.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("File not found or wrong path");
            }
            return response.json();
        })
        .then(data => {

            const container = document.getElementById("projects-container");

            if (!container) {
                console.error("Container not found");
                return;
            }

            if (!Array.isArray(data)) {
                throw new Error("Invalid JSON format (must be an array)");
            }

            data.forEach(project => {

                const div = document.createElement("div");
                div.classList.add("card", "project-card");

                div.innerHTML = `
                    <h3>${project.title || ""}</h3>
                    <p>${project.description || ""}</p>
                    <small>${project.tech || ""}</small>
                `;

                container.appendChild(div);
            });

        })
        .catch(error => {
            console.error("ERROR LOADING PROJECTS:", error);

            const container = document.getElementById("projects-container");
            if (container) {
                container.innerHTML = `
                    <div class="card">
                        ⚠️ Could not load projects. Check file path or GitHub Pages setup.
                    </div>
                `;
            }
        });

});
