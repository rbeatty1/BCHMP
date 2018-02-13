var lyrName;
var md = [];

// Leaflet - Return to Map Center [Created and maintained by pwldp | https://github.com/pwldp/leaflet.viewcenter]

        L.Control.ViewCenter = L.Control.extend({
            options: {
                position: 'bottomright',
                title: 'Return to Default Extent',
                forceSeparateButton: true,
                vcLatLng: [39.87, -74.73],
                vcZoom: 10        
            },

            onAdd: function (map) {
                var className = 'leaflet-control-view-center glyphicon glyphicon-home', container;
                
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
            img.style.width= '200px';
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
    var name = layer._eventParents[Object.keys(layer._eventParents)].options.id;
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
        case "tip-point":
            popupContent = L.Util.template('<div class="popup-title"><p>New Jersey TIP - Bridge/Intersections</p></div><div class="popup-content"><p><span class="popup-content-bold">Project Name:</span> {PROJECTNAM}</p><p><span class="popup-content-bold">Type:</span> {TYPE}</p><p><span class="popup-content-bold">Program:</span> {PROGRAM}</p><a href="{REPORT}">More Info</a></div>', props);
            break;
        case "tip-roads":
            popupContent = L.Util.template('<div class="popup-title"><p>New Jersey TIP - Roadways</p></div><div class="popup-content"><p><span class="popup-content-bold">Project Name:</span> {PROJECT}</p><p><span class="popup-content-bold">Program:</span> {PROGRAM}</p><p><span class="popup-content-bold">Description:</span> {DESCRIPTIO}</p><a href="{DETAIL}" target="_blank">Click Here for More Info</a></div>', props);
            break;
        case "burCoPubWorks":
            popupContent = L.Util.template('<div class="popup-title"><p>Burlington County Public Works Improvement Project</p></div><div class="popup-content"><p><span class="popup-content-bold">Project:</span> {Project}</p><p><span class="popup-content-bold">Future:</span> {Future}</p></div>', props);
            break;
        case "congestion-lrp":
            popupContent = L.Util.template('<div class="popup-title"><p>Congestion Management Strategies for 2040 LRP</p></div><div class="popup-content">One day this baby pop-up will grow up to be a grown up congestion<br>management strategies pop-up right before our eyes</div>', props);
            break;
        case "cmp-inventory":
            popupContent = L.Util.template('<div class="popup-title"><p>PLACEHOLDER</p></div><div class="popup-content"><p>One day this baby pop-up will grow up to be a grown up congestion<br>management strategies pop-up right before our eyes</p></div>', props);
            break;
        case "capacity":
            popupContent = L.Util.template('<div class="popup-title"><p>Capacity Assessment</p></div><div class="popup-content">'+
                '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> {NJDOT_FC_2}</p>'+
                '<p><span class="popup-content-bold">Recommended ROW Width:</span> {ROW} ft</p>'+
                '<p><span class="popup-content-bold">Width of Center Median or Turning Lane:</span> {Median} ft</p>'+
                '<p><span class="popup-content-bold">Width of Travel Lane:</span> {TravLane_W} ft</p>'+
                '<p><span class="popup-content-bold">Bike Lane Width (Shoulder):</span> {BicLan_Sho} ft</p>'+
                '<p><span class="popup-content-bold">Parking Lane Width:</span> {PLane_Sho} ft</p>'+
                '<p><span class="popup-content-bold">Sidewalk Buffer Width:</span> {Sidewa_Buf} ft</p>'+
                '<p><span class="popup-content-bold">Sidewalk Width:</span> {Sidewalk} ft</p>'+'</div>', props);
            break;
        case "row-recommend":
            popupContent = L.Util.template('<div class="popup-title"><p>Minimum Recommended Right-of-Way</p></div><div class="popup-content">'+
                '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> {NJDOT_FC_2}</p>'+
                '<p><span class="popup-content-bold">Recommended ROW Width:</span> {ROW} ft</p>'+
                '<p><span class="popup-content-bold">NJDOT Urban Area:</span> {NJDOT_LU}</p></div>', props);
            break;
        case "cross":
            popupContent = L.Util.template('<div class="popup-title"><p>Roadway Elements by Roadway Type</p></div><div class="popup-content">'+
                '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> {NJDOT_CAT}</p>'+
                '<p><span class="popup-content-bold">Cross Section Code:</span> {CrossSect}</p>'+
                '<p><span class="popup-content-bold">Width of Center Median or Turning Lane:</span> {Median} ft</p>'+
                '<p><span class="popup-content-bold">Width of Travel Lane:</span> {TravLane_W} ft</p>'+
                '<p><span class="popup-content-bold">Bike Lane Width (Shoulder):</span> {BicLan_Sho} ft</p>'+
                '<p><span class="popup-content-bold">Parking Lane Width:</span> {PLane_Sho} ft</p>'+
                '<p><span class="popup-content-bold">Sidewalk Buffer Width:</span> {Sidewa_Buf} ft</p>'+
                '<p><span class="popup-content-bold">Sidewalk Width:</span> {Sidewalk} ft</p>'+
                '<a href="{img}" target="_blank">Click Here for a ROW Cross-Section Diagram</a></div>', props);
            break;
        default:
            return;
    }
    layer.bindPopup(popupContent);
}

// lazy load active pane layers
function lazyLoadLayers(pane, layers){
    for (layer in lyrGroup){
        lyrGroup[layer].removeFrom(map);
    }
    lyrGroup.length = 0;
    for (key in layers){
        var paneLayers = layers[key][pane];
        for (lyr in paneLayers){
            if (paneLayers[lyr].qry != undefined){
                layer = L.esri.featureLayer({
                    url: paneLayers[lyr].url,
                    id: paneLayers[lyr].name,
                    pane: paneLayers[lyr].drawingPane,
                    ignoreRenderer: false,
                    where: paneLayers[lyr].qry,
                    onEachFeature: function(f, l){
                        createPopUps(f, l)
                    }
                })
                lyrGroup.push(layer);
            }
            else{
                layer = L.esri.featureLayer({
                    url: paneLayers[lyr].url,
                    id: paneLayers[lyr].name,
                    ignoreRenderer: false,
                    pane: paneLayers[lyr].drawingPane,
                    onEachFeature: function(f, l){
                        createPopUps(f, l)
                    }
                })
                lyrGroup.push(layer);
            }
        }
    }
}

// show layers based on checked/unchecked status
function checkboxLayers(loadedLayers, visibleLayers){
    var loaded = new Object();
    var vizName = [];
    for (key in loadedLayers){
        var id = loadedLayers[key].options.id;
        loaded[id] = loadedLayers[key];
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