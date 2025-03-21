const footerHTML = `
        <p>Esse site [<a class="default" href="" target="_blank">repositorio</a>] foi feito em Vanilla JS</p>        
        <span>© 2025 Alexandre Ferreira</span>
`;

/*
    return: void;
    footerElement: DOM Elementz
*/
function renderFooter(footerElement) {
	if (footerElement != null) {
		footerElement.innerHTML = footerHTML;
	}
}

export { renderFooter };
