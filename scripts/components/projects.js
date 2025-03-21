/* 
    return string
    arr: string[]
*/
const arrayToPortuguese = (arr) => arr.reduce((p, n)=>{
    if(n == arr[arr.length -1]) return `${p} e ${n}`
    return `${p}, ${n}`
})

/*
    return void
    parentElement: DOM Element
    p = 
    {
        name: "",
        description: "",
        repoLink: "",
        pageLink?: "",
        imgPath: "",
        techs: [""]
    }
*/
function renderProject( p, parentElement )
{
    let pageAnchorHTML = "";

    if ( p.pageLink !=null  && p.pageLink.length >  3)
        pageAnchorHTML = `<a class="default" href="${p.pageLink}" target="_blank">Página</a> `

    const projectHTML = `<li>
                            
                            <img src="${p.imgPath}" alt="imagem do projeto ${p.name}">
                            
                            <div class="project-info">
                                <div>
                                    <h4>
                                        ${p.name}
                                    </h4>
                                    <p class="techs">
                                        ${arrayToPortuguese(p.techs)}
                                    </p>
                                </div>
                                
                                <p>
                                    [<a href="${p.repoLink}" class="default" target="_blank">${p.name}</a>]
                                    ${p.description}
                                </p>
                                <div> 
                                    ${pageAnchorHTML}
                                </div>
                            </div>
                        </li>`;
                        
    parentElement.innerHTML += projectHTML;
}

export {renderProject};