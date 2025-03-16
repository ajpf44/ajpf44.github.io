const footerHTML = `
        <p>Esse projeto [ <a class="default" href="" target="_blank">repositorio</a> ] foi feito com Vanilla JS</p>        
        <span>© 2025 Alexandre Ferreira</span>
`;

/*
    return: void;
    footerElement: DOM Element
*/
function renderFooter(footerElement) {
	if (footerElement != null) {
		footerElement.innerHTML = footerHTML;
	}
}

export { renderFooter };
