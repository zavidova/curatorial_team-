if ($.cookie("popup_1_2") == null) {   $.cookie("popup_1_2", "2"); }  if ($.cookie("popup_1_2") == 2) {   $('#modaluser').addClass('show');   $.cookie("popup_1_2", "2"); }



// mouse position tracker
$(document).bind('mousemove', function(e){
  $('#tail').css({
    width:  e.pageX + 20
  });
});

$(document).bind('mousemove', function(e){
  $('#tail-vert').css({
    height: e.pageY + 20
  });
});

$(document).bind('mousemove', function(e){
  $('#tail-right').css({
    width:  ($(window).width() -e.pageX + 20)
  });
});

$(document).bind('mousemove', function(e){
  $('#tail-vert-right').css({
    height: ($(window).height() - e.pageY + 20)
  });
});

$(document).ready(function(){

  $('#mateo').click(function(){
    $('#righttext a').removeClass("active-designer");
    $(this).addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.mateo-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#julia').click(function(){
    $('#righttext a').removeClass("active-designer");
    $(this).addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.julia-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#anastasia').click(function(){
    $('#righttext a').removeClass("active-designer");
    $(this).addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.anastasia-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#asja').click(function(){
    $('#righttext a').removeClass("active-designer");
    $(this).addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.asja-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });


  $('#sherida').click(function(){
    $('.righttext a').removeClass("active-designer");
    $(this).addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.sherida-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#stefanie').click(function(){
    $('.righttext a').removeClass("active-designer");
    $(this).addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.stefanie-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#heikki').click(function(){
    $('.righttext a').removeClass("active-designer");
    $(this).addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.heikki-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#juan').click(function(){
    $('.righttext a').removeClass("active-designer");
    $(this).addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.juan-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#tereza').click(function(){
    $('#righttext a').removeClass("active-designer");
    $(this).addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.tereza-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });
});




$(document).ready(function(){
  $("#hide").click(function(){
    $(".paywall").hide();
  });
  $("#show").click(function(){
    $(".paywall").show();
  });
});



function randomFromTo(from, to){
  return Math.floor(Math.random() * (to - from + 1) + from);
}

function moveRandom(obj) {
  /* get container position and size
   * -- access method : cPos.top and cPos.left */
  var cPos = $('.projects').offset();
  var cHeight = $('.projects').height();
  var cWidth = $('.projects').width();

  // get box padding (assume all padding have same value)
  var pad = parseInt($('.projects').css('padding-top').replace('px', ''));

  // get movable box size
  var bHeight = obj.height();
  var bWidth = obj.width();

  // set maximum position
  maxY = cPos.top + cHeight - bHeight - pad;
  maxX = cPos.left + cWidth - bWidth - pad;

  // set minimum position
  minY = cPos.top + pad;
  minX = cPos.left + pad;

  // set new position
  newY = randomFromTo(minY, maxY);
  newX = randomFromTo(minX, maxX);

  obj.animate({

    top: newY,
    left: newX,


  } , 14000, function() {
    moveRandom(obj);

  });
}
$('.project').each(function() {
  moveRandom($(this));
});







$(document).ready(function(){
  function showTime(){
    // to get current time/ date.
    var date = new Date();
    // to get the current hour
    var h = date.getHours();
    // to get the current minutes
    var m = date.getMinutes();
    //to get the current second
    var s = date.getSeconds();
    // AM, PM setting
    var session = "AM";

    //conditions for times behavior
    if ( h == 0 ) {
      h = 12;
    }
    if( h >= 12 ){
      session = "PM";
    }

    if ( h > 12 ){
      h = h - 12;
    }
    m = ( m < 10 ) ? m = "0" + m : m;
    s = ( s < 10 ) ? s = "0" + s : s;

    //putting time in one variable
    var time = h + ":" + m + ":" + s + " " + session;
    //putting time in our div
    $('#clock').html(time);
    //to change time in every seconds
    setTimeout( showTime, 1000 );
  }
  showTime();
});







var date = new Date().toString().match(/([A-Z]+[\+-][0-9]+.*)/)[1];
document.getElementById('timezone').innerHTML = date;


var milliseconds = 0;
var seconds = 00;
var minutes = 00;
var counting = false;
var format = ("0" + "0").slice(-2);






window.onload = startCounting;
function startCounting(){
  counting = true;
}

function reset(){
  milliseconds = format;
  seconds = format;
  minutes = format;
  document.getElementById("time").innerHTML = minutes + ":" + seconds + ":" + milliseconds;
}

function stopCounting(){
  if(counting == false){
    reset();
  }else{
    counting = false;
  }

}

setInterval(function(){
  if(counting == true){
    milliseconds++;
    if(milliseconds == 100){
      milliseconds = format;
      seconds++;
    }
    if(seconds == 60){
      seconds = format;
      minutes++;
    }
    if(minutes == 60){
      counting = false;
    }
    document.getElementById("time").innerHTML = ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2) + ":" + ("0" + milliseconds).slice(-2);}
}, 10);

$(document).ready(function(){
  $(document).mousemove(function(e){    document.getElementById("posX").innerHTML = e.pageX;
    $('#posY').html(e.pageY);
  });
});