var buttonEelem = Array.from(document.querySelectorAll(".ringed_order_button"));
var globalvar = true;
var openmodal=false;

const categoryArea = document.querySelector(".cards_product_container");

function heightElem(buttonEelem){
var buttonwidth = buttonEelem[0].offsetWidth;
var elemHeight = Math.round(buttonwidth * 0.437);
for(var elb in buttonEelem){
    buttonEelem[elb].style.height = elemHeight + "px";

}

}



class LampCard {
    constructor(name,category,text,fabricator,price,photo,color,height){
        this.name= name;
        this.category = category;
        this.text = text;
        this.fabricator = fabricator;
        this.price = price;
        this.photo = photo;
        this.color = color;
        this.height = height;
    }
    sayHi(){
        alert(Object.keys(this))
    }
}
var globalcart = [];
var totalprice= totalpricecreate();
function totalpricecreate(){
    var totalpricein=0;
    for(var total in globalcart){

        totalpricein+=globalcart[total].price*globalcart[total].count;
    }
    document.querySelector(".end_price_shop").innerHTML=totalpricein;
    return totalpricein;
   
}

function addcart(id,value){
    console.log(id)
    for(var elems in Products[value]){
        if(Products[value][elems].id == id){
            globalcart.push(Products[value][elems])
        }
    }  
//     for(i in globalcart){
//         var incart = globalcart.filter(item=> item.id == globalcart[i].id)
//         if(incart.length >0){
//             globalcart[i].count+=1
//             document.getElementById(`${globalcart[i].id}span`).innerHTML= `${globalcart[i].count}`;
//         }
      
            
// }
const duplicates = globalcart.filter((number, index, numbers) => {
    return numbers.indexOf(number) !== index;
    });
    if(duplicates.length > 0){
            
        // globalcart = globalcart.filter((elemdel) => {
        //     if(cc==0){
        //         console.log(elemdel)
        //         elemdel !== duplicates[0];
        //     }
        //     console.log(cc)
        //     cc++
        // });
        globalcart.splice(globalcart.indexOf(duplicates[0]), 1)
        globalcart.find((updateelem) => {
            return updateelem === duplicates[0]}).count+=1;
    }
    console.log(openmodal)
    if(openmodal){
        var shopingcartcontainer = document.querySelector(".shoping_cart_container");
    
        shopingcartcontainer.innerHTML="";
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
    
    
    
}

var cardProducts = new Array();
var Products ={
    Mirrors:[
        { name:"Kristin",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/elongated_wave_form_modern_mirror_light_blue_color.webp",
            color: "#A5D4FF",
            height: 30,
            isTopProduct:false},
        { name:"Arlene",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/tall_flower_form_modern_mirror_light_blue_color_wh.webp",
            color: "#F0B3EA",
            height: 30,
            isTopProduct:false},
        { name:"Colleen",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/tall_sun_form_modern_mirror_light_blue_color_white.webp",
            color: "#8ECDFA",
            height: 30,
            isTopProduct:false},
        { name:"Coppelia",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/tall_flower_form_modern_mirror_light_blue_color_wh_1_.webp",
            color: "#FBE4CA",
            height: 30,
            isTopProduct:false},
        { name:"Artemide",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/tall_wave_form_modern_mirror_light_lavender_color_1_.webp",
            color: "#F0B5FA",
            height: 30,
            isTopProduct:false},
         { name:"Afina",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/unusual_modern_tall_wide_glowing_light_mirror_wh.webp",
            color: "#FFD523",
            height: 30,
            isTopProduct:false},
        { name:"Greenly",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/unusual_modern_tall_wide_wave_glowing_light_mirror.webp",
            color: "#4A5B40",
            height: 30,
            isTopProduct:false},
        { name:"Sky",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/elongated_wave_form_modern_mirror_light_blue_color2.webp",
            color: "#33C9F2",
            height: 30,
            isTopProduct:false},
        { name:"Ring",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/unusual_modern_tall_wide_glowing_light_floor_wave_.webp",
            color: "#FF81C6",
            height: 30,
            isTopProduct:false},
        { name:"Ocean",
            category: "Зеркало напольное",
            text: "Функциональное зеркало для создания максимального комфорта",
            fabricator: "Benjamin Moore",
            price: 150000,
            oldPrice: 200000,
            photo: "/assets/mirrors/unusual_modern_tall_wide_glowing_light_mirror_wh_1_.webp",
            color: "#031D55",
            height: 30,
            isTopProduct:false}
    ],
Lamps:[
    { name:"Aubrey",
        category: "Лампа настольная",
        text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
        fabricator: "Benjamin Moore",
        price: 150000,
        photo: "/assets/lamps/sophisticated_unusual_modern_high_lamp_wave_form_1_.webp",
        color: "#FFC4A5",
        height: 60,
        isTopProduct:false},
    { name:"Leslie",
        category: "Лампа настольная",
        text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
        fabricator: "Benjamin Moore",
        price: 150000,
        photo: "/assets/lamps/sophisticated_unusual_modern_high_lamp_tree_form_.webp",
        color: "#88E379",
        height: 60,
        isTopProduct:false},
    { name:"Darrell",
        category: "Лампа настольная",
        text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
        fabricator: "Benjamin Moore",
        price: 150000,
        photo: "/assets/lamps/sophisticated_unusual_modern_high_lamp_wave_form_3_1.webp",
        color: "#FA8EEF",
        height: 60,
        isTopProduct:false},
    { name:"Coppelia",
        category: "Лампа настольная",
        text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
        fabricator: "Benjamin Moore",
        price: 150000,
        photo: "/assets/lamps/sophisticated_unusual_modern_high_lamp_wave_form_2_.webp",
        color: "#29D0D9",
        height: 60,
        isTopProduct:false},
    { name:"Artemide",
        category: "Лампа настольная",
        text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
        fabricator: "Benjamin Moore",
        price: 150000,
        photo: "/assets/lamps/sophisticated_unusual_modern_high_lamp_wave_form_.webp",
        color: "#89D5FF",
        height: 60,
        isTopProduct:false},
     { name:"Artemide",
        category: "Лампа настольная",
        text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
        fabricator: "Benjamin Moore",
        price: 150000,
        photo: "/assets/lamps/sophisticated_unusual_modern_high_lamp_wave_form_.webp",
        color: "#89D5FF",
        height: 60,
        isTopProduct:false
    },
    { name:"Santa Trinita",
        category: "Лампа настольная",
        text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
        fabricator: "Benjamin Moore",
        price: 150000,
        photo: "/assets/lamps/lamp1.webp",
        color: "rgba(197, 176, 250, 0.7)",
        height: 60,
        isTopProduct:true
    },
    { name:"Flower",
    category: "Лампа настольная",
    text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
    fabricator: "Benjamin Moore",
    price: 150000,
    photo: "/assets/lamps/the_same_lamp_only_from_a_different_angle_same_col.webp",
    color: "#FFD523",
    height: 60,
    isTopProduct:false
},
{ name:"Bee",
category: "Лампа настольная",
text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
fabricator: "Benjamin Moore",
price: 150000,
photo: "/assets/lamps/unusual_modern_tall_wide_wave_glowing_light_lamp_1_.webp",
color: "#FFD523",
height: 60,
isTopProduct:false
},
{ name:"Steb",
category: "Лампа настольная",
text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
fabricator: "Benjamin Moore",
price: 150000,
photo: "/assets/lamps/unusual_modern_tall_wide_wave_glowing_light_lamp_2_.webp",
color: "#4A5B40",
height: 60,
isTopProduct:false
},
{ name:"Corral",
category: "Лампа настольная",
text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
fabricator: "Benjamin Moore",
price: 150000,
photo: "/assets/lamps/sophisticated_unusual_modern_high_lamp_wave_form_4_.webp",
color: "#FF81C6",
height: 60,
isTopProduct:false
},
{ name:"Jug",
category: "Лампа настольная",
text: "Функциональная дизайнерская лампа для создания максимально комфортного освещения",
fabricator: "Benjamin Moore",
price: 150000,
photo: "/assets/lamps/unusual_modern_tall_wide_wave_glowing_light_lamp_.webp",
color: "#FF81C6",
height: 60,
isTopProduct:false
}
        
],
Chears:[
    { name:"Kathryn",
        category: "Кресла и стулья",
        text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
        fabricator: "Paint Here Glory",
        price: 120000,
        photo: "/assets/chears/sophisticated_unusual_modern_high_chair_wave_form_1_.webp",
        color: "#FBE4CA",
        height: 80,
        isTopProduct:false},
    { name:"Wendy",
        category: "Кресла и стулья",
        text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
        fabricator: "Paint Here Glory",
        price: 120000,
        photo: "/assets/chears/sophisticated_unusual_modern_high_chair_wave_form_.webp",
        color: "#F0B3EA",
        height: 80,
        isTopProduct:false},
    { name:"Judith",
            category: "Кресла и стулья",
            text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
            fabricator: "Paint Here Glory",
            price: 120000,
            photo: "/assets/chears/tall_unusual_modern_chair_light_lavender_color_whi_1_.webp",
            color: "#F18EFA",
            height: 80,
            isTopProduct:false},
    { name:"Jane",
            category: "Кресла и стулья",
            text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
            fabricator: "Paint Here Glory",
            price: 120000,
            photo: "/assets/chears/subtract.webp",
            color: "#5C544A",
            height: 80,
            isTopProduct:false},
    { name:"Darlene",
            category: "Кресла и стулья",
            text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
            fabricator: "Paint Here Glory",
            price: 120000,
            photo: "/assets/chears/unusual_modern_high_chair_wave_form.webp",
            color: "#F0B5FA",
            height: 80,
            isTopProduct:false},
    { name:"Trinita Santa Lucina",
                category: "Кресла и стулья",
                text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
                fabricator: "Paint Here Glory",
                price: 120000,
                photo: "/assets/chears/chear_trinita.webp",
                color: "#FA8FEF",
                height: 80,
                isTopProduct:true},
        { name:"Sollar",
            category: "Кресла и стулья",
            text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
            fabricator: "Paint Here Glory",
            price: 120000,
            photo: "/assets/chears/unusual_modern_tall_wide_wave_glowing_light_chair_4_.webp",
            color: "#FFD523",
            height: 80,
            isTopProduct:false},
            { name:"Sunset",
            category: "Кресла и стулья",
            text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
            fabricator: "Paint Here Glory",
            price: 120000,
            photo: "/assets/chears/unusual_modern_tall_wide_wave_glowing_light_chair_1_.webp",
            color: "#FFD523",
            height: 80,
            isTopProduct:false},
            { name:"Leaf",
            category: "Кресла и стулья",
            text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
            fabricator: "Paint Here Glory",
            price: 120000,
            photo: "/assets/chears/unusual_modern_tall_wide_wave_glowing_light_chair_3_.webp",
            color: "#4A5B40",
            height: 80,
            isTopProduct:false},
            { name:"Afrodita",
            category: "Кресла и стулья",
            text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
            fabricator: "Paint Here Glory",
            price: 120000,
            photo: "/assets/chears/unusual_modern_tall_wide_wave_glowing_light_chair_.webp",
            color: "#FF81C6",
            height: 80,
            isTopProduct:false},
            { name:"River",
            category: "Кресла и стулья",
            text: "Функциональная дизайнерское кресло для создания максимально уюта в помещении",
            fabricator: "Paint Here Glory",
            price: 120000,
            photo: "/assets/chears/unusual_modern_tall_wide_wave_glowing_light_chair_2_.webp",
            color: "#031D55",
            height: 80,
            isTopProduct:false},
],
Tables:[
    { name:"Kathryn",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/elongated_form_tall_modern_table_light_blue_color_2_.webp",
        color: "#A5D4FF",
        height: 140,
        isTopProduct:false},
    { name:"Wendy",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/unusual_modern_high_wide_wave_glowing_light_table_1_.webp",
        color: "#F0DFB3",
        height: 140,
        isTopProduct:false},
    { name:"Judith",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/unusual_modern_tall_wide_wave_glowing_light_table_1.webp",
        color: "#F88EFA",
        height: 140,
        isTopProduct:false},
    { name:"Jane",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/unusual_modern_high_wide_wave_glowing_light_table_2_1.webp",
        color: "#CACFFB",
        height: 140,
        isTopProduct:false},
    { name:"Darlene",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/wide_form_hight_modern_table_light_lavender_color_2_.webp",
        color: "#F0B5FA",
        height: 140,
        isTopProduct:false},
    { name:"Savita Lavits",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/tables_C.webp",
        color: "#A6C9FF",
        height: 140,
        isTopProduct:true},
    { name:"Light",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/unusual_modern_tall_wide_wave_glowing_light_table_2_.webp",
        color: "#FFD523",
        height: 140,
        isTopProduct:false},
    { name:"Leather",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/unusual_modern_tall_wide_wave_glowing_light_table_4_.webp",
        color: "#4A5B40",
        height: 140,
        isTopProduct:false},
    { name:"Mountain",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/unusual_modern_tall_wide_wave_glowing_light_table_5_.webp",
        color: "#4A5B40",
        height: 140,
        isTopProduct:false},
    { name:"Lake",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/unusual_modern_tall_wide_wave_glowing_light_table_3_.webp",
        color: "#031D55",
        height: 140,
        isTopProduct:false},
    { name:"Lillia",
        category: "Cтолы и тумбы",
        text: "Функциональный дизайнерский стол для создания максимально уюта в помещении",
        fabricator: "Benjamin Moore",
        price: 235000,
        photo: "/assets/tables/unusual_modern_tall_wide_wave_glowing_light_table_1_.webp",
        color: "#FF81C6",
        height: 140,
        isTopProduct:false},


]
}
var l=0;
for(var key in Products){
    Products[key].map((product)=>{
        product.count = 1;
        return product.id=`GNM${l++}`
    })
}
var slideFirst = document.querySelector(".first_slide");
var slideSecond = document.querySelector(".second_slide");
var slideThird = document.querySelector(".third_slide");
function colorPut(inputSlide){
    if(inputSlide.id == "lampsslide" ){
        Products.Lamps.map((product)=>{
            if(product.isTopProduct){
                
                inputSlide.querySelector(".lamp_photo").src = product.photo;
                inputSlide.querySelector(".title_decoration").style.color = 'rgba(203, 182, 255, 0.6)';
                inputSlide.querySelector('.ringed_order_button').addEventListener("click", function(){
                    addcart(product.id, 'Lamps')
                })
            }
        })
    }
    if(inputSlide.id == "chearsslide"){
        Products.Chears.map((product)=>{
            if(product.isTopProduct){
                inputSlide.style.backgroundColor =  product.color;
                inputSlide.querySelector(".lamp_photo").src = product.photo;
                inputSlide.querySelector(".title_decoration").style.color = 'rgba(255, 168, 246, 1)';
              
           
                inputSlide.querySelector('.ringed_order_button').addEventListener("click", function(){
                    addcart(product.id, 'Chears')
                })
            }
        })
    }
    if(inputSlide.id == "tablessslide"){
        Products.Tables.map((product)=>{
            if(product.isTopProduct){
                inputSlide.style.backgroundColor =  product.color;
                inputSlide.querySelector(".lamp_photo").src = product.photo;
                inputSlide.querySelector(".title_decoration").style.color = 'rgba(190, 216, 255, 1)';
                inputSlide.querySelector('.ringed_order_button').addEventListener("click", function(){
                    addcart(product.id, 'Tables');
                })
               
                

            }
        })
    }         

   
}
colorPut(slideFirst);
colorPut(slideSecond);
colorPut(slideThird);
var quentityMirrorsVar = document.getElementById("quentityMirrors")
var quentityLampsVar = document.getElementById("quentityLamps")
var quentityChearsVar = document.getElementById("quentityChears")
var quentityTablesVar = document.getElementById("quentityTables")

function quentityCardCategory(inputSlide){
    if(inputSlide.id == "quentityMirrors" ){
      
        inputSlide.innerHTML= `${Products.Mirrors.length}`
    }
    if(inputSlide.id == "quentityLamps" ){
      
        inputSlide.innerHTML= `${Products.Lamps.length}`
    }
    if(inputSlide.id == "quentityChears" ){
       
        inputSlide.innerHTML= `${Products.Chears.length}`
    }
    if(inputSlide.id == "quentityTables" ){
       
        inputSlide.innerHTML= `${Products.Tables.length}`
    }
   
}
quentityCardCategory(quentityMirrorsVar)
quentityCardCategory(quentityLampsVar)
quentityCardCategory(quentityChearsVar)
quentityCardCategory(quentityTablesVar)
activedCards = false;
let lastActiveCards;
let buttoncollection = document.getElementsByClassName('button_card_category');
let buttonmasive = Array.from(buttoncollection);
let cardsProductContainerSettingContainer = document.querySelector('.cards_product_container_setting_container');
let oneRingedOrderButton = document.querySelector('.one_ringed_order_button')
//let 
var lastActiveCardsArrow;
var loadMoreState = 5;
var categoryButtonActivateIDLast;
function appendProductCards(activebutton){
    
    const productcardEmptySecond =  Products[categoryButtonActivateLast].map((product)=>{
        if( Products[categoryButtonActivateLast].indexOf(product) >= loadMoreState){
            let cardproductcontainer = document.createElement("div");
            cardproductcontainer.className="card_product_container";
            cardproductcontainer.innerHTML=`<div style="background-color:${product.color};" class="color_card_section"></div>
                        <img class="img_product_card" src=${product.photo} onclick="modalcartFunc'(${categoryButtonActivateLast}', '${product.id}')">
                        <h2 class="h2_in_product_card" onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">${product.name}</h2>
                        <span class="subtitle subtitle_in_product_card" onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">${product.category}</span>
                        <hr class="hr_in_product_card">
                        <div class="card_price_in_category">
                            <span class="numbers price">${product.price}</span>
                            <img>
                        </div>
                        <button class="card_buy_button_in_category" onclick="addcart(this.id, this.value)" value="${categoryButtonActivateLast}" id="${product.id}">
                           <img src="/assets/shopping-cart.svg">
                           <span>Купить</span> 
                        </button>
                    </div>`;
            categoryArea.append(cardproductcontainer)
        }
     
     })
     loadMoreState+=5;
}
var yellowArray = [];
var greenArray = [];
var blueArray = [];
var pinkArray = [];
var lavandArray = [];
var navyblueArray = [];
//ЦИКЛ


const settingContainer = document.getElementById("settinincludearea");
const colorsArray = ["Зеленный", "Синий", "Оранжевый", "Розовый", "Лавандовый", "Голубой"];
//checkbox
var setingcontainerElem= document.createElement("div")
setingcontainerElem.innerHTML=`<div class="price_filter_container">
<h4 class="filter_container_h4">Цена</h4>
<form class="price_filter_container_form">
    <input type="number" class="price_input_style"> <input type="number" class="price_input_style">
    <input type="range">
</form>
</div>
<div class="colors_filter_container">
<h4 class="filter_container_h4">Цвета</h4>
<form id="checkboxform">
    
    
</form>
</div>`;
// function containsf(arr, elem) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === elem) {
//             return true;
//         }
//     }
//     return false;
// }
var checkappendetting = true;
function settingappendButton(settingactive){

    //добавление настроек
    if(checkappendetting){
        
        settingContainer.append(setingcontainerElem)
        checkappendetting = false}
    else{
        
        checkappendetting = true;
        settingContainer.innerHTML="";
    }
}

var lastActivatedColorArray = [];
function filterOperation(checkbox){
    //при каждом нажатии стирается вложенные фильтры, проверяется условие на наличие галочки у чекбокса, те чекбоксы, которые с галач, будут отображены
    //contains(lastActivatedColorArray, checkbox.id) - проверка на вложенность именно у html элементов
    categoryArea.innerHTML=""
    
    if(checkbox.checked ==false){
        console.log(lastActivatedColorArray)
            if(checkbox.id == "Зеленный"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== greenArray)
            }
            if(checkbox.id == "Синий"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== navyblueArray)
            }
            if(checkbox.id == "Оранжевый"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== yellowArray)
            }
            if(checkbox.id == "Розовый"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== pinkArray)
            }
            if(checkbox.id == "Лавандовый"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== lavandArray)
            }
            if(checkbox.id == "Голубой"){
                lastActivatedColorArray = lastActivatedColorArray.filter((element) => element !== blueArray)
            }
      
    }
   
    if(checkbox.checked ==true){
        console.log("dhua")
        if(checkbox.id == "Зеленный"){
            lastActivatedColorArray.push(greenArray)
        }
        if(checkbox.id == "Синий"){
            lastActivatedColorArray.push(navyblueArray)
        }
        if(checkbox.id == "Оранжевый"){
            lastActivatedColorArray.push(yellowArray); 
        }
        if(checkbox.id == "Розовый"){
            lastActivatedColorArray.push(pinkArray)
        }
        if(checkbox.id == "Лавандовый"){
            lastActivatedColorArray.push(lavandArray)
        }
        if(checkbox.id == "Голубой"){
            lastActivatedColorArray.push(blueArray)
        }
    }
                            let nowcountelem = 0;
                            let dadas = 0;
                            
const productcardEmpty = lastProductActiveMasiive.map((product)=>{
    //если id продукта соответсвует, то вывод карточки, то есть сравн
    dadas++;
        lastActivatedColorArray.forEach((elem)=>{
            
            elem.forEach((el)=>{
                if(product.id == el){
           
                    //попробовать просто скрывать эдементы, через display none
                    if(nowcountelem <= 5){
                       
                        let cardproductcontainer = document.createElement("div");
                        cardproductcontainer.className="card_product_container";
                        cardproductcontainer.innerHTML=`<div style="background-color:${product.color};" class="color_card_section"></div>
                                    <img class="img_product_card" src=${product.photo} onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">
                                    <h2 class="h2_in_product_card" onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">${product.name}</h2>
                                    <span class="subtitle subtitle_in_product_card" onclick="modalcartFunc('${categoryButtonActivateLast}', '${product.id}')">${product.category}</span>
                                    <hr class="hr_in_product_card">
                                    <div class="card_price_in_category">
                                        <span class="numbers price">${product.price}</span>
                                        <img>
                                    </div>
                                    <button class="card_buy_button_in_category" onclick="addcart(this.id, this.value)" value="${categoryButtonActivateLast}" id="${product.id}">
                                       <img src="/assets/shopping-cart.svg">
                                       <span>Купить</span> 
                                    </button>
                                </div>`;
                        categoryArea.append(cardproductcontainer)
                    }
                }
            })
            
            
        })
    




})
                            
}
var lastProductActiveMasiive;
function categoryButtonActivate(activebutton){
document.querySelector(".cards_product_container_cover").style.display="block";
yellowArray = [];
greenArray = [];
blueArray = [];
pinkArray = [];
lavandArray = [];
navyblueArray = [];
    categoryButtonActivateLast = activebutton.id;
    for(var key in Products){
       if(key == activebutton.id){
        if (lastActiveCards !== activebutton){
            if(!activedCards){
                if (lastActiveCardsArrow !=null){
                    lastActiveCardsArrow.src = "/assets/VectorArrow.svg";
                }
                
                    Products[key].map((product)=>{
                        if(product.color == '#FFC4A5' || product.color == '#FBE4CA' || product.color == '#F0DFB3' || product.color == '#FFD523'){
                            yellowArray.push(product.id)
                        }
                        if(product.color == '#88E379' || product.color == '#29D0D9' || product.color == '#4A5B40'){
                            greenArray.push(product.id)
                        }
                        if(product.color == '#89D5FF' || product.color == '#A5D4FF' || product.color == '#8ECDFA' || product.color == "#33C9F2"){
                            blueArray.push(product.id)
                        }
                        if(product.color == '#FA8EEF' || product.color == '#F0B3EA' || product.color == '#F0B5FA' || product.color == '#F18EFA' || product.color == '#F88EFA' || product.color == '#FF81C6'){
                            pinkArray.push(product.id)
                        }
                        if(product.color == '#CACFFB' || product.color == '#9381D8' || product.color == '#5C544A'){
                            lavandArray.push(product.id)
                        }
                        if(product.color == '#031D55'){
                            navyblueArray.push(product.id)
                        }
                    })
                    lastProductActiveMasiive= Products[key];
                   

                buttonmasive.forEach(function(item, i ,buttoncollection){
                    item.classList.remove("button_card_category_activate")})
                activebutton.classList.add("button_card_category_activate");
                var childimg = activebutton.querySelector("img");
                childimg.src="/assets/стрелкаae.svg"
                lastActiveCardsArrow = childimg;
                loadMoreState = 5;
                // activedCards = true;
                checkappendetting = true;
                categoryArea.innerHTML='';
                settingContainer.innerHTML="";

            
                const checkboxForm = setingcontainerElem.querySelector('[id=checkboxform]');
                let colorMassiveAr 
                
                //определение цвета
                checkboxForm.innerHTML=""
                colorsArray.forEach((color)=>{
                    if(color == "Зеленный"){
                        colorMassiveAr = greenArray; 
                    }
                    
                    if(color == "Синий"){
                        colorMassiveAr = navyblueArray; 
                    }
                    if(color == "Оранжевый"){
                        colorMassiveAr = yellowArray; 
                    }
                    if(color == "Розовый"){
                        colorMassiveAr = pinkArray; 
                    }
                    if(color == "Лавандовый"){
                        colorMassiveAr = lavandArray; 
                    }
                    if(color == "Голубой"){
                        colorMassiveAr = blueArray; 
                    }
                    console.log(colorMassiveAr)
                    let colorcontainer = document.createElement("div")
                    colorcontainer.className= "colorcontainer";
                    colorcontainer.innerHTML = `<input class="checkboxColor" onchange="filterOperation(this)" type="checkbox" id="${color}"> <label for="${color}">${color}</label> <span>${colorMassiveAr.length}</span>`;
                   
                    checkboxForm.append(colorcontainer);
                    })
                    //обращение к чекбоксам с цветом
                    var checkboxPsevdoArray= Array.from(checkboxForm.querySelectorAll('.checkboxColor'));
                  
                    //вынести элементы за
                    //for(var i = 0; i < checkboxPsevdoArray.length; i++){
                       // checkboxPsevdoArray[i].onchange= function(){
                            // categoryArea.innerHTML=""
                            // if(this.id == "Зеленный"){
                            //     lastActivatedColorArray.push(greenArray)
                            // }
                            // if(this.id == "Синий"){
                            //     lastActivatedColorArray.push(navyblueArray)
                            // }
                            // if(this.id == "Оранжевый"){
                            //     lastActivatedColorArray.push(yellowArray); 
                            // }
                            // if(this.id == "Розовый"){
                            //     lastActivatedColorArray.push(pinkArray)
                            // }
                            // if(this.id == "Лавандовый"){
                            //     lastActivatedColorArray.push(lavandArray)
                            // }
                            // if(this.id == "Голубой"){
                            //     lastActivatedColorArray.push(blueArray)
                            // }
                            // let nowcountelem = 0;
                            // let dadas = 0;
                            // const productcardEmpty = Products[key].map((product)=>{
                            //     //если id продукта соответсвует, то вывод карточки, то есть сравн
                            //     dadas++;
                            //     console.log(dadas)
                            //     lastActivatedColorArray.forEach((elem,index,arr)=>{
                                 
                            //         if(product.id == elem[0]){
                            //             nowcountelem++;
                            //             //попробовать просто скрывать эдементы, через display none
                            //             if(nowcountelem <= 5){
                            //                 console.log(nowcountelem)
                            //                 let cardproductcontainer = document.createElement("div");
                            //                 cardproductcontainer.className="card_product_container";
                            //                 cardproductcontainer.innerHTML=`<div style="background-color:${product.color};" class="color_card_section"></div>
                            //                             <img class="img_product_card" src=${product.photo}>
                            //                             <h2 class="h2_in_product_card">${product.name}</h2>
                            //                             <span class="subtitle subtitle_in_product_card">${product.category}</span>
                            //                             <hr class="hr_in_product_card">
                            //                             <div class="card_price_in_category">
                            //                                 <span class="numbers price">${product.price}</span>
                            //                                 <img>
                            //                             </div>
                            //                             <button class="card_buy_button_in_category" onclick="addcart(this.id, this.value)" value="${Products[categoryButtonActivateLast]}""${Products[key]}" id="${product.id}">
                            //                                <img src="/assets/shopping-cart.svg">
                            //                                <span>Купить</span> 
                            //                             </button>
                            //                         </div>`;
                            //                 categoryArea.append(cardproductcontainer)
                            //             }
                            //         }
                            //     })
                            
                            
                            
                            
                            // })
                            
                       // }
                   // }
                    //верхний элемент с кнопкой фильтров и количеством позиций
                cardsProductContainerSettingContainer.innerHTML=`
                 <button class="cards_product_container_setting_container_left button_cansel_setting" onclick="settingappendButton(this)">
                        <img src="/assets/VectorLe.svg">
                        <span class="uppfontstyle">фильтры</span>
                    </button>
                    <p class="cards_product_container_setting_container_right uppfontstyle">
                        <span >${Products[key].length}</span>
                        позиций в категории
                    </p>`;
                // овальная кнопка загрузки
                oneRingedOrderButton.innerHTML = `<div class="ringed_order_button_in_first"></div>
                <div class="ringed_order_button_in_title ringed_order_button_in_title_one_circle">
                    <span>Загрузить еще</span> 
                    <img src="/assets/arrow-down.svg">
                    
                </div>`;
                
               let nowcountelem = 0;
                 const productcardEmpty = Products[key].map((product)=>{
                    nowcountelem++;
                    if(nowcountelem <= 5){
                        let cardproductcontainer = document.createElement("div");
                        cardproductcontainer.className="card_product_container";
                        cardproductcontainer.innerHTML=`<div style="background-color:${product.color};" class="color_card_section"></div>
                                    <img class="img_product_card" src=${product.photo} onclick="modalcartFunc('${key}', '${product.id}')">
                                    <h2 class="h2_in_product_card" onclick="modalcartFunc('${key}', '${product.id}')">${product.name}</h2>
                                    <span class="subtitle subtitle_in_product_card" onclick="modalcartFunc('${key}', '${product.id}')">${product.category}</span>
                                    <hr class="hr_in_product_card">
                                    <div class="card_price_in_category">
                                        <span class="numbers price">${product.price}</span>
                                        <img>
                                    </div>
                                    <button class="card_buy_button_in_category" onclick="addcart(this.id, this.value)" value="${key}" id="${product.id}">
                                       <img src="/assets/shopping-cart.svg">
                                       <span>Купить</span> 
                                    </button>
                                </div>`;
                        categoryArea.append(cardproductcontainer)
                    }
                 
                 })
                
                 lastActiveCards = activebutton;
                 
            }
               
        }
        else if (lastActiveCards == activebutton) {
            loadMoreState=5;
            categoryArea.innerHTML="";
            settingContainer.innerHTML="";
            loadMoreState = false
            cardsProductContainerSettingContainer.innerHTML="";
            oneRingedOrderButton.innerHTML="";
            buttonmasive.forEach(function(item, i ,buttoncollection){
                item.classList.remove("button_card_category_activate")})
                childimg = activebutton.querySelector("img");
                childimg.src="/assets/VectorArrow.svg"
            lastActiveCards = null;
            document.querySelector(".cards_product_container_cover").style.display="none";
        }
      
       }
       
    }//если что при рендеринге немного изменить id на id с препиской button
}

var ribbonF = document.getElementById("firstRibbon")
var ribbonS = document.getElementById("secondRibbon")
var ribbbonwidth = window.screen.width / 384;


for (let i = 0; i <= ribbbonwidth; i++){
    ribbonF.innerHTML += `<span>creating a great art</span>
                        <img src="/assets/Star 3.svg">`;
    ribbonS.innerHTML += `<span>creating a great art</span>
                        <img src="/assets/Star 3.svg">`;
}

function scrollToelement(scrolling){
    document.getElementById(`${scrolling.value}`).scrollIntoView()
}