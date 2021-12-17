$(document).ready(function() {
  console.log("This is working");


  

});

// blur event
// keydown event
// keyup event
// keypress event
// change event
// input event

// Register an event handler to the textarea element for the form inside of the .new-tweet section
const $formSubmission = $("#tweet-text").on("input",function(event) {
  event.preventDefault();
  let tweetLength = $(this).val().length;
  // console.log("this:",$(this));
  // console.log("this.parent:", $(this).parent().children().children().next());
  // console.log("this.parent.value:",$(this).parent);
  // $(this).parent().children().children().next().replaceWith(`${140 - event.target.value.length}`);
  if (140 - tweetLength >= 0) {
    $(this).parent().children().children().next().html(`${140 - tweetLength}`);
  } else {
    $(this).parent().children().children().next().html(`<div style="color:red;">${140 - tweetLength}</div>`);
  }

});

// const $formSubmission = $("#tweet-text").on("blur", function(event) {
//   event.preventDefault();
//   // console.log($(this));
 
//   // $("#counter-num").replaceWith(`${counterNum}`);
//   console.log("blur, function called");

// });




// console.log("event.target.value:", event.target.value);
// const $formSubmission = $('.tweet-form');
// $formSubmission.on('submit', function(e) {
//   e.preventDefault();
// });