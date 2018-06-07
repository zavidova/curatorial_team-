$(document).ready(function(){

    var d = new Date();
    var n = d.getDay();
    var daymoods = ['Angry', 'Ready', 'Worried', 'Dreamy', 'Energised', 'Very Worried', 'Exited'];
    var daymoods2 = ['Strong', 'Tragic', 'Slow', 'Nervous', 'Slacking', 'Undecided', 'Chaotic'];
   // function getMessage() {
   //     return daymoods[Math.floor(Math.random() * daymoods.length)];
    // }

    var thehours = new Date().getHours();


        //getting ready

    if (thehours >= 8 && thehours < 9) {
        $('body').addClass("morning-body");
        $('.mood').text( "Hopeful" );
        $('.morning-watermark, .morning-logos').addClass("show-during-time");
        $('.thumb').addClass("thumbs-morning");

        //working
    } else if (thehours >= 9 && thehours < 12) {
        //submode: Angry
        if (daymoods[n-1] == 'Angry') {
            $('body').addClass("afternoon-body");
            $('.mood').text("Angry");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods[n-1] == 'Ready') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Ready");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods[n-1] == 'Worried') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Worried");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods[n-1] == 'Dreamy') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Dreamy");
            $('.morning-watermark, .morning-logos').addClass("show-during-time");
        }
        else if (daymoods[n-1] == 'Energised') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Energised");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods[n-1] == 'Very Worried') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Very Worried");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods[n-1] == 'Exited') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Exited");
            $('.afternoon-watermark').addClass("show-watermark");
        }

    } else if (thehours >= 12 && thehours < 18) {
        if (daymoods2[n-1] == 'Strong') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Strong");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods2[n-1] == 'Tragic') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Tragic");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods2[n-1] == 'Slow') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("SLow");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods2[n-1] == 'Nervous') {
            $('body').addClass("afternoon-nervous-body");
            $('.mood').text("Nervous");
            $('.morning-watermark, .morning-logos').addClass("show-during-time");
        }
        else if (daymoods2[n-1] == 'Slacking') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Slacking");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods2[n-1] == 'Undecided') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Undecided");
            $('.afternoon-watermark').addClass("show-watermark");
        }
        else if (daymoods2[n-1] == 'Chaotic') {
            $('body').addClass("afternoon-color-body");
            $('.mood').text("Chaotic");
            $('.afternoon-watermark').addClass("show-watermark");
        }



    } else if (thehours >= 18 && thehours < 24) {
        $('body').addClass("evening-color-body");
        $('.night-watermark').addClass("show-watermark");


    } else if (thehours >= 0 && thehours < 8) {
        $('body').addClass("night-color-body");
        $('.mood').text( "Sleeping" );
        $('.night-watermark, .night-logos').addClass("show-during-time");
        $('.day-thumb').addClass("hide-during-time");
        $('.night-thumb').addClass("show-during-time-thumb");
    }
});