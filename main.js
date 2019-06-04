
let div=document.querySelector('.div1');
div.onclick=function(event){
    let tar = event.target;
    console.log(event.target.tagName);
}

