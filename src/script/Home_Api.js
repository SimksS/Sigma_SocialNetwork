 //API DE NOTÍCIAS
const newsUrl = "http://servicodados.ibge.gov.br/api/v3/noticias/"

//FRASES MOTIVACIONAIS
const motUrl = "http://positive-vibes-api.herokuapp.com/quotes/random"





const generateNews = (url) =>{
    fetch(url)
    .then(response => response.json())
    .then((data) => {
        if(url == newsUrl){
            printNews(data)
        }
       else if(url == motUrl) {
         printMotivational(data)
       }
        })
}
generateNews(newsUrl)

//NOTICIAS
const printNews = (data) => {
    const newsSelector = document.querySelector(".news-api")
    let index = Math.floor(Math.random()*data.items.length)
    
    
    for(let x = 0; x < 3; x++){
    const p = document.createElement("p")
    const h5 = document.createElement("h5")
    const a = document.createElement ("a")
    const div = document.createElement("div")

    p.innerText = data.items[index].editorias
    h5.innerText = data.items[index].titulo
    a.innerText = "Saiba mais"
    a.href = data.items[index].link

    div.setAttribute("class","news")
    a.setAttribute("target","_blank")

    div.append(p,h5,a)
    newsSelector.appendChild(div)
    index = Math.floor(Math.random()*data.items.length)
    }
    
}
    setInterval(() => {
      const changeNews = document.querySelectorAll(".news");
      changeNews.forEach((news) => {
        news.remove();
      });
      generateNews(newsUrl)
    }, 20000);
