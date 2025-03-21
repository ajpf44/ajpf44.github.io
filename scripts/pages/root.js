import { renderHeader, handleActiveTab } from "/scripts/components/header.js";
import { renderFooter } from "/scripts/components/footer.js";
import { renderProject } from "/scripts/components/projects.js";
import { changeCoffeeTo, coffeesASCIIArray } from "/scripts/components/coffee.js";
import projects from "/data/projects.js";

const actualPath = window.location.pathname;
renderComponentsDynamically();
handleActiveTab(actualPath);

function renderComponentsDynamically() 
{
	const headerElement = document.getElementsByTagName("header")[0];
	renderHeader(headerElement);

	const footerElement = document.getElementsByTagName("footer")[0];
	renderFooter(footerElement);

	//render home components only if home is the tab actived
	if (actualPath == "/" || actualPath == "/index.html") 
    {
        window.addEventListener("DOMContentLoaded", ()=>
        {
            const projectListElement = document.getElementsByClassName("projects-list")[0];
		    projects.forEach((p) => renderProject(p, projectListElement));

            const pre = document.getElementsByTagName("pre")[0];
            pre.innerHTML = coffeesASCIIArray[3];
            changeCoffeeTo(coffeesASCIIArray, 0, pre);
        })
	}
}
