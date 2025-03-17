const headerHTML = `<div class="header-container">
                <h1>@ajpf44</h1>
                <nav>
                    <ul>
                        <a href="/">
                            <li class="home-tab">
                                Home
                            </li>
                        </a>
                        <a href="/pages/about.html">
                            <li class="about-tab">
                                Sobre
                            </li>
                        </a>
                    </ul>
                </nav>
            </div>`;

/*
    return void
    path: string
*/
function handleActiveTab(path) {
	const tabsClass = {
		home: "home-tab",
		about: "about-tab",
	};

	let activeTabClass;
	if (path == "/" || path == "/index.html") activeTabClass = tabsClass.home;
	else if (path == "/pages/about.html") activeTabClass = tabsClass.about;

	const activeTabElement = document.getElementsByClassName(activeTabClass)[0];

	activeTabElement.classList.add("active-tab");
}

/*
    return: void;
    headerElement: DOM Element
*/
function renderHeader(headerElement) {
	if (headerElement != null) {
		headerElement.innerHTML = headerHTML;
	}
}

export { renderHeader, handleActiveTab };
