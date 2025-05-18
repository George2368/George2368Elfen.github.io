var searchareain = document.getElementById('searcharea');
const searchResultContainer = document.querySelector('.search_result_container');
function opensearchFunc(search){
    for(var dial in allDialogs){
        if(allDialogs[dial].id != search.value){
            allDialogs[dial].close()
        }
    }
    opensearch = true;
    searchpage.showModal()
   
    

}
function closesearchevre(){
    searchpage.close()
}

searchareain.onkeyup = function(event){
    searchResultContainer.innerHTML="";
    var foundedelem = event.target.value.trim();
    var regexp = new RegExp(`${foundedelem}`, "gi");
   
   if(foundedelem!=""){
    
    for(key in Products){
        var findersddsadadaad= Products[key].filter((eventsearch, index ,array)=>{ 
            if(regexp.test(eventsearch.name.trim())){
              return eventsearch
            }
          })
          for(i in findersddsadadaad){
            let cardproductcontainersearch = document.createElement("div");
            cardproductcontainersearch.className="card_product_container";
            cardproductcontainersearch.innerHTML=`<div style="background-color:${findersddsadadaad[i].color};" class="color_card_section"></div>
                        <img class="img_product_card" src=${findersddsadadaad[i].photo} onclick="modalcartFunc('${key}', '${findersddsadadaad[i].id}')">
                        <h2 class="h2_in_product_card" onclick="modalcartFunc('${key}', '${findersddsadadaad[i].id}')">${findersddsadadaad[i].name}</h2>
                        <span class="subtitle subtitle_in_product_card" onclick="modalcartFunc('${key}', '${findersddsadadaad[i].id}')">${findersddsadadaad[i].category}</span>
                        <hr class="hr_in_product_card">
                        <div class="card_price_in_category">
                            <span class="numbers price">${findersddsadadaad[i].price}</span>
                            <img>
                        </div>
                        <button class="card_buy_button_in_category" onclick="addcart(this.id, this.value)" value="${key}" id="${findersddsadadaad[i].id}">
                           <img src="/assets/shopping-cart.svg">
                           <span>Купить</span> 
                        </button>
                    </div>`;
            searchResultContainer.append(cardproductcontainersearch)
           }
    }

   }
  
    // console.log(findersddsadadaad)
    // console.log(foundedelem)
}
// searchareain.oninput= function(event){
//         console.log(Products.Mirrors.find((eventsearch, index ,array)=>{ 
//             const foundedelem = event.target.value;
//             regexp = new RegExp(`${foundedelem}`, "i");
//             return eventsearch.name.search(foundedelem)}))
//     }
