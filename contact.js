

const map = document.getElementById("mapPage");
function showMap(mapId){
    map.showModal()
}
function navButonsResize(){
   var navResized =  document.querySelector(".disable_slide").offsetWidth;
   var navResizedCount = navResized / 2.57575757;
   document.querySelector(".user_manipulation_container").style.width=`${navResizedCount}px`;
}