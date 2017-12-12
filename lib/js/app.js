// jQuery START
$(document).ready(function(){

    $('.panel-inactive').on('click', function(){
        $('.panel-active').toggleClass('col-lg-3 panel-active col-lg-1 panel-inactive');
        // $('.panel-active').toggleClass('panel-active');
        // $('.panel-active').toggleClass('panel-inactive');
        $(this).toggleClass('col-lg-1 panel-inactive col-lg-3 panel-active');
        if ($("#map").hasClass('col-lg-9')){
            $("#map").toggleClass("col-lg-9 col-lg-7")
        }
        console.log("You changed the active panel!");
    });

// jQuery END
});
