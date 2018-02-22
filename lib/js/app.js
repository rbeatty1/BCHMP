function sortBy(array, key){
    return array.sort(function(a, b){
        var x = a[key];
        var y = b[key];
        return ((x<y)?-1:((x>y)?1:0));
    });
}
var lyrOrder=[];
var checked=[];
var activePane;

// jQuery START
$(document).ready(function(){
   
     $('#map').on("mouseover",'.cmp-pop-img',function(){
        var newContent = $(this).attr("title");
        $(this).parent().siblings(".popup-content-bold").children("h4").text(newContent);
    });

    $('#map').on("mouseout",'.cmp-pop-img',function(){
        $(this).parent().siblings(".popup-content-bold").children("h4").text("Hover over icon for strategy title");
    });   



    // active panel changes
    $('.bchmp-panel').on('click', function(){
        var clickTarget = $(this).attr('id');
        if ($("#"+clickTarget).children(".panel-title").children(".panel-title-block").children(".title").text().toLowerCase() ==='right-of-way'){
            activePane = "row";
        }
        else{
            activePane = $("#"+clickTarget).children(".panel-title").children(".panel-title-block").children(".title").text().toLowerCase();
        }
        if ($("#map").hasClass('col-lg-10 col-md-10 col-sm-10')){
            $("#map").toggleClass("col-lg-10 col-md-10 col-sm-10 col-lg-8 col-md-8 col-sm-8");
            $("#sidebar").toggleClass("col-lg-2 col-md-2 col-sm-2 col-lg-4 col-md-4 col-sm-4");
            projectLogo.remove();
            $("#stakeholders-logo-map").hide();
        }
        if($("#"+clickTarget).hasClass('panel-inactive')){
            lazyLoadLayers(activePane, allLayers);
            checkboxLayers(lyrGroup, lyrOrder);
            $(".panel-active").toggleClass('panel-active panel-inactive');
            $("#"+clickTarget).toggleClass('panel-inactive panel-active');
            $(".panel-active").attr("class", "panel-active col-lg-9 col-md-8 col-sm-9");
            $(".panel-inactive").attr("class", "panel-inactive col-lg-1 col-md-1 col-sm-1");
            $("#"+clickTarget).children(".legend-box").addClass("in");
            $("#"+clickTarget).children(".layer-box").addClass("in");                        
        }

        $('.panel-active').children(".panel-heading").show();
        $('.panel-active').children(".panel-title-logo").attr("style", "display: inline-block");
        $('.panel-active').children(".panel-title").children(".panel-title-block").children(".panel-title-link").children(".panel-title-info").show();
        $('.panel-active').children(".pane-logo-stakeholders").show();
        $('.panel-inactive').children(".panel-title-logo").hide();
        $('.panel-inactive').children(".panel-title").children(".panel-title-block").children(".panel-title-link").children(".panel-title-info").hide();               
        $('.panel-inactive').children(".panel-heading").hide();
        $('.panel-inactive').children(".layer-box").removeClass("in");
        $('.panel-inactive').children(".legend-box").removeClass("in");
        $('.panel-inactive').children(".pane-logo-stakeholders").hide();    
    });


    // layer control
    // on checkbox change
    $("input:checkbox[name='layer-control']").on('change', function(){
        var id = $(this).attr('id');
        // check to see if a checkbox is checked and if so, push it to a global array, and if not, remove it from map
        if ($('#'+id).prop('checked')){
            map.removeLayer(window[id]);
            checked.push({
                'z-index': $(this).attr('z-index'),
                'layer': id
            })
        }
        else{
            map.removeLayer(window[id]);
            for (var i = 0; i < checked.length ; i++){
                if (checked[i].layer === id){
                    checked = checked.filter(function(checked){
                        return checked.layer != id;
                    });
                };
            };
        }
    lyrOrder = sortBy(checked, 'z-index');
    checkboxLayers(lyrGroup, lyrOrder);
    });


// jQuery END
});
