var firstslide = document.querySelector(".first_slide");
var second_slide =document.querySelector(".second_slide");
var third_slide =document.querySelector(".third_slide");
var activeslidenow;
var slideArr= [firstslide, second_slide, third_slide]
function toggleslide(slide){

    slide.addEventListener("click", function(){
        //if(activeslidenow==undefined && slide==firstslide){}
        if(activeslidenow != slide){
            if(slide.classList.contains('disable_slide')){
                var chilslide = slide.querySelector('.disable_slide_card')
                chilslide.classList.remove('disable_slide_card');
                chilslide.classList.add('active_slide_card');
                slide.classList.remove('disable_slide');
                slide.classList.add('active_slide');
                activeslidenow= slide;
                for(var noelem in slideArr){
                    if(slideArr[noelem] != slide){
                       
                        if(slideArr[noelem].classList.contains('active_slide')){
                            var chilslider = slideArr[noelem].querySelector('.active_slide_card')
                            chilslider.classList.remove('active_slide_card');
                            chilslider.classList.add('disable_slide_card');
                            slideArr[noelem].classList.remove('active_slide');
                            slideArr[noelem].classList.add('disable_slide');
                            
                          
                        }
                    }
                }
            }
            else if(slide.classList.contains('active_slide')){
                var chilslide = slide.querySelector('.active_slide_card')
                chilslide.classList.remove('active_slide_card');
                chilslide.classList.add('disable_slide_card');
                slide.classList.remove('active_slide');
                slide.classList.add('disable_slide');
                
              
            }
            if(slideArr[0].classList.contains("disable_slide")){
                Products.Lamps.map((product)=>{
                    if(product.isTopProduct){
                        if(slideArr[0].classList.contains("disable_slide")){
                            slideArr[0].style.backgroundColor = product.color;
                        };
                    }
                })
            };
            if(slideArr[0].classList.contains("active_slide")){
                Products.Lamps.map((product)=>{
                    if(product.isTopProduct){
                        if(slideArr[0].classList.contains("active_slide")){
                            slideArr[0].style.backgroundColor = 'rgba(255, 255, 255, 0)';
                        };
                    }
                })
            };
        }
        
        
    })
}
toggleslide(firstslide);
toggleslide(second_slide); 
toggleslide(third_slide);
