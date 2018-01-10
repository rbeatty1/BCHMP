// Load map variable and set extent

function initmap() {
    map = new L.map('map');
    var baseTile = 'https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}';
    var attributes = 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ |   <a href="http://www.dvrpc.org/Mapping/Webmaps/" target="_blank">Data and application created by DVRPC</a>';
    var base = L.tileLayer(baseTile, {
        minZoom: 2,
        maxZoom: 20,
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

var conditions = [
    {
    "name": "Traffic Safety",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/0'
    },
    {
    "name": "Traffic Congestion (2013)",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/1'
    },
    {
    "name": "Traffic Congestion (LRP)",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/2'
    },
    {
    "name": "Traffic Congestion (Master Plan)",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/3'
    },
    {
    "name": "Transit Score",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/4'
    },
    {
    "name": "CMP Score",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/5'
    },
    {
    "name": "Roadway Connectivity Index (2010)",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/6'
    },
    {
    "name": "Candidate County Road Addition",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/7'
    }
];

var resources = [
    {
    "name": "National Highway System",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/0'
    },
    {
    "name": "BurLINK Shuttle Bus Service",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/1'
    },
    {
    "name": "Park-and-Ride Lots",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/2'
    },
    {
    "name": "On-Road Bicycle Network",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/3'
    },
    {
    "name": "Land Use Centers",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/4'
    },
    {
    "name": "Business Centers",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/5'
    },
    {
    "name": "Freight Centers",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/6'
    },
    {
    "name": "2040 Planning Areas",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/7'
    },
    {
    "name": "Wetlands and Floodplains",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/8'
    },
    {
    "name": "Cultural, Historical, and Community Resources",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/Resources/FeatureServer/9'
    }
];

var strategies = [
    {
    "name": "Highway Safety Improvement Program - Eligible Intersections",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/0'
    },
    {
    "name": "Highway Safety Improvement Program - Eligible Roadways",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/1'
    },
    {
    "name": "Burlington County Public Works Improvement Projects",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/2'
    },
    {
    "name": "Congestions Management Strategies - 2040 LRP",
    "url": 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Strategies/FeatureServer/3'
    }];



$(document).ready(function(){
    // load conditions layer group on conditions pane click
    $("#bchmp-conditions").on('click', function(){
        lyrGroup.clearLayers();
        for (i = 0; i < conditions.length; i++){
            var link = conditions[i].url;
            var lyrName = conditions[i].name;
            lyr = L.esri.featureLayer({ url: link, ignoreRenderer: false});
            lyrGroup.addLayer(lyr);
        };
        lyrGroup.addTo(map);
    }); 

    // load resources layer group on resources pane click
    $("#bchmp-resources").on('click', function(){
        lyrGroup.clearLayers();
        for (i = 0; i < resources.length; i++){
            var link = resources[i].url;
            var lyrName = resources[i].name;
            lyr = L.esri.featureLayer({ url: link, ignoreRenderer: false});
            lyrGroup.addLayer(lyr);
        };
        lyrGroup.addTo(map);
    });

    // load strategies layer group on strategies pane click
    $("#bchmp-strategies").on('click', function(){
        lyrGroup.clearLayers();
        for (i = 0; i < strategies.length; i++){
            var link = strategies[i].url;
            var lyrName = strategies[i].name;
            lyr = L.esri.featureLayer({ url: link, ignoreRenderer: false});
            lyrGroup.addLayer(lyr);
        };
        lyrGroup.addTo(map);
    });  
});