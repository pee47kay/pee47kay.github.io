// For creating sliding moving project
import {projectsData} from "../data/data.js";
window.addEventListener("DOMContentLoaded",(event)=>{
    const projectData = projectsData;

    let otherProjectContainer = document.querySelector(".otherProjectContainer");
    let primaryProjectsContainer = document.createElement("div");
    primaryProjectsContainer.classList.add("primaryProjectsContainer");
    let secondaryProjectsContainer = document.createElement("div");
    secondaryProjectsContainer.classList.add("secondaryProjectsContainer");

    projectData.forEach((project)=>{
        let mainCard = mainCardHelper(project);
        primaryProjectsContainer.appendChild(mainCard);
        let childCard = childCardHelper(project);
        secondaryProjectsContainer.appendChild(childCard);
    })

    otherProjectContainer.appendChild(primaryProjectsContainer);
    otherProjectContainer.appendChild(secondaryProjectsContainer);


    //TODO: Main card helper
    function mainCardHelper(project){
        let mainCard = document.createElement("div");
        mainCard.classList.add("mainCard");
        mainCard.style.backgroundSize = "cover";
        mainCard.style.backgroundRepeat = "no-repeat";
        mainCard.style.backgroundImage = `url(${project.image})`;
    
        return mainCard;
        }


    //TODO: Child card helper
    function childCardHelper(project){
        let childCard = document.createElement("div");
        childCard.classList.add("childCard");
        childCard.innerHTML = ` 
            <h3 class="childCard__title">${project.title}</h3>
        `
        return childCard;
    }

})