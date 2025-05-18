var allDialogs = document.querySelectorAll('.dialog_composition');
var shopingCardOrder = document.querySelector(".shpoingcartOreder_container");

allDialogs = Array.from(allDialogs)
function buyItems(tocart){
    makeoreder.showModal();
    for(i in globalcart){
        // var incart = globalcart.filter(item=> item.id == globalcart[i].id)
        // if(incart.length >1){
        //     globalcart[i].count+=1
        //     console.log(globalcart[i].id)
        //     console.log(document.getElementById(`${globalcart[i].id}span`))
        //     console.log(globalcart[i].count)
        //     document.getElementById(`${globalcart[i].id}span`).innerHTML= `${globalcart[i].count}`;
        // }
        let shopingcartcardModal = document.createElement("div");
        shopingcartcardModal.className="shoping_cart_card";
        shopingcartcardModal.innerHTML=`<img class="card_cart_img" src=${globalcart[i].photo}>
            <div class="shoping_cart_card_right">
                <div class="shoping_cart_card_name">
                     <div class="shoping_cart_card_name_area">
                        <div style="background-color:${globalcart[i].color};" class="color_card_sections"></div>
                        <span>${globalcart[i].name}</span>
                     </div>
                     <div class="shoping_cart_card_object_name">
                     ${globalcart[i].category}
                     </div>
                </div>
                <button class="button_cansel_setting trashcan" id="${globalcart[i].id}trash" onclick="deletecart(this)"><img src="/assets/trash.svg"></button>
                <hr class="shoping_cart_card_hr">
                <div class="shoping_cart_card_total_price">${globalcart[i].price}</div>
                <div class="shoping_cart_card_change_count">    
                    <span class="shop_cart_count" id="${globalcart[i].id}span">${globalcart[i].count}</span>
                </div>
            </div>`;
            console.log(globalcart[i].id)
            shopingCardOrder.append(shopingcartcardModal)
        
       
    }

}
function closedialog(close){
    document.getElementById(`${close.value}`).close()
    if(close.value == 'cardmodal'){
        openmodal=false;
    }
    if(close.value == 'favoritetocartpage'){
        openfavorit=false;
    }
    if(close.value == 'profilepage'){
        openpedofile=false;
    }
    if(close.value == 'searchpage'){
        opensearch=false;
    }
}

var opencount= 0;
function modalcart(button){
    closesearchevre()
    for(var dial in allDialogs){
        if(allDialogs[dial].id != button.value){
            allDialogs[dial].close()
        }
    }
    openmodal=true;
    
    console.log(globalcart)
    shpoingcart.show()
    var shopingcartcontainer = document.querySelector(".shoping_cart_container");
    if(globalcart.length==0){
        shopingcartcontainer.innerHTML=`<span class="empty_cart">Здесь пока пусто</span>`;
    }
    if(globalcart.length>0){
        shopingcartcontainer.innerHTML=" ";
    }
    for(i in globalcart){
        // var incart = globalcart.filter(item=> item.id == globalcart[i].id)
        // if(incart.length >1){
        //     globalcart[i].count+=1
        //     console.log(globalcart[i].id)
        //     console.log(document.getElementById(`${globalcart[i].id}span`))
        //     console.log(globalcart[i].count)
        //     document.getElementById(`${globalcart[i].id}span`).innerHTML= `${globalcart[i].count}`;
        // }
        let shopingcartcard = document.createElement("div");
        shopingcartcard.className="shoping_cart_card";
            shopingcartcard.innerHTML=`<img class="card_cart_img" src=${globalcart[i].photo}>
            <div class="shoping_cart_card_right">
                <div class="shoping_cart_card_name">
                     <div class="shoping_cart_card_name_area">
                        <div style="background-color:${globalcart[i].color};" class="color_card_sections"></div>
                        <span>${globalcart[i].name}</span>
                     </div>
                     <div class="shoping_cart_card_object_name">
                     ${globalcart[i].category}
                     </div>
                </div>
                <button class="button_cansel_setting trashcan" id="${globalcart[i].id}trash" onclick="deletecart(this)"><img src="/assets/trash.svg"></button>
                <hr class="shoping_cart_card_hr">
                <div class="shoping_cart_card_total_price">${globalcart[i].price}</div>
                <div class="shoping_cart_card_change_count">
                    <button class="shop_cart_count_button" id="${globalcart[i].id}minus" onclick="minusbutton(this)">-</button>
                    <span class="shop_cart_count" id="${globalcart[i].id}span">${globalcart[i].count}</span>
                    <button class="shop_cart_count_button" id="${globalcart[i].id}plus" onclick="plusbutton(this)">+</button>
                </div>
            </div>`;
            console.log(globalcart[i].id)
            shopingcartcontainer.append(shopingcartcard)
        
       
    }
    buttonspmopeartion()
    totalprice= totalpricecreate()
    
    
}
function minusbutton(but){
    var foundelem=globalcart.find((element)=>{
        var foundel= element.id + 'minus';
        return foundel == but.id
    })//из-за стрелочной функции указывает на globalcart а не новую переменную
    if(foundelem.count> 1){
       foundelem.count-=1;
       document.getElementById(`${foundelem.id}span`).innerHTML=foundelem.count;
    }
    buttonspmopeartion()
    totalprice= totalpricecreate()
}
function plusbutton(butp){
    var foundelep=globalcart.find((element)=>{
        var foundelp= element.id + 'plus';
        return foundelp == butp.id
    })
    if(foundelep.count<20){
        foundelep.count+=1;
        document.getElementById(`${foundelep.id}span`).innerHTML=foundelep.count;
    }
    buttonspmopeartion()
    totalprice= totalpricecreate()
}
function deletecart(trash){
    var deletelelem=globalcart.find((element)=>{
        var del= element.id + 'trash';
        return del == trash.id
    })
    deletelelem.count=1;
    globalcart=globalcart.filter((fordelete)=>{
        return fordelete !== deletelelem;
    })
    var shopingcartcontainer = document.querySelector(".shoping_cart_container");
    if(globalcart.length==0){
        shopingcartcontainer.innerHTML=`<span class="empty_cart">Здесь пока пусто</span>`;
    }
    if(globalcart.length>0){
        shopingcartcontainer.innerHTML="";
    }
    for(i in globalcart){
        // var incart = globalcart.filter(item=> item.id == globalcart[i].id)
        // if(incart.length >1){
        //     globalcart[i].count+=1
        //     console.log(globalcart[i].id)
        //     console.log(document.getElementById(`${globalcart[i].id}span`))
        //     console.log(globalcart[i].count)
        //     document.getElementById(`${globalcart[i].id}span`).innerHTML= `${globalcart[i].count}`;
        // }
       
        let shopingcartcard = document.createElement("div");
        shopingcartcard.className="shoping_cart_card";
            shopingcartcard.innerHTML=`<img class="card_cart_img" src=${globalcart[i].photo}>
            <div class="shoping_cart_card_right">
                <div class="shoping_cart_card_name">
                     <div class="shoping_cart_card_name_area">
                        <div style="background-color:${globalcart[i].color};" class="color_card_sections"></div>
                        <span>${globalcart[i].name}</span>
                     </div>
                     <div class="shoping_cart_card_object_name">
                     ${globalcart[i].category}
                     </div>
                </div>
                <button class="button_cansel_setting trashcan" id="${globalcart[i].id}trash" onclick="deletecart(this)"><img src="/assets/trash.svg"></button>
                <hr class="shoping_cart_card_hr">
                <div class="shoping_cart_card_total_price">${globalcart[i].price}</div>
                <div class="shoping_cart_card_change_count">
                    <button class="shop_cart_count_button" id="${globalcart[i].id}minus" onclick="minusbutton(this)">-</button>
                    <span class="shop_cart_count" id="${globalcart[i].id}span">${globalcart[i].count}</span>
                    <button class="shop_cart_count_button" id="${globalcart[i].id}plus" onclick="plusbutton(this)">+</button>
                </div>
            </div>`;
           
            shopingcartcontainer.append(shopingcartcard)
        
       
    }
    console.log(globalcart)
    buttonspmopeartion()
    totalprice= totalpricecreate()
}
function buttonspmopeartion() {
    for(var n in globalcart){
        if(globalcart[n].count==1){
            document.getElementById(`${globalcart[n].id}minus`).classList.add('disactive')
        }
        if(globalcart[n].count>1){
            document.getElementById(`${globalcart[n].id}minus`).classList.remove('disactive')
        }
        if(globalcart[n].count==20){
            document.getElementById(`${globalcart[n].id}plus`).classList.add('disactive')
        }
        if(globalcart[n].count<20){
            document.getElementById(`${globalcart[n].id}plus`).classList.remove('disactive')
        }
    }
}
// function totalpricemaker(price){
//     for(var total in globalcart){
//         totalprice+=globalcart[total].price;
//     }
//     document.querySelector('.end_price_shop').innerHTML=totalprice;
//     console.log(totalprice)
    
// }
function buy(buybutton){

}
