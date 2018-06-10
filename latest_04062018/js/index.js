if ($.cookie("popup_1_2") == null) {
  $(".paywall").addClass("show-paywall-fast");
  $(".paywall-contents").addClass("show-paywall-content-fast");
  $.cookie("popup_1_2", "2");
}
if ($.cookie("popup_1_2") == 2) {
  $.cookie("popup_1_2", "2");
}



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

setTimeout( function(){
  $('.loader').addClass("show-loader");
}  , 200 );


$(document).ready(function(){

    var helvetica = 'helvetica neue, arial, helvetica, sans-serif';
    var ming = 'PMingLiU, sans-serif';

  $("#mateo, #mateo-image").mouseover(function() {
      $("#centertitle, #bottomlefttitle").css({ 'font-family':ming});
    $( "#centertitle .left-replace" ).text( "Services" );
    $( "#centertitle .right-replace" ).text( "Célestes" );
    $( "#bottomlefttitle .left-replace" ).text( "Services" );
    $( "#bottomlefttitle .right-replace" ).text( "Célestes" );
  });

  $("#sherida, #sherida-image").mouseover(function() {
      $("#centertitle, #bottomlefttitle").css({ 'font-family':ming});
    $( "#centertitle .left-replace" ).text( "Hemelse" );
    $( "#centertitle .right-replace"  ).text( "Diensten" );
    $( "#bottomlefttitle .left-replace" ).text( "Hemelse" );
    $( "#bottomlefttitle .right-replace"  ).text( "Diensten" );
  });

  $("#asja, #asja-image").mouseover(function() {
      $("#centertitle, #bottomlefttitle").css({ 'font-family':ming});
    $( "#centertitle .left-replace").text( "Hemelse" );
    $( "#centertitle .right-replace").text( "Diensten" );
    $( "#bottomlefttitle .left-replace").text( "Hemelse" );
    $( "#bottomlefttitle .right-replace").text( "Diensten" );
  });

  $("#anastasia, #anastasia-image").mouseover(function() {
      $("#centertitle, #bottomlefttitle").css({ 'font-family':helvetica});
    $( "#centertitle .left-replace" ).text( "Небесные" );
    $( "#centertitle .right-replace" ).text( "Службы" );
    $( "#bottomlefttitle .left-replace").text( "Небесные" );
    $( "#bottomlefttitle .right-replace").text( "Службы" );
});

$("#julia, #julia-image").mouseover(function() {
    $("#centertitle, #bottomlefttitle").css({ 'font-family':ming});
  $( "#centertitle .left-replace" ).text( "Serviços" );
  $( "#centertitle .right-replace").text( "Celestes" );
  $( "#bottomlefttitle .left-replace").text( "Serviços" );
  $( "#bottomlefttitle .right-replace").text( "Celestes" );
});

  $("#heikki, #heikki-image").mouseover(function() {
      $("#centertitle, #bottomlefttitle").css({ 'font-family':ming});
    $( "#centertitle .left-replace" ).text( "Taivas" );
    $( "#centertitle .right-replace" ).text( "Palvelut" );
    $( "#bottomlefttitle .left-replace").text( "Taivas" );
    $( "#bottomlefttitle .right-replace").text( "Palvelut" );
  });

  $("#stefanie, #stefanie-image").mouseover(function() {
      $("#centertitle, #bottomlefttitle").css({ 'font-family':ming});
    $( "#centertitle .left-replace" ).text( "Himmlische" );
    $("#centertitle .right-replace" ).text( "Dienste" );
    $( "#bottomlefttitle .left-replace" ).text( "Himmlische" );
    $("#bottomlefttitle .right-replace" ).text( "Dienste" );
  });

  $("#juan, #juan-image").mouseover(function() {
      $("#centertitle, #bottomlefttitle").css({ 'font-family':ming});
    $( "#centertitle .left-replace" ).text( "Servicios" );
    $( "#centertitle .right-replace" ).text( "Celestiales" );
    $( "#bottomlefttitle .left-replace" ).text( "Servicios" );
    $("#bottomlefttitle .right-replace" ).text( "Celestiales" );
  });

  $("#tereza, #tereza-image").mouseover(function() {
      $("#centertitle, #bottomlefttitle").css({ 'font-family':ming});
    $( "#centertitle .left-replace" ).text( "Nebeské" );
    $( "#centertitle .right-replace").text( "Sluzby" );
    $( "#bottomlefttitle .left-replace" ).text( "Nebeské" );
    $( "#bottomlefttitle .right-replace").text( "Sluzby" );
  });


});

$.get("https://api.ipdata.co", function (response) {
    $( ".location .city" ).text(response.country_code);
    $( ".location .country-code" ).text(response.continent_code);
}, "jsonp");

$('.marquee').marquee({
    direction: 'right',
    startVisible: true,
    duplicated:true,
    pauseOnHover:true,
    duration: 60000,
    delayBeforeStart:100,
    gap:0
});



$(function () {
    var parent = $(".single-images .only-images");
    var divs = $(".single-images .only-images img");
    while (divs.length) {
        parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
    }
});

$('.random').each(function(){

    $(this).css({ 'top':randomXToY(0,10),
        'left': randomXToY(0,10)
    });
});

// in case it's useful, my random function is just:

function randomXToY(minVal,maxVal,floatVal){
    var randVal = minVal+(Math.random()*(maxVal-minVal));
    return typeof floatVal=='undefined'?Math.round(randVal):randVal.toFixed(floatVal);
}




$(document).ready(function(){

  $('#mateo-image').mouseover(function() {
    $('#mateo').addClass("active-designer");
  });
  $('#mateo-image').mouseout(function() {
    $('#mateo').removeClass("active-designer");
  });

  $('#julia-image').mouseover(function() {
    $('#julia').addClass("active-designer");
  });
  $('#julia-image').mouseout(function() {
    $('#julia').removeClass("active-designer");
  });

  $('#asja-image').mouseover(function() {
    $('#asja').addClass("active-designer");
  });
  $('#asja-image').mouseout(function() {
    $('#asja').removeClass("active-designer");
  });

  $('#anastasia-image').mouseover(function() {
    $('#anastasia').addClass("active-designer");
  });
  $('#anastasia-image').mouseout(function() {
    $('#anastasia').removeClass("active-designer");
  });

  $('#sherida-image').mouseover(function() {
    $('#sherida').addClass("active-designer");
  });
  $('#sherida-image').mouseout(function() {
    $('#sherida').removeClass("active-designer");
  });

  $('#heikki-image').mouseover(function() {
    $('#heikki').addClass("active-designer");
  });
  $('#heikki-image').mouseout(function() {
    $('#heikki').removeClass("active-designer");
  });

  $('#stefanie-image').mouseover(function() {
    $('#stefanie').addClass("active-designer");
  });
  $('#stefanie-image').mouseout(function() {
    $('#stefanie').removeClass("active-designer");
  });

  $('#juan-image').mouseover(function() {
    $('#juan').addClass("active-designer");
  });
  $('#juan-image').mouseout(function() {
    $('#juan').removeClass("active-designer");
  });

  $('#tereza-image').mouseover(function() {
    $('#tereza').addClass("active-designer");
  });
  $('#tereza-image').mouseout(function() {
    $('#tereza').removeClass("active-designer");
  });

  $(document).keyup(function(e) {
    if (e.keyCode == 27) {
      $( '.thumb' ).removeClass( "pointer-events-off" );
      $('.righttext a').removeClass("active-designer");
      $('.designer-content').removeClass("show-content");
      $('.lefttext').removeClass("hide-content");
      $('#righttext a').removeClass("active-designer");
    }
  });

  $(".toptitles, .bottom-paremeters").click(function() {
    $( '.thumb' ).removeClass( "pointer-events-off" );
    $('.righttext a').removeClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.lefttext').removeClass("hide-content");
    $('#righttext a').removeClass("active-designer");
  });



  $('#mateo, #mateo-image').click(function(){
    $( '.thumb' ).addClass( "pointer-events-off" );
    $('.righttext a').removeClass("active-designer");
    $('#mateo').addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.mateo-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });


  $('#julia, #julia-image').click(function(){
    $( '.thumb' ).addClass( "pointer-events-off" );
    $('.righttext a').removeClass("active-designer");
    $('#julia').addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.julia-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#anastasia, #anastasia-image').click(function(){
    $( '.thumb' ).addClass( "pointer-events-off" );
    $('.righttext a').removeClass("active-designer");
    $('#anastasia').addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.anastasia-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#asja, #asja-image').click(function(){
    $( '.thumb' ).addClass( "pointer-events-off" );
    $('.righttext a').removeClass("active-designer");
    $('#asja').addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.asja-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });


  $('#sherida, #sherida-image').click(function(){
    $( '.thumb' ).addClass( "pointer-events-off" );
    $('.righttext a').removeClass("active-designer");
    $('#sherida').addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.sherida-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#stefanie, #stefanie-image').click(function(){
    $( '.thumb' ).addClass( "pointer-events-off" );
    $('.righttext a').removeClass("active-designer");
    $('#stefanie').addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.stefanie-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#heikki, #heikki-image').click(function(){
    $( '.thumb' ).addClass( "pointer-events-off" );
    $('.righttext a').removeClass("active-designer");
    $('#heikki').addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.heikki-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#juan, #juan-image').click(function(){
    $( '.thumb' ).addClass( "pointer-events-off" );
    $('.righttext a').removeClass("active-designer");
    $('#juan').addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.juan-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });

  $('#tereza, #tereza-image').click(function(){
    $( '.thumb' ).addClass( "pointer-events-off" );
    $('#righttext a').removeClass("active-designer");
    $('#tereza').addClass("active-designer");
    $('.designer-content').removeClass("show-content");
    $('.tereza-content').addClass("show-content");
    $('.lefttext').addClass("hide-content");
  });
});




$(document).ready(function(){

  $(".paywall .button").click(function(){
    $(".paywall").addClass("hide-paywall");
    $(".paywall-contents").addClass("hide-paywall-content");
    $(".paywall").removeClass("show-paywall-fast");
    $(".paywall-contents").removeClass("show-paywall-content-fast");
  });

  $(".trigger-paywall").click(function(){
    $(".paywall").removeClass("hide-paywall");
    $(".paywall-contents").removeClass("hide-paywall-content");
    $(".paywall").addClass("show-paywall-fast");
    $(".paywall-contents").addClass("show-paywall-content-fast");
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


