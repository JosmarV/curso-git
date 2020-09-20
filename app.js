(function(){
    //valores
    var numbers = document.querySelectorAll('div .numbers'),
        operator = document.querySelectorAll('div .operator');

    var print = function () {
      //Como detectar cual fue el elemento presionado
      
    }

    for (var i = 0; i < numbers.length; i++) {
        numbers[i].addEventListener("click",print);
    }
}());
