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
            var id = $(this).attr('id');
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
                map.removeLayer(window[$(this).attr('id')]);
            }
            lyrOrder = sortBy(checked, 'z-index');
            loadLayerGroup(conditions, lyrOrder);
        });


    // on change
    $("input:checkbox[name='conditions-item']").on('change', function(){
        var id = $(this).attr('id');
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
            console.log('test two');
            };
        }
    lyrOrder = sortBy(checked, 'z-index');
    loadLayerGroup(conditions, lyrOrder);
    });


// jQuery END
});
