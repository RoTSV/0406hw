
let div=document.querySelector('.div1');
div.addEventListener ('click', function(){
    div=event.target;
    console.log(div.tagName);
});

