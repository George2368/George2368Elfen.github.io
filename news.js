let startvisiblenews = 0;
let visiblenews = 3;
function onLoadVisible(){
    if(document.documentElement.clientWidth <=2560  && document.documentElement.clientWidth > 1920){
        visiblenews = 4;
    }
    if(document.documentElement.clientWidth <=1920  && document.documentElement.clientWidth > 1440){
        visiblenews = 3;
    }
    if(document.documentElement.clientWidth <=1440 && document.documentElement.clientWidth > 760){
        visiblenews = 2;
    }
    if(document.documentElement.clientWidth <=760){
        visiblenews = 1;
    }
}
class NewsContainer{
    constructor(name, title, date,  timereading, photo, altphoto){
        this.name = name;
        this.title = title;
        this.date = date;
        this.timereading = timereading;
        this.photo = photo;
        this.altphoto = altphoto;
    }
} 
var activepaddingnow= 0;
let stepfornextnews;
window.onload = onLoadVisible()
window.onload = countelemsnews()
const NewsArray= [
    {objectnew:new NewsContainer("Laura Busche", "новая коллекция кресел","14 Января 2023", 3, "/assets/news/firstnews.png", "url2")}, 
    {objectnew:new NewsContainer("New Busche", "Световой дизайн в интерьере","14 Март 2025", 3, "/assets/news/secondnews.png", "url2")},
    {objectnew:new NewsContainer("Old Busche", "как выбрать шкаф в спальню","14 Января 2023", 3, "/assets/news/thirdnews.png", "url2")},
    {objectnew:new NewsContainer("Bella Budsadsche", "новая коллекция кресел","14 Января 2023", 3, "/assets/news/firstnews.png", "url2")},
    {objectnew:new NewsContainer("News Buslache", "Световой дизайн в интерьере","14 Января 2023", 3, "/assets/news/secondnews.png", "url2")},
    {objectnew:new NewsContainer("Laurds Busche", "как выбрать шкаф в спальню","14 Января 2023", 3, "/assets/news/thirdnews.png", "url2")},
    {objectnew:new NewsContainer("Bella Budsadsche", "новая коллекция кресел","14 Января 2023", 3, "/assets/news/firstnews.png", "url2")},
    {objectnew:new NewsContainer("News Buslache", "Световой дизайн в интерьере","14 Января 2023", 3, "/assets/news/secondnews.png", "url2")},
    {objectnew:new NewsContainer("Laurds Busche", "как выбрать шкаф в спальню","14 Января 2023", 3, "/assets/news/thirdnews.png", "url2")}
]
var n=0;
for(var key in NewsArray){
    NewsArray[key].objectnew.id=`IdNs${n++}}`
    NewsArray[key].objectnew.name=NewsArray[key].objectnew.name.replace(" ", "<br>")
    NewsArray[key].objectnew.date=NewsArray[key].objectnew.date.replace(" 20", "<br> 20")
}

var newsaraea = document.querySelector(".main_news_block_body_card_news_block")
var buttonsnews = document.querySelector(".buttons_news");
for(var i=startvisiblenews; i < visiblenews; i++ ){
    let cardnewscontainer = document.createElement("div");
    cardnewscontainer.className="main_news_block_body_card_news";
    cardnewscontainer.innerHTML=`<div class="main_news_block_body_card_news_leftPart">
    <div class="main_news_block_body_card_news_leftPart_header">
        <span class="card_news_number">0${NewsArray.indexOf(NewsArray[i]) + 1}</span>
        <span style="text-align: right">${NewsArray[i].objectnew.name}</span>
    </div>
    <h2>${NewsArray[i].objectnew.title}</h2>
    <p>${NewsArray[i].objectnew.date}</p>
    </div>
    <div class="main_news_block_body_card_news_rightPart"><img src=${NewsArray[i].objectnew.photo}></div>
    <button class="reading_time_block button_card_category button_cansel_setting"><span>${NewsArray[i].objectnew.timereading}</span>мин</button>
    `;
    newsaraea.append(cardnewscontainer)
}
for(var i=0;i< NewsArray.length/stepfornextnews;i++){
    let paginatornews = document.createElement("button");
    paginatornews.className="paginator_news";
    buttonsnews.append(paginatornews);
    
   
}
var padingarray = document.querySelectorAll(".paginator_news");
function nowactivepadding(){
    for(var i = 0; i < padingarray.length; i++){
        padingarray[i].classList.remove("activepadding")
    }
    padingarray[activepaddingnow].classList.add("activepadding")
}

function appendblognews(){
    for(var i=0;i< NewsArray.length/stepfornextnews;i++){
        let paginatornews = document.createElement("button");
        paginatornews.className="paginator_news"
        buttonsnews.append(paginatornews);
    }
}
window.onload= nowactivepadding()

function appendnewnews(){
    newsaraea.innerHTML="";
    for(var i=startvisiblenews; i < visiblenews; i++ ){
        let cardnewscontainer = document.createElement("div");
        cardnewscontainer.className="main_news_block_body_card_news";
        cardnewscontainer.innerHTML=`<div class="main_news_block_body_card_news_leftPart">
        <div class="main_news_block_body_card_news_leftPart_header">
            <span class="card_news_number">0${NewsArray.indexOf(NewsArray[i]) + 1}</span>
            <span style="text-align: right">${NewsArray[i].objectnew.name}</span>
        </div>
        <h2>${NewsArray[i].objectnew.title}</h2>
        <p>${NewsArray[i].objectnew.date}</p>
        </div>
        <div class="main_news_block_body_card_news_rightPart"><img src=${NewsArray[i].objectnew.photo}></div>
        <button class="reading_time_block button_card_category button_cansel_setting"><span>${NewsArray[i].objectnew.timereading}</span>мин</button>
        `;
        newsaraea.append(cardnewscontainer)
        countelemsnews();
        resetSetntwswidthHeight()
    }  
    
}
// const NewsArrayEmpty = NewsArray.map((newselem)=>{
//     let cardnewscontainer = document.createElement("div");
//     cardnewscontainer.className="main_news_block_body_card_news";
//     cardnewscontainer.innerHTML=`<div class="main_news_block_body_card_news_leftPart">
//     <div class="main_news_block_body_card_news_leftPart_header">
//         <span class="card_news_number">0${NewsArray.indexOf(newselem) + 1}</span>
//         <span style="text-align: right">${newselem.objectnew.name}</span>
//     </div>
//     <h2>${newselem.objectnew.title}</h2>
//     <p>${newselem.objectnew.date}</p>    
//     </div>
//     <div class="main_news_block_body_card_news_rightPart"><img src=${newselem.objectnew.photo}></div>
//     <button class="reading_time_block button_card_category button_cansel_setting"><span>${newselem.objectnew.timereading}</span>мин</button>
//     `;
//     newsaraea.append(cardnewscontainer)
// })
function countelemsnews(){
    if(document.documentElement.clientWidth <=2560  && document.documentElement.clientWidth > 1920){
        stepfornextnews = 4;
    }
    if(document.documentElement.clientWidth <=1920  && document.documentElement.clientWidth > 1440){
        stepfornextnews = 3;
    }
    if(document.documentElement.clientWidth <=1440 && document.documentElement.clientWidth > 760){
        stepfornextnews = 2;
    }
    if(document.documentElement.clientWidth <=760){
        stepfornextnews = 1;
    }

}
function slider(idbutton){
    countelemsnews()
    console.log(stepfornextnews)
    if(idbutton=="plusbutton" && visiblenews !=NewsArray.length){
        startvisiblenews= startvisiblenews + stepfornextnews;
        visiblenews = visiblenews +stepfornextnews;
        activepaddingnow++;
        nowactivepadding()
        appendnewnews()
        resetSetntwswidthHeight();
        document.getElementById(idbutton).innerText=`0${NewsArray.length}`
        document.getElementById('minusbutton').innerText=`0${startvisiblenews+1}`
    }
    if(idbutton=="minusbutton" && startvisiblenews !=0){
        
        startvisiblenews= startvisiblenews - stepfornextnews;
        visiblenews = visiblenews -stepfornextnews;
        activepaddingnow--;
        nowactivepadding()
        appendnewnews()
        resetSetntwswidthHeight();
        document.getElementById('plusbutton').innerText=`0${NewsArray.length}`
        document.getElementById(idbutton).innerText=`0${startvisiblenews+1}`
    }
   
}
function resetSetntwswidthHeight(){
    if(stepfornextnews==1){
        console.log(1)
        heightReset(document.querySelectorAll(".main_news_block_body_card_news"), 0.6 , 1)
    }
    if(stepfornextnews==2){
        console.log(2)
        heightReset(document.querySelectorAll(".main_news_block_body_card_news"), 0.29, 0.49)
    }
    if(stepfornextnews==3){
        console.log(3)
        heightReset(document.querySelectorAll(".main_news_block_body_card_news"), 0.19, 0.32)
    }
    if(stepfornextnews==4){
        console.log(4)
        heightReset(document.querySelectorAll(".main_news_block_body_card_news"), 0.19, 0.28)
    }
}
function paddingActive(){
    var el = document.querySelector('.buttons_news').children[1];
}
paddingActive()
function heightReset(elem, number, numberw){
    for(var i=0; i < elem.length; i++){
        const parentwidth = elem[i].parentNode.offsetWidth;
        console.log(parentwidth)
        elem[i].style.height = `${parentwidth * number}px`;
        elem[i].style.width = `${parentwidth * numberw}px`
    }
}

window.addEventListener('load', (e)=>{
    resetSetntwswidthHeight();
    heightElem(buttonEelem);
    navButonsResize()
    document.getElementById('plusbutton').innerText=`0${NewsArray.length}`
document.getElementById('minusbutton').innerText=`0${startvisiblenews+1}`
});
window.addEventListener('resize', (e) => {
    resetSetntwswidthHeight();
    heightElem(buttonEelem);
    buttonsnews.innerHTML = '';
    startvisiblenews=0;
    activepaddingnow=0;
    navButonsResize()
    onLoadVisible()
    appendnewnews()
    countelemsnews()
    appendblognews()
    padingarray = document.querySelectorAll(".paginator_news");
    nowactivepadding()
  });
