import { renderHeader, handleActiveTab } from "/scripts/pages/header.js";
import { renderFooter } from "/scripts/pages/footer.js";
import { renderProject } from "/scripts/pages/home.js";
import projects from "/data/projects.js";

const actualPath = window.location.pathname;
renderComponentsDynamically();   
handleActiveTab(actualPath)

console.log(actualPath)

function renderComponentsDynamically()
{
    const headerElement = document.getElementsByTagName("header")[0];
    renderHeader(headerElement);

    const footerElement = document.getElementsByTagName("footer")[0];
    renderFooter(footerElement)

    //render home components only if home is the tab actived
    if (actualPath == "/"|| actualPath == "/index.html")
    {
        const projectListElement = document.getElementsByClassName("projects-list")[0];
    
        projects.forEach( p => renderProject(p, projectListElement));
    }
}

