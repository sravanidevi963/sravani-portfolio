
const text = "Full Stack Web Developer";
let index = 0;

function typeEffect(){

  document.querySelector('.typing-text').innerHTML = text.slice(0,index);

  index++;

  if(index > text.length){
    index = 0;
  }

  setTimeout(typeEffect,150);
}

typeEffect();
