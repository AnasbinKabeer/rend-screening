
// public/scripts/data.js
var startBtn = document.getElementById('start_btn');
var second_start_btn = document.getElementById('second_start_btn');
var resultScreen = document.querySelector('.result_no_screen');
var resultMainScreen = document.querySelector('.result_main_screen');
var animaion = document.querySelector('.result_main_screen_left');
var first_box_cont = document.querySelector('.first_container');
var first_btn = document.getElementById('first_btn');
var second_box_cont = document.querySelector('.second_container');
var second_btn = document.getElementById('second_btn');
var third_box_cont = document.querySelector('.third_container');
var third_btn = document.getElementById('third_btn');

var screen_left_programme_name = document.querySelector('.screen_left_programme_name')
var result_no_small = document.querySelector('.result_no_small')
var screen_left_category = document.querySelector('.screen_left_category')
var reset_btn = document.getElementById('reset_btn');

var timerStartBtn = document.getElementById('timer-start-btn')
var timerResetbtn = document.getElementById('timer-reset-btn')
var timer_div = document.querySelector('.timer_div')




second_start_btn.addEventListener('click', function(){
  // Toggle the 'active' class for 'animaion' and 'screen_left_programme_name'
  animaion.classList.toggle('active');

  setTimeout(function() {
    result_no_small.classList.toggle('active');
  }, 800); // 5000 milliseconds = 5 seconds
  // Set a timeout to add the 'active' class to 'screen_left_programme_name' after 5 seconds
  setTimeout(function() {
    screen_left_programme_name.classList.toggle('active');
  }, 1000); // 5000 milliseconds = 5 seconds

  setTimeout(function() {
    screen_left_category.classList.toggle('active');
  }, 1500); // 5000 milliseconds = 5 seconds


  if (animaion.classList.contains('active')) {
    second_start_btn.textContent = 'Stop';
    second_start_btn.style.background = '#232241';
  } else {
    second_start_btn.textContent = 'Start';
    second_start_btn.style.background = '';
  }
});


startBtn.addEventListener('click', function() {


  resultScreen.classList.toggle('inactive');
  resultMainScreen.classList.toggle('active');


  if (resultScreen.classList.contains('inactive')) {
    startBtn.textContent = 'Screen 02';
    startBtn.style.background = '#CC0202';
  } else {
    startBtn.textContent = 'Screen 01';
    startBtn.style.background = '#008000';
  }
});


first_btn.addEventListener('click', function() {
  // Toggle the 'inactive' class on the result_screen element
  first_box_cont.classList.toggle('show');

  if (first_box_cont.classList.contains('show')) {
    first_btn.textContent = 'Hide first';
    first_btn.style.background = '#232241';
  } else {
    first_btn.textContent = 'First';
    first_btn.style.background = '';
  }

});


second_btn.addEventListener('click', function() {
  // Toggle the 'inactive' class on the result_screen element
  second_box_cont.classList.toggle('show');

  if (second_box_cont.classList.contains('show')) {
    second_btn.textContent = 'Hide Second';
    second_btn.style.background = '#232241';
  } else {
    second_btn.textContent = 'Second';
    second_btn.style.background = '';
  }

});

third_btn.addEventListener('click', function() {
  // Toggle the 'inactive' class on the result_screen element
  third_box_cont.classList.toggle('show');

  if (third_box_cont.classList.contains('show')) {
    third_btn.textContent = 'Hide Third';
    third_btn.style.background = '#232241';
  } else {
    third_btn.textContent = 'Third';
    third_btn.style.background = '';
  }

});

reset_btn.addEventListener('click', function(){
  first_box_cont.classList.remove('show');
  second_box_cont.classList.remove('show');
  third_box_cont.classList.remove('show');

  result_no_small.classList.remove('active');
  screen_left_programme_name.classList.remove('active');
  screen_left_category.classList.remove('active');
  animaion.classList.remove('active');

second_start_btn.classList.remove('active');


if (animaion.classList.contains('active')) {
    second_start_btn.textContent = 'Stop';
    second_start_btn.style.background = '#232241';
  } else {
    second_start_btn.textContent = 'Start';
    second_start_btn.style.background = '';
  }
  
  if (first_box_cont.classList.contains('show')) {
    first_btn.textContent = 'Hide first';
    first_btn.style.background = '#232241';
  } else {
    first_btn.textContent = 'First';
    first_btn.style.background = '';
  }


  if (second_box_cont.classList.contains('show')) {
    second_btn.textContent = 'Hide Second';
    second_btn.style.background = '#232241';
  } else {
    second_btn.textContent = 'Second';
    second_btn.style.background = '';
  }

  
  if (third_box_cont.classList.contains('show')) {
    third_btn.textContent = 'Hide Third';
    third_btn.style.background = '#232241';
  } else {
    third_btn.textContent = 'Third';
    third_btn.style.background = '';
  }

});


timerStartBtn.addEventListener('click', function(){

timerStartBtn.classList.toggle('btn-danger');



timer_div.classList.add('show')

if (timerStartBtn.classList.contains('btn-danger')) {
  timerStartBtn.textContent = 'Stop';

} else {
  timerStartBtn.textContent = 'Start';
 
}
})


timerResetbtn.addEventListener('click', function(){
  timerStartBtn.classList.remove('btn-danger')
  timer_div.classList.remove('show')

  if (timerStartBtn.classList.contains('btn-danger')) {
    timerStartBtn.textContent = 'Stop';
  
  } else {
    timerStartBtn.textContent = 'Start';
   
  }

})