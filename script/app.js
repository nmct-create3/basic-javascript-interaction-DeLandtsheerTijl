"use strict"

document.addEventListener( 'DOMContentLoaded', function() {
   console.log( 'Script loaded!' );
   handleFloatingLabel();
   togglepassword();
   handleQualityRange();
});

function handleFloatingLabel(){
    let label = document.querySelector('.js-floating-label');
    let input = document.querySelector('.js-name-input');

    input.addEventListener('blur', function(){
        console.log(event);
        if(input.value){
            label.classList.add('is-floating');
        }
        else{
            label.classList.remove('is-floating');
        }
    });
}

function togglepassword(){
    let input = document.querySelector('.js-password-input');
    let inputcheckbox = document.querySelector('.js-password-toggle');

    inputcheckbox.addEventListener('click', function(){
        if(input.type === "text"){
            input.type = "password";
        }
        else{
            input.type = "text";
        }
    })
}

function handleQualityRange(){
  let rangeInput = document.querySelector('.js-quality-input'),
  rangeholder = document.querySelector('.js-range-holder');
  rangeInput.addEventListener('input', function(){
    rangeholder.setAttribute('data-value', rangeInput.value);
    console.info(rangeInput.value);
    rangeholder.style.marginLeft =  `${rangeInput.value}%`;
  });
}
