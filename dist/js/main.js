var next , prev,slides,index;
next=document.querySelector('.next');
prev=document.querySelector('.prev');
slides=document.querySelectorAll('.slide');
index=0;
next.addEventListener('click',nextSlide);
prev.addEventListener('click',prevSlide);

function sliderShow(){
    slides.forEach(function(cur){
        cur.style.display='none';
      });
      slides[index].style.display='flex';
}
sliderShow();


function nextSlide(){
    index++;
    if(index>slides.length-1){
        index=0;
    }
 sliderShow();
}


function prevSlide(){
    index--;
    if(index<0){
        index=slides.length-1;
    }
 sliderShow();
};

document.addEventListener('keyup',function(event){
    if(event.keyCode=== 39 || event.which === 39){
        nextSlide();
    }
    });

    document.addEventListener('keyup',function(event){
        if(event.keyCode=== 37 || event.which === 37){
            prevSlide();
        }
        });