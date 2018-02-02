// Load map variable and set extent

function initmap() {
    map = new L.map('map');
    var baseTile = 'https://server.arcgisonline.com/arcgis/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}';
    var attributes = 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ ';
    var base = L.tileLayer(baseTile, {
        minZoom: 2,
        maxZoom: 16,
        attribution: attributes,
    });
    map.setView(new L.LatLng(39.87, -74.73), 10);
    map.addLayer(base);
};

initmap();

// Define Map Controls
map.attributionControl.setPosition('bottomleft');
map.zoomControl.setPosition('bottomright');
var projectLogo = new L.Control.ProjectLogo();
var viewCenter = new L.Control.ViewCenter();
map.addControl(projectLogo);
map.addControl(viewCenter);


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
var allLayers = [
    {conditions:
        [{
            name: "trafficSafety",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/0',
            popup: true,
            drawingPane: "line"
        },
        {
            name: "trafficCongestion",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/1',
            popup: true,
            drawingPane: "line"
        },
        {
            name: "LRPcongestion",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/2',
            popup: true,
            drawingPane: "line"
        },
        {
            name: "masterplanCongestion",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/3',
            popup: true,
            drawingPane: "line"
        },
        {
            name: "transitScore",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/4',
            popup: false,
            drawingPane: "polygon"
        },
        {
            name: "cmpScore",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/5',
            popup: false,
            drawingPane: "line"
        },
        {
            name: "connectIndex",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/6',
            popup: false,
            drawingPane: "polygon"
        },
        {
            name: "roadAddition",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/7',
            popup: false,
            drawingPane: "line"
        }]
    },
    {resources: 
        [{
            name: "njCMPCorridors",
            url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Transportation/CMP_Corridors/MapServer/0',
            popup: true,
            drawingPane: "polygon"
        },
        {
            name: "NHS",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/0',
            popup: false,
            drawingPane: "line"
        },
        {
            name: "hurricane",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/4',
            popup: false,
            drawingPane: "line"
        },
        {
            name: "expressDetour",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/3',
            popup: false,
            drawingPane: "line"
        },
        {
            name: "trainOneMile",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/2',
            popup: false,
            drawingPane: "line"
        },
        {
            name: "NJTservice",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/1',
            popup: true,
            drawingPane: "line"
        },
        {
            name: "shuttleBus",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/1',
            popup: false,
            drawingPane: "line"
        },
        {
            name: "parkRideLots",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/2',
            popup: true,
            drawingPane: "point"
        },
        {
            name: "bikeNetwork",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/3',
            popup: false,
            drawingPane: "line"
        },
        {
            name: "luCenters",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/4',
            qry: "COUNTY = 'Burlington'",
            popup: true,
            drawingPane: "polygon"
        },
        {
            name: "bizCenters",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/5',
            qry: "COUNTIES = 'Burlington'",
            popup: true,
            drawingPane: "polygon"
        },
        {
            name: "freightCenters",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/6',
            qry: "COUNTY = 'Burlington'",
            popup: true,
            drawingPane: "polygon"
        },
        {
            name: "planType",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/7',
            popup: true,
            drawingPane: "polygon"
        },
        {
            name: "scenicByway",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/0',
            popup: false,
            drawingPane: "line"
        },
        {
            name: "flood",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/8',
            popup: false,
            drawingPane: "polygon"
        },
        {
            name: "socialResources",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/9',
            popup: false,
            drawingPane: "point"
        },
        {
            name: 'pinelands',
            url: 'https://services1.arcgis.com/nCm6SZaiGMuGX35l/arcgis/rest/services/Pinelands_Area/FeatureServer/0',
            popup: false,
            drawingPane: "polygon"
        }]
    },
    {strategies:
        [{
            name: "tip-point",
            url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Transportation/NJTIP/MapServer/0',
            qry: "COUNTY = 'Burlington'",
            popup: true,
            drawingPane: "point"
        },
        {
            name: "tip-roads",
            url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Transportation/NJTIP/MapServer/1',
            qry: "COUNTY = 'Burlington'",
            popup: true,
            drawingPane: "line"
        },
        {
            name: "hsip-intersection",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/0',
            popup: true,
            drawingPane: "point"
        },
        {
            name: "hsip-road",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/1',
            popup: true,
            drawingPane: "line"
        },
        {
            name: "burCoPubWorks",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/2',
            popup: true,
            drawingPane: "point"
        },
        {
            name: "congestion-lrp",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/3',
            popup: true,
            drawingPane: "line"
        },
        {
            name: "cmp-inventory",
            url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/3',
            popup: true,
            drawingPane: "line"
        }]
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
            for (layer in lyrGroup){
                lyrGroup[layer].removeFrom(map);
            }
            lyrGroup.length = 0;
        }
        });
});