webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(5);
var mapper = __webpack_require__(6);

__webpack_require__(3);

function sortBy(array, key) {
    return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    });
}
var lyrOrder = [];
var checked = [];
var activePane;

// jQuery START
$(document).ready(function() {

    // open project modal on page load
    $(window).on('load', function() {
        $('#about-modal').modal('show');
    });


    $('#map').on("mouseover", '.cmp-pop-img', function() {
        var newContent = $(this).attr("title");
        $(this).parent().siblings(".popup-content-bold").children("h4").text(newContent);
    });

    $('#map').on("mouseout", '.cmp-pop-img', function() {
        $(this).parent().siblings(".popup-content-bold").children("h4").text("Hover over icon for strategy title");
    });



    // active panel changes
    $('.bchmp-panel').on('click', function() {
        var clickTarget = $(this).attr('id');
        if ($("#" + clickTarget).children(".panel-title").children(".panel-title-block").children(".title").text().toLowerCase() === 'right-of-way') {
            activePane = "row";
        } else {
            activePane = $("#" + clickTarget).children(".panel-title").children(".panel-title-block").children(".title").text().toLowerCase();
        }
        if ($("#map").hasClass('col-lg-10 col-md-10 col-sm-10')) {
            $("#map").toggleClass("col-lg-10 col-md-10 col-sm-10 col-lg-8 col-md-8 col-sm-8");
            $("#sidebar").toggleClass("col-lg-2 col-md-2 col-sm-2 col-lg-4 col-md-4 col-sm-4");
            mapper.projectLogo.remove();
            $("#stakeholders-logo-map").hide();
        }
        if ($("#" + clickTarget).hasClass('panel-inactive')) {
            mapper.lazyLoadLayers(activePane);
            mapper.checkboxLayers(lyrOrder);
            $(".panel-active").toggleClass('panel-active panel-inactive');
            $("#" + clickTarget).toggleClass('panel-inactive panel-active');
            $(".panel-active").attr("class", "panel-active col-lg-9 col-md-8 col-sm-9");
            $(".panel-inactive").attr("class", "panel-inactive col-lg-1 col-md-1 col-sm-1");
            $("#" + clickTarget).children(".legend-box").addClass("in");
            $("#" + clickTarget).children(".layer-box").addClass("in");
        }

        $('.panel-active').children(".panel-heading").show();
        $('.panel-active').children(".panel-title-logo").attr("style", "display: inline-block");
        $('.panel-active').children(".panel-title").children(".panel-title-block").children(".panel-title-link").children(".panel-title-info").show();
        $('.panel-active').children(".pane-logo-stakeholders").show();
        $('.panel-inactive').children(".panel-title-logo").hide();
        $('.panel-inactive').children(".panel-title").children(".panel-title-block").children(".panel-title-link").children(".panel-title-info").hide();
        $('.panel-inactive').children(".panel-heading").hide();
        $('.panel-inactive').children(".layer-box").removeClass("in");
        $('.panel-inactive').children(".legend-box").removeClass("in");
        $('.panel-inactive').children(".pane-logo-stakeholders").hide();
    });


    // layer control
    // on checkbox change
    $("input:checkbox[name='layer-control']").on('change', function() {
        var id = $(this).attr('id');
        // check to see if a checkbox is checked and if so, push it to a global array, and if not, remove it from map
        if ($('#' + id).prop('checked')) {
            mapper.map.removeLayer(window[id]);
            checked.push({
                'z-index': $(this).attr('z-index'),
                'layer': id
            })
        } else {
            mapper.map.removeLayer(window[id]);
            for (var i = 0; i < checked.length; i++) {
                if (checked[i].layer === id) {
                    checked = checked.filter(function(checked) {
                        return checked.layer != id;
                    });
                };
            };
        }
        lyrOrder = sortBy(checked, 'z-index');
        mapper.checkboxLayers(lyrOrder);
    });


    // jQuery END
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {var esri = __webpack_require__(1);
var plugins = __webpack_require__(7);


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
        conditions: [{
                name: "trafficSafety",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions/FeatureServer/0',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "trafficCongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions/FeatureServer/1',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "LRPcongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions/FeatureServer/2',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "masterplanCongestion",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions/FeatureServer/3',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "transitScore",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions/FeatureServer/4',
                popup: false,
                drawingPane: "polygon"
            },
            {
                name: "cmpScore",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions/FeatureServer/5',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "connectIndex",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions/FeatureServer/6',
                popup: false,
                drawingPane: "polygon"
            },
            {
                name: "roadAddition",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Conditions/FeatureServer/7',
                popup: false,
                drawingPane: "line"
            }
        ]
    },
    {
        resources: [{
                name: "njCMPCorridors",
                url: 'https://arcgis.dvrpc.org/arcgis/rest/services/Transportation/CMP_Corridors/MapServer/0',
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "NHS",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/0',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "hurricane",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/1',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "expressDetour",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/2',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "trainOneMile",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/3',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "NJTservice",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/4',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "shuttleBus",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/5',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "parkRideLots",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/6',
                popup: true,
                drawingPane: "point"
            },
            {
                name: "bikeNetwork",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/7',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "luCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/8',
                qry: "COUNTY = 'Burlington'",
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "bizCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/9',
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "freightCenters",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/10',
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "planType",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/11',
                popup: true,
                drawingPane: "polygon"
            },
            {
                name: "scenicByway",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/12',
                popup: false,
                drawingPane: "line"
            },
            // -------------- THIS LAYER ISN'T WORKING AND I DON'T KNOW WHY ----------------------------------//
            // {
            //     name: "flood",
            //     url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/Resources/FeatureServer/8',
            //     popup: false,
            //     drawingPane: "polygon"
            // },
            {
                name: "socialResources",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Resources/FeatureServer/14',
                popup: false,
                drawingPane: "point"
            },
            {
                name: 'pinelands',
                url: 'https://services1.arcgis.com/nCm6SZaiGMuGX35l/arcgis/rest/services/Pinelands_Area/FeatureServer/0',
                popup: false,
                drawingPane: "polygon"
            }
        ]
    },
    {
        strategies: [{
                name: "tip-point",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Strategies/FeatureServer/0',
                popup: true,
                drawingPane: "point"
            },
            {
                name: "tip-roads",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Strategies/FeatureServer/1',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "hsip-intersection",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Strategies/FeatureServer/2',
                popup: true,
                drawingPane: "point"
            },
            {
                name: "hsip-road",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Strategies/FeatureServer/3',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "burCoPubWorks",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Strategies/FeatureServer/4',
                popup: true,
                drawingPane: "point"
            },
            {
                name: "congestion-lrp",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Strategies/FeatureServer/5',
                popup: true,
                drawingPane: "line"
            },
            {
                name: "cmp-inventory",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_Strategies/FeatureServer/6',
                popup: true,
                drawingPane: "line"
            }
        ]
    },
    {
        row: [{
                name: "cross",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_ROW/FeatureServer/2',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "capacity",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/arcgis/rest/services/BCHMP_ROW/FeatureServer/1',
                popup: false,
                drawingPane: "line"
            },
            {
                name: "row-recommend",
                url: 'https://services1.arcgis.com/LWtWv6q6BJyKidj8/ArcGIS/rest/services/BCHMP_ROW/FeatureServer/0',
                popup: false,
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
    lyrGroup.length = 0;
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
        if (vizName.indexOf(temp) != -1) {
            loaded[lyr].addTo(map);
            $("#legend-" + temp).show();
        } else {
            if (map.hasLayer(loaded[lyr])) {
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8);

var lyrName;
var md = [];

// dynamic pop-up creation
function congestStratPopUps(props) {
    var info = [];
    var popupContent;
    // loop through properties to only pull out necessary fields
    for (key in props) {
        if (key.match(/^Strat.*/) && props[key] == 'Y') {
            var strat = key;
            switch (key) {
                // assign img paths for the appropriate strategies
                case 'Strat1':
                    var name = "Operational Strategies";
                    var imgPath = __webpack_require__(10);
                    break;
                case 'Strat2':
                    var name = "Transportation Demand Management Strategies";
                    var imgPath = __webpack_require__(11);
                    break;
                case 'Strat3':
                    var name = "Increase Existing Transportation System Capacity";
                    var imgPath = __webpack_require__(12);
                    break;
                case 'Strat4':
                    var name = "Add New Transportation System Capacity";
                    var imgPath = __webpack_require__(13);
                    break;
                case 'Strat5':
                    var name = "Goods Movement Strategies";
                    var imgPath = __webpack_require__(14);
                    break;
            }
            // create dictionary to access during pop-up creation
            info.push({
                attr: name,
                value: imgPath
            });
        }
    }
    switch (info.length) {
        // create pop ups based on number of strategies
        case 1:
            popupContent = L.Util.template('<div class="popup-title">' +
                '<p>Congestion Management Strategies</p></div>' +
                '<div class="popup-content-bold"><h4 style="text-align: center;">Hover over icon for strategy title</h4></div>' +
                '<div class="popup-content-congest">' +
                '<img class="cmp-pop-img" width="20%" src="' + info[0]['value'] + '" title="' + info[0]['attr'] + '"/>' +
                '</div>');
            break;
        case 2:
            popupContent = L.Util.template('<div class="popup-title">' +
                '<p>Congestion Management Strategies</p></div>' +
                '<div class="popup-content-bold"><h4 style="text-align: center;">Hover over icon for strategy title</h4></div>' +
                '<div class="popup-content-congest">' +
                '<img class="cmp-pop-img" width="20%" src="' + info[0]['value'] + '" title="' + info[0]['attr'] + '"/>' +
                '<img class="cmp-pop-img" width="20%" src="' + info[1]['value'] + '" title="' + info[1]['attr'] + '"/>' +
                '</div>');
            break;
        case 3:
            popupContent = L.Util.template('<div class="popup-title">' +
                '<p>Congestion Management Strategies</p></div>' +
                '<div class="popup-content-bold"><h4 style="text-align: center;">Hover over icon for strategy title</h4></div>' +
                '<div class="popup-content-congest">' +
                '<img class="cmp-pop-img" width="20%" src="' + info[0]['value'] + '" title="' + info[0]['attr'] + '"/>' +
                '<img class="cmp-pop-img" width="20%" src="' + info[1]['value'] + '" title="' + info[1]['attr'] + '"/>' +
                '<img class="cmp-pop-img" width="20%" src="' + info[2]['value'] + '" title="' + info[2]['attr'] + '"/>' +
                '</div>');
            break;
        case 4:
            popupContent = L.Util.template('<div class="popup-title">' +
                '<p>Congestion Management Strategies</p></div>' +
                '<div class="popup-content-bold"><h4 style="text-align: center;">Hover over icon for strategy title</h4></div>' +
                '<div class="popup-content-congest">' +
                '<img class="cmp-pop-img" width="20%" src="' + info[0]['value'] + '" title="' + info[0]['attr'] + '"/>' +
                '<img class="cmp-pop-img" width="20%" src="' + info[1]['value'] + '" title="' + info[1]['attr'] + '"/>' +
                '<img class="cmp-pop-img" width="20%" src="' + info[2]['value'] + '" title="' + info[2]['attr'] + '"/>' +
                '<img class="cmp-pop-img" width="20%" src="' + info[3]['value'] + '" title="' + info[3]['attr'] + '"/>' +
                '</div>');
            break;
        case 5:
            popupContent = L.Util.template('<div class="popup-title">' +
                '<p>Congestion Management Strategies</p></div>' +
                '<div class="popup-content-bold"><h4 style="text-align: center;">Hover over icon for strategy title</h4></div>' +
                '<div class="popup-content-congest">' +
                '<img class="cmp-pop-img" width="20%" src="' + info[0]['value'] + '" title="' + info[0]['attr'] + '"/>' +
                '<img class="cmp-pop-img" width="20%" src="' + info[1]['value'] + '" title="' + info[1]['attr'] + '"/>' +
                '<img class="cmp-pop-img" width="20%" src="' + info[2]['value'] + '" title="' + info[2]['attr'] + '"/>' +
                '<img class="cmp-pop-img" width="20%" src="' + info[3]['value'] + '" title="' + info[3]['attr'] + '"/>' +
                '<img class="cmp-pop-img"  width="20%" src="' + info[4]['value'] + '" title="' + info[4]['attr'] + '"/>' +
                '</div>');
            break;
        default:
            popupContent = L.Util.template('<div class="popup-title">' +
                '<p>Congestion Management Strategies</p></div>' +
                '<div class="popup-content-congest">' +
                '<div style="width: 100%; font-size: 1.5em">No Recommended Congestion Management Strategies</div>' +
                '</div>');
            break;
    }
    return popupContent;
}

function stratInventoryPopups(props) {
    var info = [];
    var popupContent;
    // loop through properties to only access necessary attributes
    for (key in props) {
        if (key.match(/^CMP\d$/) && props[key] != " ") {
            info.push({
                field: key,
                corridor: props[key]
            });
        } else if (key.match(/^CMP_\d$/) && props[key] != " ") {
            info.push({
                field: key,
                link: props[key]
            });
        }
    }
    switch (info.length) {
        // build pop-ups based on number of CMP corridors intersected
        default: popupContent = L.Util.template('<div class="popup-title">' +
            '<p>Congestion Management Strategies</p></div>' +
            '<div class="popup-content-congest">' +
            '<div style="width: 100%; font-size: 1.5em">No Appropriate CMP Strategies</div>' +
            '</div>');
        break;
        case 8:
                popupContent = L.Util.template('<div class="popup-title"><p>Appropriate CMP Strategies</p></div>' +
                '<div class="popup-content">' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[0]['corridor'] + '&nbsp;&nbsp;<a href="' + info[4]['link'] + '" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a></p>' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[1]['corridor'] + '&nbsp;&nbsp;<a href="' + info[5]['link'] + '" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a></p>' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[2]['corridor'] + '&nbsp;&nbsp;<a href="' + info[6]['link'] + '" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a></p>' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[3]['corridor'] + '&nbsp;&nbsp;<a href="' + info[7]['link'] + '" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a></p>' +
                '</div>');
            break;
        case 6:
                popupContent = L.Util.template('<div class="popup-title"><p>Appropriate CMP Strategies</p></div>' +
                '<div class="popup-content">' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[0]['corridor'] + '&nbsp;&nbsp;<a href="' + info[3]['link'] + '" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a></p>' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[1]['corridor'] + '&nbsp;&nbsp;<a href="' + info[4]['link'] + '" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a></p>' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[2]['corridor'] + '&nbsp;&nbsp;<a href="' + info[5]['link'] + '" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a></p>' +
                '</div>');
            break;
        case 4:
                popupContent = L.Util.template('<div class="popup-title"><p>Appropriate CMP Strategies</p></div>' +
                '<div class="popup-content">' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[0]['corridor'] + '&nbsp;&nbsp;<a href="' + info[2]['link'] + '" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a>' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[1]['corridor'] + '&nbsp;&nbsp;<a href="' + info[3]['link'] + '" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a></p>' +
                '</div>');
            break;
        case 2:
                popupContent = L.Util.template('<div class="popup-title"><p>Appropriate CMP Strategies</p></div>' +
                '<div class="popup-content">' +
                '<p><span class="popup-content-bold">CMP Corridor: </span>' + info[0]['corridor'] + '&nbsp;&nbsp;<a href="' + info[1]['link'] + '" class="popup-content-bold"  rel="noopener" target="_blank">Click Here for Details</a></p>' +
                '</div>');
            break;

    }
    return popupContent;
}

function crossSectionPopups(props) {
    // create pop-ups based on if the road is in the urban area or not
    if (props.LandUse != 'Urban') {
        popupContent = L.Util.template('<div class="popup-title"><p>Typical Cross Sections</p></div>' +
            '<div class="popup-content">' +
            '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> {FHWA}</p>' +
            '<p><span class="popup-content-bold">NJDOT Land Use:</span> {LandUse}</p>' +
            '<p><span class="popup-content-bold">Cross Section: </span>Same as Existing</p>' +
            '</div>', props);
        return popupContent;
    } else {
        popupContent = L.Util.template('<div class="popup-title"><p>Typical Cross Sections</p></div>' +
            '<div class="popup-content">' +
            '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> {FHWA}</p>' +
            '<p><span class="popup-content-bold">NJDOT Land Use:</span> {LandUse}</p>' +
            '<p><span class="popup-content-bold">Capacity: </span>{Capacity}</p>' +
            '<p><span class="popup-content-bold">Width of Center Median or Turning Lane:</span> {Median} ft</p>' +
            '<p><span class="popup-content-bold">Width of Travel Lane:</span> {TravLane_W} ft</p>' +
            '<p><span class="popup-content-bold">Bike Lane Width (Shoulder):</span> {BicLan_Sho} ft</p>' +
            '<p><span class="popup-content-bold">Parking Lane Width:</span> {PLane_Sho} ft</p>' +
            '<p><span class="popup-content-bold">Sidewalk Buffer Width:</span> {Sidewa_Buf} ft</p>' +
            '<p><span class="popup-content-bold">Sidewalk Width:</span> {Sidewalk} ft</p>' +
            '<a href="{img}" rel="noopener" target="_blank">Click Here for a ROW Cross-Section Diagram</a>' +
            '</div>', props);
        return popupContent;
    }
}

function createPopUps(feature, layer) {
    var popupContent;
    var props = feature.properties;
    var name = layer._eventParents[Object.keys(layer._eventParents)].options.id;
    // custom pop-ups for each layer
    switch (name) {
        case "trafficSafety":
            popupContent = L.Util.template('<div class="popup-title"><p>2015 Traffic Safety</p></div><div class="popup-content"><p><span class="popup-content-bold">Average Crash Rate by Functional Class:</span> ' + parseFloat(props.F2xCrash_1).toFixed(2) + '</p></div>');
            break;
        case "trafficCongestion":
            popupContent = L.Util.template('<div class="popup-title"><p>2013 Traffic Congestion</p></div><div class="popup-content"><p><span class="popup-content-bold">Peak Hour Volume/Capacity Ratio:</span> ' + parseFloat(props.Base_VC).toFixed(2) + '</p></div>');
            break;
        case "LRPcongestion":
            popupContent = L.Util.template('<div class="popup-title"><p>2040 LRP Traffic Congestion</p></div><div class="popup-content"><p><span class="popup-content-bold">Forecasted Peak Hour Volume/Capacity Ratio:</span> ' + parseFloat(props.LRP_VC).toFixed(2) + '</p></div>');
            break;
        case "masterplanCongestion":
            popupContent = L.Util.template('<div class="popup-title"><p>Master Plan Traffic Congestion</p></div><div class="popup-content"><p><span class="popup-content-bold">Forecasted Peak Hour Volume/Capacity Ratio:</span> ' + parseFloat(props.MPlan_VC).toFixed(2) + '</p></div>');
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
            popupContent = L.Util.template('<div class="popup-title"><p>New Jersey TIP<br>Bridge/Intersections</p></div><div class="popup-content"><p><span class="popup-content-bold">Project Name:</span> {PROJECTNAM}</p><p><span class="popup-content-bold">Type:</span> {TYPE}</p><p><span class="popup-content-bold">Program:</span> {PROGRAM}</p><a href="{REPORT}" rel="noopener" target="_blank">Click Here for More Info</a></div>', props);
            break;
        case "tip-roads":
            popupContent = L.Util.template('<div class="popup-title"><p>New Jersey TIP<br>Roadways</p></div><div class="popup-content"><p><span class="popup-content-bold">Project Name:</span> {PROJECT}</p><p><span class="popup-content-bold">Program:</span> {PROGRAM}</p><p><span class="popup-content-bold">Description:</span> {DESCRIPTIO}</p><a href="{DETAIL}" rel="noopener" target="_blank">Click Here for More Info</a></div>', props);
            break;
        case "burCoPubWorks":
            popupContent = L.Util.template('<div class="popup-title"><p>Burlington County Public Works Improvement Project</p></div><div class="popup-content"><p><span class="popup-content-bold">Project:</span> {Project}</p><p><span class="popup-content-bold">Future:</span> {Future}</p></div>', props);
            break;
        case "congestion-lrp":
            popupContent = congestStratPopUps(props);
            break;
        case "cmp-inventory":
            popupContent = stratInventoryPopups(props);
            break;
        case "row-recommend":
            popupContent = L.Util.template('<div class="popup-title"><p>Minimum Recommended Right-of-Way</p></div><div class="popup-content">' +
                '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> {NJDOT_FC_2}</p>' +
                '<p><span class="popup-content-bold">Recommended ROW Width:</span> {ROW} ft</p>' +
                '<p><span class="popup-content-bold">NJDOT Urban Area:</span> {NJDOT_LU}</p></div>', props);
            break;
        case "cross":
            popupContent = crossSectionPopups(props);
            break;
        default:
            return;
    }
    layer.bindPopup(popupContent);
}

module.exports = {
    createPopUps: createPopUps
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Leaflet - Return to Map Center [Created and maintained by pwldp | https://github.com/pwldp/leaflet.viewcenter]
L.Control.ViewCenter = L.Control.extend({
    options: {
        position: 'bottomright',
        title: 'Return to Default Extent',
        forceSeparateButton: true,
        // declare home coordinates
        vcLatLng: [39.925, -74.539],
        vcZoom: 10
    },

    onAdd: function(map) {
        var className = 'leaflet-control-view-center glyphicon glyphicon-home',
            container;

        if (map.zoomControl && !this.options.forceSeparateButton) {
            container = map.zoomControl._container;
        } else {
            container = L.DomUtil.create('div', 'leaflet-bar');
        }

        this._createButton(this.options, className, container, this.setCenterView, map);

        return container;
    },

    _createButton: function(opts, className, container, fn, context) {
        var link = L.DomUtil.create('a', className, container);
        link.href = '#';
        link.title = opts.title;

        var zoom = opts.vcZoom || 6;

        L.DomEvent
            .addListener(link, 'click', L.DomEvent.stopPropagation)
            .addListener(link, 'click', L.DomEvent.preventDefault)
            .addListener(link, 'click', function() {
                context.setView(opts.vcLatLng, zoom);
            }, context);
        return link;
    }
});

L.control.viewcenter = function(options) {
    return new L.Control.ViewCenter(options);
};


// Project Logo Control
L.Control.ProjectLogo = L.Control.extend({
    options: {
        position: 'topleft',
        title: 'Burlington County Highway Master Plan'
    },
    onAdd: function(map) {
        var img = L.DomUtil.create('img');
        // declare IMG path for project logo
        img.src = __webpack_require__(9);
        img.style.width = '230px';
        return img;
    },
    onRemove: function(map) {

    }
});

L.control.projectlogo = function(options) {
    return new L.Control.ProjectLogo(options);
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/project-logo-large.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/strat-1.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/strat-2.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/strat-3.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/strat-4.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/strat-5.svg";

/***/ })
],[4]);