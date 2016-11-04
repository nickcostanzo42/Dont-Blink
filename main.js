
   console.log('javascript loaded')

   //Declaring variables to grab
   var counter = 0;
   var $doorsClick = $('.click');
   var $startButton = $('#start');
   //Door jQuery objects
   var $doorOne = $('#img1');
   var $doorTwo = $('#img2');
   var $doorThree = $('#img3');
   var $doorFour = $('#img4');
   var $doorFive = $('#img5');

   var startGame = function(){
     //Call the function that starts timer and calls the monsterSpawn function
   };

   var monsterSpawn = function(){
     //Have it randomly attach one of the doorOpen classes to
     //one of the doors
     if (counter < 4) {

    var doorChoose = Math.ceil(Math.random() * 5);
    var classChoose = Math.ceil((Math.random() * 3) + 1);

     //Have it do it at different intervals depending on the time in the game
       if(!$('#img' + doorChoose).hasClass('openDoor3s') &&
         !$('#img' + doorChoose).hasClass('openDoor4s') &&
         !$('#img' + doorChoose).hasClass('openDoor2s'))
       {
         $('#img' + doorChoose).addClass('openDoor' + classChoose + 's');
         counter++;
       }
       else {
         monsterSpawn();
       }

     } else {
       //do nothing
     }
   };




 //Make each jQuery object a seperate class
   var addEventListeners = function(){

   for (var i = 1; i < 6; i++){
     $('#img' + i).click(function(){
    if ($(this).hasClass('openDoor4s') ||
        $(this).hasClass('openDoor3s') ||
         $(this).hasClass('openDoor2s'))
       {
       $(this).removeClass('openDoor4s');
       $(this).removeClass('openDoor3s');
       $(this).removeClass('openDoor2s');
       counter -= 1;
     }

     console.log('click')
    })
   }
 }

 addEventListeners();





