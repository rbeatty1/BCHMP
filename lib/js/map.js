// Load map variable and set extent
// var satellite = L.tileLayer.provider('MapBox', {id: 'mapbox.satellite', access_token: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'}),
//     streets = L.tileLayer.provider('MapBox', {id: 'mapbox.light', access_token: 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'}),
//     topo = L.esri.Vector.basemap('Topographic')

var mbImagery = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVhdHR5cmUxIiwiYSI6ImNqOGFpY3o0cTAzcXoycXE4ZTg3d3g5ZGUifQ.VHOvVoTgZ5cRko0NanhtwA', {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }),
    streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v10/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYmVhdHR5cmUxIiwiYSI6ImNqOGFpY3o0cTAzcXoycXE4ZTg3d3g5ZGUifQ.VHOvVoTgZ5cRko0NanhtwA', {
        tileSize: 512,
        zoomOffset: -1,
        attribution: '© <a href="https://www.mapbox.com/map-feedback/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }),
    topo = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'
});

// var topo = 

var bm = {
    "Satellite": mbImagery,
    "Streets": streets,
    "Topographic": topo
};



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
map.addControl(basemap);
map.addControl(projectLogo);
map.addControl(viewCenter);


// create pop ups

// function createPopUps(layer){
//     var props = layer.feature.properties;
//     switch 
// }
/* Add Data Layers as follows:

Default Landing: Burlington County Base (DVRPC Open Data // "CO_NAME" = 'Burlington')
Conditions: BCHMP - Conditions (DVRPC // slawrence_dvrpcgis | https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer)
Resources: BCHMP - Resources (DVRPC // slawrence_dvrpcgis   | https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer)
Strategies: BCHMP - Strategies (DVRPC // slawrence_dvrpcgis | https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Strategies/FeatureServer)


*/

var lyr;
var lyrGroup = L.layerGroup();

// array containing objects that define the necessary information to load the feature layers corresponding to each web map
var allLayers = [
    {
        category : 'conditions',
        layers: [
            {
                name: "trafficSafety",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/0',
                popup: true
            },
            {
                name: "trafficCongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/1',
                popup: true
            },
            {
                name: "LRPcongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/2',
                popup: true
            },
            {
                name: "masterplanCongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/3',
                popup: true
            },
            {
                name: "transitScore",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/4',
                popup: false
            },
            {
                name: "cmpScore",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/5',
                popup: false
            },
            {
                name: "connectIndex",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/6',
                popup: false
            },
            {
                name: "roadAddition",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/7',
                popup: false
            }
        ]
    },
    {
        category: 'resources',
        layers: [
            {
                name: "njCMPCorridors",
                url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Transportation/CMP_Corridors/MapServer/0',
                popup: true
            },
            {
                name: "NHS",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/0',
                popup: false
            },
            {
                name: "hurricane",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/4',
                popup: false
            },
            {
                name: "expressDetour",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/3',
                popup: false
            },
            {
                name: "trainOneMile",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/2',
                popup: false
            },
            {
                name: "NJTservice",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/1',
                popup: true
            },
            {
                name: "shuttleBus",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/1',
                popup: false
            },
            {
                name: "parkRideLots",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/2',
                popup: true
            },
            {
                name: "bikeNetwork",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/3',
                popup: false
            },
            {
                name: "luCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/4',
                qry: "COUNTY = 'Burlington'",
                popup: true
            },
            {
                name: "bizCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/5',
                qry: "COUNTIES = 'Burlington'",
                popup: true
            },
            {
                name: "freightCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/6',
                qry: "COUNTY = 'Burlington'",
                popup: true
            },
            {
                name: "planType",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/7',
                popup: true
            },
            {
                name: "scenicByway",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/0',
                popup: false
            },
            {
                name: "flood",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/8',
                popup: false
            },
            {
                name: "socialResources",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/9',
                popup: false
            },
            {
                name: 'pinelands',
                url: 'https://services1.arcgis.com/nCm6SZaiGMuGX35l/arcgis/rest/services/Pinelands_Area/FeatureServer/0',
                popup: false
            }
        ]
    },
    {
        category: 'strategies',
        layers: [
            {
                name: "tip-point",
                url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Transportation/NJTIP/MapServer/0',
                qry: "COUNTY = 'Burlington'",
                popup: true
            },
            {
                name: "tip-roads",
                url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Transportation/NJTIP/MapServer/1',
                qry: "COUNTY = 'Burlington'",
                popup: true
            },
            {
                name: "hsip-intersection",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/0',
                popup: true
            },
            {
                name: "hsip-road",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/1',
                popup: true
            },
            {
                name: "burCoPubWorks",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/2',
                popup: true
            },
            {
                name: "congestion-lrp",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/3',
                popup: true
            },
            {
                name: "cmp-inventory",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/3',
                popup: true
            }
        ]
    }
];

// load BurlCo boundary on load
var BurlCo = L.esri.featureLayer({
    url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Boundaries/DVRPC_Boundaries/FeatureServer/1',
    ignoreRenderer: false,
    where: "CO_NAME = 'Burlington'"
}).addTo(map);
// load data function


$(document).ready(function(){
    // load conditions layer group on conditions pane click

    $(".bhcmp-panel").on('click', function(){
        // only load if panel is not already active
        if ($(this).hasClass("panel-active")){
        }
        else{
            lyrOrder =[];
            lyrGroup.removeFrom(map);
            loadLayerGroup(activePane, allLayers, lyrOrder);
        }
        });
});