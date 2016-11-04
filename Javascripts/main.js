
  console.log('javascript loaded')

  //Declaring variables to grab
  var counter = 0;
  var $doorsClick = $('.click');
  var $startButton = $('#start');
  var $timerText = $('#timer');
  //Door jQuery objects
  var $doorOne = $('#img1');
  var $doorTwo = $('#img2');
  var $doorThree = $('#img3');
  var $doorFour = $('#img4');
  var $doorFive = $('#img5');
  //interval variable
  var startTimer = 0;



  var startGame = function(){
    timerFunc();
    monsterSpawn();
  };

//Seperate timer functions for different parts of the game
  var timerFunc = function(){
    firstInterval = setInterval(function(){
      startTimer += 1;
      $('#timer').html(startTimer);
  }, 1000);
}


  var monsterSpawn = function(){
//Makes it the doors open faster as the function goes on.
    if (startTimer === 0){
      spawnInterval = setInterval(monsterSpawn, 2000)
    }
    if (startTimer === 10){
      clearInterval(spawnInterval);
      spawnInterval2 = setInterval(monsterSpawn, 1500);
    }
    else if (startTimer === 20){
      clearInterval(spawnInterval2)
      spawnInterval3 = setInterval(monsterSpawn, 1000)
    }
    else if (startTimer === 35){
      clearInterval(spawnInterval3)
      spawnInterval4 = setInterval(monsterSpawn, 800)
    }


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
        $('#door' + doorChoose).removeClass()
        $('#door' + doorChoose).addClass('monster' + classChoose + 's');
        $('#img' + doorChoose).addClass('openDoor' + classChoose + 's');
        counter++;
      }
      else {
        monsterSpawn();
      }

    } else {
      //do nothing
    }
    $('#img' + doorChoose).on('animationend', function(){
      $('.click').off()
      endGame();
    });

  };


  var endGame = function(){

    counter = 0;

    for (var i = 1; i < 20; i++){
        window.clearInterval(i);
      }

    $('#timer').html('0');

    startTimer = 0;

    for (var i = 1; i < 6; i++){
      $('#img' + i).removeClass('openDoor4s');
      $('#img' + i).removeClass('openDoor3s');
      $('#img' + i).removeClass('openDoor2s');
    }

  for (var i = 1; i < 6; i++){

  }

}



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

  $('#start-button').click(function(){
    startGame();
  })
}

addEventListeners();
