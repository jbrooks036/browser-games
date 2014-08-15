(function(){
  'use strict';

  $(document).ready(function(){
    $('#controls > button').click(addBoxes);
    $('#boxes').on('mouseenter', '.box', paintBackground);  //when mouse enters .box under #boxes then paintBackground
    alert('this is an alert - when document ready');
  });

  function paintBackground(){
    // console.log(this);
    var color = $(this).css('background-color');  //extract bg color of box hovered over
    $('body').css('background-color', color);  // change bg color of page body
    // console.log(color);                  
  }

  function addBoxes(){
    var count = $('input[name=count]').val() * 1;
    for(var i = 0; i < count; i++){
      var $box = $('<div>');
      $box.addClass('box');
      $box.css('background-color', randomColor());
      $('#boxes').prepend($box);
    }
  }

  function randomColor(){
    var red = Math.floor(Math.random() * 256),
        grn = Math.floor(Math.random() * 256),
        blu = Math.floor(Math.random() * 256),
        alp = Math.random(),   //alpha transparency
        str = 'rgba('+red+','+grn+','+blu+','+alp+')';   // to create string:  "rgb(5, 15, 200, <alpha>)"
    console.log(str);
    return str;
  }

})();

