var esri = require('esri-leaflet');
var plugins = require('./plugins.js');


// Load map variable and set extent
// var satellite = L.tileLayer.provider('MapBox', {id: 'mapbox.satellite', access_token: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'}),
//     streets = L.tileLayer.provider('MapBox', {id: 'mapbox.light', access_token: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'}),
//     topo = L.esri.Vector.basemap('Topographic')
var mbImagery = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVhdHR5cmUxIiwiYSI6ImNqOGFpY3o0cTAzcXoycXE4ZTg3d3g5ZGUifQ.VHOvVoTgZ5cRko0NanhtwA', {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://www.mapbox.com/map-feedback/" rel="noopener" target="_blank>Mapbox</a> © <a href="http://www.openstreetmap.org/copyright" rel="noopener" target="_blank>OpenStreetMap</a>'
    }),
    streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVhdHR5cmUxIiwiYSI6ImNqOGFpY3o0cTAzcXoycXE4ZTg3d3g5ZGUifQ.VHOvVoTgZ5cRko0NanhtwA', {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://www.mapbox.com/map-feedback/" rel="noopener" target="_blank">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright" rel="noopener" target="_blank>OpenStreetMap</a>'
    }),
    topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
    });

// var topo = 

var bm = {
    "Satellite": mbImagery,
    "Light Gray": streets,
    "Topographic": topo
};

var map;

function initmap() {
    map = new L.map('map', {
        center: [39.87, -74.73],
        zoom: 10,
        layers: [topo]
    });
};

initmap();

// Define Map Controls
map.attributionControl.setPosition('bottomleft');
map.zoomControl.setPosition('bottomright');
var projectLogo = new L.Control.ProjectLogo();
var viewCenter = new L.Control.ViewCenter();
var basemap = new L.control.layers(bm, null, {
    position: 'bottomleft'
});
var scale = new L.control.scale({
    position: 'bottomleft'
});
map.addControl(basemap);
map.addControl(projectLogo);
map.addControl(viewCenter);
map.addControl(scale);

// create map panes to ensure proper layer ordering

map.createPane("polygon");
map.createPane("line");
map.createPane("point");

/* Add Data Layers as follows:

Default Landing: Burlington County Base (DVRPC Open Data // "CO_NAME" = 'Burlington')
Conditions: BCHMP - Conditions (DVRPC // slawrence_dvrpcgis | https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer)
Resources: BCHMP - Resources (DVRPC // slawrence_dvrpcgis   | https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer)
Strategies: BCHMP - Strategies (DVRPC // slawrence_dvrpcgis | https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Strategies/FeatureServer)

*/

// var lyrGroup = L.layerGroup({pane: "point"});
var lyrGroup = [];
// array containing objects that define the necessary information to load the feature layers corresponding to each web map
var allLayers = [{
        conditions: [
            {
                name: "functionalClass",
                url: "https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions_Redux/FeatureServer/6",
                popup: true,
                drawingPane: "line"
            },
            {
                name: "trafficSafety",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions_Redux/FeatureServer/0',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "trafficCongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions_Redux/FeatureServer/1',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "masterplanCongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions_Redux/FeatureServer/2',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "transitScore",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions_Redux/FeatureServer/4',
                popup: false,
                drawingPane: "polygon"
            },
            {
                name: "cmpScore",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions_Redux/FeatureServer/5',
                popup: false,
                drawingPane: "line"
            }
        ]
    },
    {
        resources: [
            {
                name: "NHS",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/0',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "hurricane",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/1',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "expressDetour",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/2',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "trainAccess1",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Resources_RiverLINE/FeatureServer/1',
                popup: true,
                drawingPane: "point"
            },
            {
                name: "trainAccess2",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Resources_RiverLINE/FeatureServer/2',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "trainAccess3",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Resources_RiverLINE/FeatureServer/3',
                popup: false,
                drawingPane: "polygon"
            },
            {
                name: "NJTservice1",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_NJTBus/FeatureServer/1',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "NJTservice2",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_NJTBus/FeatureServer/2',
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "shuttleBus1",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurLINK/FeatureServer/1',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "shuttleBus2",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurLINK/FeatureServer/2',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "parkRideLots",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/3',
                popup: true,
                drawingPane: "point"
            },
            {
                name: "bikeNetwork",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/4',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "luCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/5',
                qry: "COUNTY = 'Burlington'",
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "bizCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/6',
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "freightCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/7',
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "planType",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/8',
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "scenicByway",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/9',
                popup: true,
                drawingPane: "line"
            },
            {
                name: 'pinelands',
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources_Redux/FeatureServer/10',
                popup: false,
                drawingPane: "polygon"
            }
        ]
    },
    {
        strategies: [
            {
                name: "congestion-lrp",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Strategies/FeatureServer/0',
                popup: true,
                drawingPane: "line"
            }
        ]
    },
    {
        row: [{
                name: "cross",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_ROW/FeatureServer/2',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "capacity",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_ROW/FeatureServer/1',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "row-recommend",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/BCHMP_ROW/FeatureServer/0',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "urban-area",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_ROW/FeatureServer/3',
                drawingPane: "polygon"
            }
        ]
    }
];

// load BurlCo boundary on load
var BurlCo = esri.featureLayer({
    url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Boundaries/DVRPC_Boundaries/FeatureServer/1',
    ignoreRenderer: true,
    where: "CO_NAME = 'Burlington'",
    interactive: false,
    style: {
        color: "#fdd41d",
        weight: 4,
        opacity: 1,
        // fillColor: "#fdd41d",
        fillOpacity: .1,
    }
}).addTo(map);

// lazy load active pane layers
var lazyLoadLayers = function(pane) {
    var layers = allLayers;
    // clear layers from map on pane change
    for (layer in lyrGroup) {
        lyrGroup[layer].removeFrom(map);
    }
    // loop through all layers
    for (key in layers) {
        // find layers associated with active pane
        var paneLayers = layers[key][pane];
        // loop through active pane layers and load
        for (lyr in paneLayers) {
            if (paneLayers[lyr].qry != undefined) {
                layer = esri.featureLayer({
                    url: paneLayers[lyr].url,
                    id: paneLayers[lyr].name,
                    interactive: paneLayers[lyr].popup,
                    pane: paneLayers[lyr].drawingPane,
                    ignoreRenderer: false,
                    where: paneLayers[lyr].qry,
                    onEachFeature: function(f, l) {
                        plugins.createPopUps(f, l)
                    }
                })
                lyrGroup.push(layer);
            } else {
                layer = esri.featureLayer({
                    url: paneLayers[lyr].url,
                    id: paneLayers[lyr].name,
                    interactive: paneLayers[lyr].popup,
                    ignoreRenderer: false,
                    pane: paneLayers[lyr].drawingPane,
                    onEachFeature: function(f, l) {
                        plugins.createPopUps(f, l)
                    }
                })
                lyrGroup.push(layer);
            }
        }
    }
}

// show layers based on checked/unchecked status
var checkboxLayers = function(visibleLayers) {
    var loadedLayers = lyrGroup;
    var loaded = new Object();
    var vizName = [];
    for (key in loadedLayers) {
        var id = loadedLayers[key].options.id;
        loaded[id] = loadedLayers[key];
    }
    for (viz in visibleLayers) {
        vizName.push(visibleLayers[viz].layer);
    }
    for (lyr in loaded) {
        var temp = loaded[lyr].options.id;
        if (temp.match(/shuttleBus\d/) && vizName.indexOf("shuttleBus")!=-1){
            loaded[lyr].addTo(map);
            $("#legend-shuttleBus").show();
        }
        else if (temp.match(/trainAccess\d/) && vizName.indexOf("trainAccess")!=-1){
            loaded[lyr].addTo(map);
            $("#legend-trainAccess").show();
        }
        else if (temp.match(/NJTservice\d/) && vizName.indexOf("NJTservice")!=-1){
            loaded[lyr].addTo(map);
            $("#legend-NJTservice").show();
        }
        else if (vizName.indexOf(temp) != -1) {
            loaded[lyr].addTo(map);
            $("#legend-" + temp).show();
        } 
        else {
            if (temp.match(/shuttleBus\d/)){
                loaded[lyr].removeFrom(map);
                $("#legend-shuttleBus").hide();
            } 
            else if (temp.match(/trainAccess\d/)){
                loaded[lyr].removeFrom(map);
                $("#legend-trainAccess").hide();
            }
            else if (temp.match(/NJTservice\d/)){
                loaded[lyr].removeFrom(map);
                $("#legend-NJTservice").hide();
            }
            else{
                loaded[lyr].removeFrom(map);
                $("#legend-" + temp).hide();   
            }
        }
    }
}


// load data function
$(document).ready(function() {
    // load conditions layer group on conditions pane click

    $(".bhcmp-panel").on('click', function() {
        // only load if panel is not already active
        if ($(this).hasClass("panel-active")) {} else {
            for (layer in lyrGroup) {
                lyrGroup[layer].removeFrom(map);
            }
            lyrGroup.length = 0;
        }
    });
});

module.exports = {
    map: map,
    projectLogo: projectLogo,
    checkboxLayers: checkboxLayers,
    lazyLoadLayers: lazyLoadLayers
}