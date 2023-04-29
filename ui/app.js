$(document).ready(function(){
    $(".buz-show-btn-notify").hide();
    $(".buz-notify-warning").hide();
    $("#buz-container").hide();
    $("html").show();

    /* $("#buz-container").fadeIn(100);
    $(".buz-call-btn").addClass("disable");
    $(".buz-call-btn p").html("you have called the doctor");
    $(".buz-show-btn-notify").show();
    $(".buz-notify-warning").show();
    $("#buz-count-time").text(secondsToTime(90));
    $(".buz-sub-content").text(data); */

    window.addEventListener("message", function(e){
        var data = e.data;
        switch(data.action){
            case "toggle":
                if(data.toggle){
                    $("#buz-container").fadeIn(100);
                    
                } else {
                    $("#buz-container").fadeOut(100);
                }
                break;
            case "time":
                $("#buz-count-time").text(secondsToTime(parseInt(data.time)));
                break;
            case "content":
                $(".buz-sub-content").text(data);
                break;
            case "respawn":
                if (data.toggle){
                    $(".buz-show-btn-notify").show();
                    $(".buz-notify-warning").show();
                }else{
                    $(".buz-show-btn-notify").hide();
                    $(".buz-notify-warning").hide();
                }
                break;
            case "press":
                if (data.toggle){
                    $(".buz-call-btn").addClass("disable");
                    $(".buz-call-btn p").html("you have called the doctor");
                } else{
                    $(".buz-call-btn").removeClass("disable");
                    $(".buz-call-btn p").html("press G to call ambulance");
                }
                break;
            default:
        }
    })
})

function secondsToTime(e){
    var h = Math.floor(e / 3600).toString().padStart(2,'0'),
        m = Math.floor(e % 3600 / 60).toString().padStart(2,'0'),
        s = Math.floor(e % 60).toString().padStart(2,'0');
    return m + ':' + s;
}