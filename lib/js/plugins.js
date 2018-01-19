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


// dynamic pop-up creation
function createPopUps(feature, layer){
    var popupContent;
    var props = feature.properties;  
    var name = layer.options.id; 
    switch(name){
        case "trafficSafety":
            popupContent = L.Util.template(name);
            break;
        case "trafficCongestion":
            popupContent = L.Util.template(name);
            break;
        case "LRPcongestion":
            popupContent = L.Util.template(name);
            break;
        case "masterplanCongestion":
            popupContent = L.Util.template(name);
            break;
        case "njCMPCorridors":
            popupContent = L.Util.template(name);
            break;
        case "NJTservice":
            popupContent = L.Util.template(name);
            break;
        case "parkRideLots":
            popupContent = L.Util.template(name);
            break;
        case "luCenters":
            popupContent = L.Util.template(name);
            break;
        case "freightCenters":
            popupContent = L.Util.template(name);
            break;
        case "bizCenters":
            popupContent = L.Util.template(name);
            break;
        case "planType":
            popupContent = L.Util.template(name);
            break;
        case "freightCenters":
            popupContent = L.Util.template(name);
            break;
        case "tip-points":
            popupContent = L.Util.template(name);
            break;
        case "tip-roads":
            popupContent = L.Util.template(name);
            break;
        case "burCoPubWorks":
            popupContent = L.Util.template(name);
            break;
        case "congestion-lrp":
            popupContent = L.Util.template(name);
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


