function sortBy(array, key){
    return array.sort(function(a, b){
        var x = a[key];
        var y = b[key];
        return ((x<y)?-1:((x>y)?1:0));
    });
}
var lyrOrder;
var checked=[];
var unchecked = [];

// jQuery START
$(document).ready(function(){

    // active panel changes
    $('.panel-inactive').on('click', function(){
        $('.panel-active').toggleClass('col-lg-3 panel-active col-lg-1 panel-inactive');
        $(this).toggleClass('col-lg-1 panel-inactive col-lg-3 panel-active');
        if ($("#map").hasClass('col-lg-9')){
            $("#map").toggleClass("col-lg-9 col-lg-7")
        }
        $('.panel-active').children(".legend-box").show();
        $('.panel-inactive').children(".legend-box").hide();
    });

    // layer control

    // on load
    $("input:checkbox[name='conditions-item']").each(function(){
        if ($('#'+$(this).attr('id')).is(':checked')){
            map.removeLayer(window[$(this).attr('id')]);
            if ($('#'+$(this).attr('id')).is(':checked')){
                checked.push({
                    'z-index': $(this).attr('z-index'),
                    'layer': $(this).attr('id')
                });
            };
        }
        else{
            unchecked.push({
                'z-index': $(this).attr('z-index'),
                'layer': $(this)
            });
            // map.removeLayer(window[$(this).attr('id')]);
        }
    });
    console.log(checked);
    // on change
    $("input:checkbox[name='conditions-item']").on('change', function(){
        var out = [];
        if ($('#'+$(this).attr('id')).prop('checked')){
            map.removeLayer(window[$(this).attr('id')]);
        }
        else{
            checked.push({
                'z-index': $(this).attr('z-index'),
                'layer': $(this).attr('id')
            });
            // map.removeLayer(window[$(this).attr('id')]);
            console.log("You clicked a checkbox that wasn't already checked!")
        }
    console.log(checked);
    loadLayerGroup(conditions, checked);
    });


// jQuery END
});
