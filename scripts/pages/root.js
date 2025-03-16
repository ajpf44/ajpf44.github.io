import { renderHeader, handleActiveTab } from "/scripts/pages/header.js";

renderComponentsDynamically();   
handleActiveTab(window.location.pathname)

function renderComponentsDynamically()
{
    const headerElement = document.getElementsByTagName("header")[0];
    
    renderHeader(headerElement);
}