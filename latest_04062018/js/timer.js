$(document).ready(function(){

    var d = new Date();
    var n = d.getDay();
    var daymoods = ['Angry', 'Ready', 'Worried', 'Dreamy', 'Energised', 'Slow', 'Exited'];
    var daymoods2 = ['Slacking', 'Tragic', 'Slow', 'Nervous', 'Exited', 'Undecided', 'Chaotic'];
   // function getMessage() {
   //     return daymoods[Math.floor(Math.random() * daymoods.length)];
    // }

    var thehours = new Date().getHours();


        //getting ready

    if (thehours >= 7 && thehours < 10) {
        $('body').addClass("morning-body");
        $('.mood').text( "Hopeful" );
        $('.morning-watermark, .morning-logos').addClass("show-during-time");
        $('.thumb').addClass("thumbs-morning");

        //working
    } else if (thehours >= 10 && thehours < 14) {
        $('.work-watermark, .work-logos').addClass("show-during-time");
        //submode: Angry
        if (daymoods[n-1] == 'Angry') {
            $('body').addClass("angry-body");
            $('.mood').text("Angry");
        }
        else if (daymoods[n-1] == 'Ready') {
            $('body').addClass("work-body");
            $('.mood').text("Ready");
        }
        else if (daymoods[n-1] == 'Worried') {
            $('body').addClass("work-body");
            $('.mood').text("Worried");
        }
        else if (daymoods[n-1] == 'Dreamy') {
            $('body').addClass("work-body");
            $('.mood').text("Dreamy");
        }
        else if (daymoods[n-1] == 'Energised') {
            $('body').addClass("work-body");
            $('.mood').text("Energised");
        }
        else if (daymoods[n-1] == 'Slow') {
            $('body').addClass("work-body");
            $('.mood').text("Slow");
        }
        else if (d.getDay() == 0) {
            $('body').addClass("work-body");
            $('.mood').text("Exited");
        }

    } else if (thehours >= 14 && thehours < 21) {
        $('.work-watermark, .work-logos').addClass("show-during-time");

        if (daymoods2[n-1] == 'Slacking') {
            $('body').addClass("slacking-body");
            $('.mood').text("Slacking");
        }
        else if (daymoods2[n-1] == 'Tragic') {
            $('body').addClass("exited-body");
            $('.mood').text("Tragic");
        }
        else if (daymoods2[n-1] == 'Slow') {
            $('body').addClass("exited-body");
            $('.mood').text("Slow");
        }
        else if (daymoods2[n-1] == 'Nervous') {
            $('body').addClass("nervous-body");
            $('.mood').text("Nervous");
        }
        else if (daymoods2[n-1] == 'Exited') {
            $('body').addClass("exited-body");
            $('.mood').text("Exited");
        }
        else if (daymoods2[n-1] == 'Undecided') {
            $('body').addClass("exited-body");
            $('.mood').text("Undecided");
        }
        else if (d.getDay() == 0) {
            $('body').addClass("exited-body");
            $('.mood').text("Chaotic");
        }



    } else if (thehours >= 21 && thehours < 24) {
  //     $('body').addClass("evening-body");
  //     $('.evening-watermark, .evening-logos').addClass("show-during-time");
  //  $('.night-thumb').addClass("show-during-time-thumb");
  //     $('.mood').text( "Tired" );
        $('body').addClass("night-body");
        $('.mood').text( "Sleeping" );
        $('.night-watermark, .night-logos').addClass("show-during-time");
        $('.day-thumb').addClass("hide-during-time");
        $('.night-thumb').addClass("show-during-time-thumb");


    } else if (thehours >= 0 && thehours < 7) {
        $('body').addClass("night-body");
        $('.mood').text( "Sleeping" );
        $('.night-watermark, .night-logos').addClass("show-during-time");
        $('.day-thumb').addClass("hide-during-time");
        $('.night-thumb').addClass("show-during-time-thumb");
    }
});