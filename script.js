(function(){
    'use strict';
    console.log('reading js');

    const listOfTogglable = document.querySelectorAll('.toggable');
    const myButton = document.querySelector('.toggle');
    const myHeader = document.querySelector('header img');
    let darkMode = true;
    // console.log(listOfTogglable);
     
    myButton.addEventListener('click', function(){
        console.log('button clivked');
        toggleColors()
    });

    function toggleColors(){
        if (darkMode){
            //switch to light
            for (let i = 0; i < listOfTogglable.length; i++){
                listOfTogglable[i].classList = 'toggable light'
            }
            myButton.classList = 'lightbtn toggle';
            myHeader.src = "images/header_light.svg";
            darkMode = false;
        } else {
            //switch to dark
            for (let i = 0; i < listOfTogglable.length; i++){
                listOfTogglable[i].classList = 'toggable dark'
            }
            myButton.classList = 'darkbtn toggle';
            myHeader.src = "images/header_dark.svg";

            darkMode = true;

        }
    }
})();