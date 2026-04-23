fetch("projects-data.json")
    .then(response => response.json())
    .then(data => {

        let container = document.getElementById("projects-container");

        data.forEach(project => {

            let div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <small>${project.tech}</small>
            `;

            container.appendChild(div);
        });

    });
