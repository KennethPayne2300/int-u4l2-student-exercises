let buttonOne = document.querySelector(".button-one");
let buttonTwo = document.querySelector(".button-two");
let captionOne = document.querySelector(".caption-one");
let captionTwo = document.querySelector(".caption-two");

buttonOne.addEventListener("click", function() {
    // 1. Declare a variable named spidyCaption.
    //  - Store the value of the input with a class of "comment-one".
    let spidyCaption = document.querySelector(".comment-one").value;

    // 2. Display the variable spidyCaption to captionOne.
    captionOne.innerHTML = `<h2>${spidyCaption}</h2>`;

});

// 3. Repeat the previous steps for the second meme.
//  - Be sure to store variables for the button and caption.
buttonTwo.addEventListener("click", function() {
    let kermitCaption = document.querySelector(".comment-two").value;

    captionTwo.innerHTML = `<h2>${kermitCaption}</h2>`;
});