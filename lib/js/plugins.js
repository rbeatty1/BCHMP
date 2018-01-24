var lyrName;

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
            img.style.width= '200px';
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


// load defined layer group

function loadLayerGroup(activePane, allLayers, visible){
    // new load, new me
    lyrGroup.removeFrom(map);
    lyrGroup.clearLayers();


    // iterate through all layers
    for (z = 0; z < allLayers.length; z++){
        // only look through layers associated with active pane
        if (allLayers[z].category == activePane){
            for (y = 0; y < allLayers[z].layers.length; y++){
                // single out layers with their checkboxes checked
                for (var x=0; x < visible.length; x++){
                    // load data
                    if (allLayers[z].layers[y].name === visible[x].layer){
                        lyrName = allLayers[z].layers[y].name;
                        // some are special and need further guidance
                        if (allLayers[z].layers[y].qry != undefined){
                            lyr = L.esri.featureLayer({
                                url: allLayers[z].layers[y].url,
                                id: lyrName,
                                ignoreRenderer: false,
                                where: allLayers[z].layers[y].qry,
                                onEachFeature: function(feature, layer){
                                    createPopUps(feature, layer)
                                }
                            });
                            lyrGroup.addLayer(lyr);
                        }
                        // everything else that doesn't need a where clause
                        else{                       
                            lyr = L.esri.featureLayer({
                                url: allLayers[z].layers[y].url,
                                id: lyrName,
                                ignoreRenderer: false,
                                onEachFeature: function(feature, layer){
                                    createPopUps(feature, layer)
                                }
                            })
                            console.log(lyr);
                            lyrGroup.addLayer(lyr);
                        }
                    }
                }
            }
        }
    };
    lyrGroup.addTo(map);   
}


