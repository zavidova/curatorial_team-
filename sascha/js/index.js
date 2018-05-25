if ($.cookie("popup_1_2") == null) {
    $.cookie("popup_1_2", "2");
}

if ($.cookie("popup_1_2") == 2) {
    $('#modaluser').addClass('show');
    $.cookie("popup_1_2", "2");
}



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