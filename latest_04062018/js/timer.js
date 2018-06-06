$(document).ready(function(){
    alert("test");
    var thehours = new Date().getHours();
    if (thehours >= 9 && thehours < 12) {
        $('body').addClass("morning-color-body");
        $('.mood').text( "Hopeful" );

    } else if (thehours >= 12 && thehours < 17) {
        $('body').addClass("afternoon-color-body");
        $('.mood').text( "Lazy" );

    } else if (thehours >= 17 && thehours < 24) {
        $('body').addClass("evening-color-body");
        $('.mood').text( "Slacking" );
    }
    else if (thehours >= 0 && thehours < 9) {
        $('body').addClass("night-color-body");
        $('.mood').text( "Sleeping" );
    }
});