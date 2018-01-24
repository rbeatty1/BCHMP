function sortBy(array, key){
    return array.sort(function(a, b){
        var x = a[key];
        var y = b[key];
        return ((x<y)?-1:((x>y)?1:0));
    });
}
var lyrOrder=[];
var checked=[];
var activePane=[];




// jQuery START
$(document).ready(function(){

    // active panel changes
    $('.bchmp-panel').on('click', function(){
        var clickTarget = $(this).attr('id');
        if ($("#map").hasClass('col-lg-10 col-sm-10')){
            $("#map").toggleClass("col-lg-10 col-sm-10 col-lg-8 col-sm-8");
            $("#sidebar").toggleClass("col-lg-2 col-lg-4");
            projectLogo.remove();
        }
        if($("#"+clickTarget).hasClass('panel-inactive')){
            $(".panel-active").toggleClass('panel-active panel-inactive');
            $("#"+clickTarget).toggleClass('panel-inactive panel-active');
            $(".panel-active").attr("class", "panel-active col-lg-8 col-sm-8");
            $(".panel-inactive").attr("class", "panel-inactive col-lg-2 col-sm-2");                        
        }

        $('.panel-active').children(".panel-heading").show();
        $('.panel-active').children(".panel-title").children(".panel-title-logo").show();
        $('.panel-active').children(".panel-title").children(".panel-title-link").children(".panel-title-info").show();
        $('.panel-inactive').children(".panel-title").children(".panel-title-logo").hide();
        $('.panel-inactive').children(".panel-title").children(".panel-title-link").children(".panel-title-info").hide();               
        $('.panel-inactive').children(".panel-heading").hide();
        $('.panel-inactive').children(".layer-box").removeClass("in");
        $('.panel-inactive').children(".legend-box").removeClass("in");
    });


    // layer control

    // on load
        $("input:checkbox[name='layer-control']").each(function(){
            // get the affected pane
            activePane = $(this).parents('.layer-box').siblings('.title').text().toLowerCase();
            var id = $(this).attr('id');
            // check to see if a checkbox is checked and if so, push it to a global array, and if not, remove it from map
            if ($('#'+id).is(':checked')){
                map.removeLayer(window[id]);
                if ($('#'+id).is(':checked')){
                    checked.push({
                        'z-index': $(this).attr('z-index'),
                        'layer': id
                    });
                };
            }
            else{
                map.removeLayer(window[id]);
            }
            // sort active layers array by z-index
                // THIS DOESN'T REALLY WORK //
            lyrOrder = sortBy(checked, 'z-index');
            loadLayerGroup(activePane, allLayers, lyrOrder);
        });


    // on checkbox change
    $("input:checkbox[name='layer-control']").on('change', function(){
        lyrGroup.removeFrom(map);
        // get the affected pane
        activePane = $(this).parents('.layer-box').siblings('.panel-title').children('.title').text().toLowerCase();
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
    // sort active layers array by z-index
            // THIS DOESN'T REALLY WORK //
    lyrOrder = sortBy(checked, 'z-index');
    loadLayerGroup(activePane, allLayers, lyrOrder);
    });


// jQuery END
});
