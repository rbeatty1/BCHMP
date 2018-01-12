// Load map variable and set extent

function initmap() {
    map = new L.map('map');
    var baseTile = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
    var attributes = 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ |   <a href="http://www.dvrpc.org/Mapping/Webmaps/" target="_blank">Data and application created by DVRPC</a>';
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
var viewCenter = new L.Control.ViewCenter();
map.addControl(viewCenter);


/* Add Data Layers as follows:

Default Landing: Burlington County Base (DVRPC Open Data // "CO_NAME" = 'Burlington')
Conditions: BCHMP - Conditions (DVRPC // slawrence_dvrpcgis | https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer)
Resources: BCHMP - Resources (DVRPC // slawrence_dvrpcgis   | https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer)
Strategies: BCHMP - Strategies (DVRPC // slawrence_dvrpcgis | https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Strategies/FeatureServer)


*/

var lyr;
var lyrGroup = L.layerGroup();

// array containing objects that define the necessary information to load the feature layers corresponding to each web map
var layers = [
    {
        category : 'conditions',
        layers: [
            {
                name: "trafficSafety",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/0'
            },
            {
                name: "trafficCongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/1'
            },
            {
                name: "LRPcongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/2'
            },
            {
                name: "masterplanCongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/3'
            },
            {
                name: "transitScore",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/4'
            },
            {
                name: "cmpScore",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/5'
            },
            {
                name: "connectIndex",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/6'
            },
            {
                name: "roadAddition",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/7'
            }
        ]
    },
    {
        category: 'resources',
        layers: [
            {
                name: "njCMPCorridors",
                url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Transportation/CMP_Corridors/MapServer/0'
            },
            {
                name: "NHS",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/0'
            },
            {
                name: "hurricane",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/4'
            },
            {
                name: "expressDetour",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/3'
            },
            // {
            //     name: "managedHighway",
            //     url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/0',
            //     ignoreRenderer: true,
            //     style: myStyle(name)
            // },
            {
                name: "trainOneMile",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/2'
            },
            {
                name: "NJTservice",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/1'
            },
            {
                name: "shuttleBus",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/1'
            },
            {
                name: "parkRideLots",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/2'
            },
            {
                name: "bikeNetwork",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/3'
            },
            {
                name: "luCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/4',
                qry: "COUNTY = 'Burlington'"
            },
            {
                name: "bizCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/5',
                qry: "COUNTIES = 'Burlington'"
            },
            {
                name: "freightCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/6',
                qry: "COUNTY = 'Burlington'"
            },
            {
                name: "planType",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/7'
            },
            {
                name: "scenicByway",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/bchmp_test/FeatureServer/0'
            },
            {
                name: "flood",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/8'
            },
            {
                name: "socialResources",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/9'
            },
            {
                name: 'pinelands',
                url: 'https://services1.arcgis.com/nCm6SZaiGMuGX35l/arcgis/rest/services/Pinelands_Area/FeatureServer/0'
            }
        ]
    },
    {
        category: 'strategies',
        layers: [
            {
                name: "hsip-intersection",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/0'
            },
            {
                name: "hsip-road",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/1'
            },
            {
                name: "burCoPubWorks",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/2'
            },
            {
                name: "congestion-lrp",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/3'
            }
        ]
    }
];

// load data function

$(document).ready(function(){
    // load conditions layer group on conditions pane click
    $(".bhcmp-panel").on('click', function(){
        // only load if panel is not already active
        if ($(this).hasClass("panel-active")){
            return;
        }
        else{
            lyrOrder =[];
            lyrGroup.removeFrom(map);
            loadLayerGroup(input, layers, lyrOrder);
        }
        });
});