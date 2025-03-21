function findLinks(text)
{
    const linksUnformated = text.match(/\[(.*?)\]/g);
    const links = linksUnformated.map((e) => e.replaceAll(/\[|\]/g, ""));
    let newText = text;
    links.forEach(
        (link) =>
            (newText = newText.replaceAll(
                link,
                `<a href="${link}" tartget=_blank> link </a>`
            ))
    );

    return text
}

function findTitle(text) 
{
    let title = "";
    for (let n of text) 
    {
        if (n == "\n") break;

        title += n;
    }

    return text.replace(title, `<h3>${title}</h3>`);
}

function textToHTML(text)
{
    let newText = "";
    newText = findLinks(text);
    newText = findTitle(newText);

    return newText.replace("</h3>", "</h3><p>").replaceAll("\n", "<br>").concat("</p>"); 
}

export { textToHTML }