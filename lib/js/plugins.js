var lyrName;
var md = [];

// Leaflet - Return to Map Center [Created and maintained by pwldp | https://github.com/pwldp/leaflet.viewcenter]

        L.Control.ViewCenter = L.Control.extend({
            options: {
                position: 'bottomright',
                title: 'Return to Default Extent',
                forceSeparateButton: true,
                vcLatLng: [39.87, -74.73],
                vcZoom: 10,
        
            },

            onAdd: function (map) {
                var className = 'leaflet-control-view-center', container;
                
                if(map.zoomControl && !this.options.forceSeparateButton) {
                    container = map.zoomControl._container;
                } else {
                    container = L.DomUtil.create('div', 'leaflet-bar');
                }
                
                this._createButton(this.options, className, container, this.setCenterView, map);

                return container;
            },
            
            _createButton: function (opts, className, container, fn, context) {
                var link = L.DomUtil.create('a', className, container);
                link.href = '#';
                link.title = opts.title;

                var zoom = opts.vcZoom || 6;
                
                L.DomEvent
                    .addListener(link, 'click', L.DomEvent.stopPropagation)
                    .addListener(link, 'click', L.DomEvent.preventDefault)
                    .addListener(link, 'click', function(){
                        context.setView(opts.vcLatLng, zoom);
                    }, context);
                return link;
            }
        });

        L.control.viewcenter = function (options) {
            return new L.Control.ViewCenter(options);
        };


// Project Logo Control
    L.Control.ProjectLogo = L.Control.extend({
        options:{
            position: 'topleft',
            title: 'Burlington County Highway Master Plan'
        },
        onAdd: function(map){
            var img = L.DomUtil.create('img');
            img.src = "lib/img/project-logo-large.png";
            img.style.width= '150px';
            img.style.background = 'rgb(225,225,225, .3)';
            return img;
        },
        onRemove: function(map){

        }
    });

    L.control.projectlogo = function(options){
        return new L.Control.ProjectLogo(options);
    }



// dynamic pop-up creation
function createPopUps(feature, layer){
    var popupContent;
    var props = feature.properties;  
    var name = layer.options.id; 
    switch(name){
        case "trafficSafety":
            popupContent = L.Util.template('<div class="popup-title"><p>2015 Traffic Safety</p></div><div class="popup-content"><p><span class="popup-content-bold">Average Crash Rate by Functional Class:</span> '+parseFloat(props.F2xCrash_1).toFixed(2)+'</p></div>');
            break;
        case "trafficCongestion":
            popupContent = L.Util.template('<div class="popup-title"><p>2013 Traffic Congestion</p></div><div class="popup-content"><p><span class="popup-content-bold">Peak Hour Volume/Capacity Ratio:</span> '+parseFloat(props.Base_VC).toFixed(2)+'</p></div>');
            break;
        case "LRPcongestion":
            popupContent = L.Util.template('<div class="popup-title"><p>2040 LRP Traffic Congestion</p></div><div class="popup-content"><p><span class="popup-content-bold">Forecasted Peak Hour Volume/Capacity Ratio:</span> '+parseFloat(props.LRP_VC).toFixed(2)+'</p></div>');
            break;
        case "masterplanCongestion":
            popupContent = L.Util.template('<div class="popup-title"><p>Master Plan Traffic Congestion</p></div><div class="popup-content"><p><span class="popup-content-bold">Forecasted Peak Hour Volume/Capacity Ratio:</span> '+parseFloat(props.MPlan_VC).toFixed(2)+'</p></div>');
            break;
        case "njCMPCorridors":
            popupContent = L.Util.template('<div class="popup-title"><p>2015 CMP Planning Corridor</p></div><div class="popup-content"><p><span class="popup-content-bold">Corridor:</span> {GIS_ID}, {SUBNAME}</p></div>', props);
            break;
        case "NJTservice":
            popupContent = L.Util.template('<div class="popup-title"><p>New Jersey Transit Bus Service</p></div><div class="popup-content"><p><span class="popup-content-bold">Number of Weekday Bus Routes:</span> {NJTBusServ}</p></div>', props);
            break;
        case "parkRideLots":
            popupContent = L.Util.template('<div class="popup-title"><p>Park-and-Ride Lot</p></div><div class="popup-content"><p><span class="popup-content-bold">Lot Name:</span> {Name}</p><p><span class="popup-content-bold">Status:</span> {Stat}</p></div>', props);
            break;
        case "luCenters":
            popupContent = L.Util.template('<div class="popup-title"><p>Land Use Center</p></div><div class="popup-content"><p><span class="popup-content-bold">Name:</span> {LABEL}</p><p><span class="popup-content-bold">Land Use Plan Type:</span> {LUP_TYPE}</p></div>', props);
            break;
        case "freightCenters":
            popupContent = L.Util.template('<div class="popup-title"><p>Freight Center</p></div><div class="popup-content"><p><span class="popup-content-bold">Name:</span> {NAME}</p><p><span class="popup-content-bold">Type:</span> {CENTER_TYP}</p></div>', props);
            break;
        case "bizCenters":
            popupContent = L.Util.template('<div class="popup-title"><p>Business Center</p></div><div class="popup-content"><p><span class="popup-content-bold">Name:</span> {NAME}</p></div>', props);
            break;
        case "planType":
            popupContent = L.Util.template('<div class="popup-title"><p>2040 LRP Area Type</p></div><div class="popup-content"><p><span class="popup-content-bold">Plan Area Type:</span> {PA_2040}</p></div>', props);
            break;
        case "tip-points":
            popupContent = L.Util.template('<div class="popup-title"><p>New Jersey TIP - Bridge/Intersections</p></div><div class="popup-content"><p><span class="popup-content-bold">Project Name:</span> {PROJECTNAM}</p><p><span class="popup-content-bold">Type:</span> {TYPE}</p><p><span class="popup-content-bold">Program:</span> {PROGRAM}</p><a href="{REPORT}">More Info</a></div>', props);
            break;
        case "tip-roads":
            popupContent = L.Util.template('<div class="popup-title"><p>New Jersey TIP - Roadways</p></div><div class="popup-content"><p><span class="popup-content-bold">Project Name:</span> {PROJECT}</p><p><span class="popup-content-bold">Program:</span> {PROGRAM}</p><p><span class="popup-content-bold">Description:</span> {DESCRIPTIO}</p><a href="{DETAIL}" target="_blank">Click Here for More Info</a></div>', props);
            break;
        case "burCoPubWorks":
            popupContent = L.Util.template('<div class="popup-title"><p>Burlington County Public Works Improvement Project</p></div><div class="popup-content"><p><span class="popup-content-bold">Project:</span> {Project}</p><p><span class="popup-content-bold">Future:</span> {Future}</p></div>', props);
            break;
        case "congestion-lrp":
            popupContent = L.Util.template('<div class="popup-title"><p>Business Center</p></div><div class="popup-content"><p>Name: {NAME}</p></div>', props);
            break;
        default:
            return;
    }
    layer.bindPopup(popupContent);
}

// lazy load active pane layers
function lazyLoadLayers(pane, layers){
    lyrGroup.eachLayer(function(layer){
        layer.removeFrom(map);
    });
    lyrGroup.clearLayers();
    for (key in layers){
        var paneLayers = layers[key][pane];
        for (lyr in paneLayers){
            if (paneLayers[lyr].qry != undefined){
                lyr = L.esri.featureLayer({
                    url: paneLayers[lyr].url,
                    id: paneLayers[lyr].name,
                    ignoreRenderer: false,
                    where: paneLayers[lyr].qry,
                    onEachFeature: function(feature, layer){
                        createPopUps(feature, layer)
                    }
                })
                lyrGroup.addLayer(lyr);
            }
            else{
                lyr = L.esri.featureLayer({
                    url: paneLayers[lyr].url,
                    id: paneLayers[lyr].name,
                    ignoreRenderer: false,
                    onEachFeature: function(feature, layer){
                        createPopUps(feature, layer)
                    }
                })
                lyrGroup.addLayer(lyr);
            }
        }
    }
}

// show layers based on checked/unchecked status
function checkboxLayers(loadedLayers, visibleLayers){
    var loaded = new Object();
    var vizName = [];
    for (key in loadedLayers._layers){
        var id = loadedLayers._layers[key].options.id;
        loaded[id] = loadedLayers._layers[key];
    }
    for (viz in visibleLayers){
        vizName.push(visibleLayers[viz].layer);
    }
    for (lyr in loaded){
        var temp = loaded[lyr].options.id;
        if (vizName.indexOf(temp)!= -1){
            loaded[lyr].addTo(map);
            $(document).ready(function(){
                $("#legend-"+temp).show();
            });
        }
        else{
            if (map.hasLayer(loaded[lyr])){
                loaded[lyr].removeFrom(map);
                $(document).ready(function(){
                    $("#legend-"+temp).hide();
                });
            }
        }
    }
}