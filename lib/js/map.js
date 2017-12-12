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
    },
]

// L.esri.featureLayer({
//     url: "https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BurCo_Conditions/FeatureServer/0"
// }).addTo(map);

$(document).ready(function(){
    $("#bchmp-conditions").on('click', function(){
        console.log(conditions);
        for (i = 0; i < conditions.length; i++){
            var link = conditions[i].url;
            var lyrName = conditions[i].name;
            lyr = L.esri.featureLayer({ url: link});
            lyr.addTo(map);
            console.log(lyrName+" added to map.");
        }
    });

//     $(".row").on('click', function(){

//         if($("#map").hasClass("col-lg-9") == true){
//             var burlington = L.geoJson(null, {
//                 style: burcoBaseStyle,
//                 interactive: false,
//             })
//             burlington.addData(burcoLayer);
//             burlington.addTo(map);
//         }
//         else if($("#bchmp-conditions").hasClass("panel-active") == true){
//             var conditions = L.geoJson(null, {
//                 style: conditionsStyle,
//                 interactive: true,
//                 onEachFeature: conditionsActions
//             })
//             conditions.addData(conditionsLayerGroup);
//             conditions.addTo(map);
//         }
//         else if ($("bchmp-resources").hasClass("panel-active")==true){
//             var resources = L.geoJson(null, {
//                 style: resourcesStyle,
//                 interactive: true,
//                 onEachFeature: resourcesActions
//             })
//             resources.addData(resourcesLayerGroup);
//             resources.addTo(map);
//         }
//         else if ($("bchmp-strategies").hasClass("panel-active")==true){
//             var strategies = L.geoJson(null, {
//                 style: strategiesStyle,
//                 interactive: true,
//                 onEachFeature: strategiesActions
//             })
//             strategies.addData(strategiesLayerGroup);
//             strategies.addTo(map);

//         }
//     });

});