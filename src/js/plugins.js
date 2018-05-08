require('./leaflet-controls.js');

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
                    var imgPath = require('../img/Congest-Icons/strat-1.svg');
                    break;
                case 'Strat2':
                    var name = "Transportation Demand Management Strategies";
                    var imgPath = require('../img/Congest-Icons/strat-2.svg');
                    break;
                case 'Strat3':
                    var name = "Increase Existing Transportation System Capacity";
                    var imgPath = require('../img/Congest-Icons/strat-3.svg');
                    break;
                case 'Strat4':
                    var name = "Add New Transportation System Capacity";
                    var imgPath = require('../img/Congest-Icons/strat-4.svg');
                    break;
                case 'Strat5':
                    var name = "Goods Movement Strategies";
                    var imgPath = require('../img/Congest-Icons/strat-5.svg');
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
    }
    else if (props.ROW == 0){
        popupContent = L.Util.template('<div class="popup-title"><p>Typical Cross Sections</p></div>' +
            '<div class="popup-content">' +
            '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> Principal Arterial - Ramp</p>' +
            '<p><span class="popup-content-bold">NJDOT Land Use:</span> {LandUse}</p>' +
            '<p><span class="popup-content-bold">Cross Section: </span>Same as Existing</p>' +
            '</div>', props);
        return popupContent;
    } 
    else{
        let img;
        switch(props.img){
            default:
                return;
            case "img/ROW/Local.png":
                img = require("../img/ROW/Local.png");
                break;
            case "img/ROW/MajC_M.png":
                img = require("../img/ROW/MajC_M.png");
                break;
            case "img/ROW/MajC_W.png":
                img = require("../img/ROW/MajC_W.png");
                break;
            case "img/ROW/MinA_M.png":
                img = require("../img/ROW/MinA_M.png");
                break;
            case "img/ROW/MinA_W.png":
                img = require("../img/ROW/MinA_W.png");
                break;
            case "img/ROW/MinC_M.png":
                img = require("../img/ROW/MinC_M.png");
                break;
            case "img/ROW/PA_M_2.png":
                img = require("../img/ROW/PA_M_2.png");
                break;
            case "img/ROW/PA_M_3.png":
                img = require("../img/ROW/PA_M_3.png");
                break;
            case "img/ROW/PA_M_4.png":
                img = require("../img/ROW/PA_M_4.png");
                break;
            case "img/ROW/PA_M_6.png":
                img = require("../img/ROW/PA_M_6.png");
                break;
            case "img/ROW/PA_W_4.png":
                img = require("../img/ROW/PA_W_4.png");
                break;
            case "img/ROW/PA_W_6.png":
                img = require("../img/ROW/PA_W_6.png");
                break;
       }
        popupContent = L.Util.template('<div class="popup-title"><p>Typical Cross Sections</p></div>' +
            '<div class="popup-content">' +
            '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> {FHWA}</p>' +
            '<p><span class="popup-content-bold">NJDOT Land Use:</span> {LandUse}</p>' +
            '<p><span class="popup-content-bold">Capacity:</span> {Capacity}</p>' +
            '<a href="'+img+'" rel="noopener" target="_blank">Click Here for a ROW Cross-Section Diagram</a>' +
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
            popupContent = L.Util.template('<div class="popup-title"><p>2015 CMP Planning Corridor</p></div><div class="popup-content"><p><span class="popup-content-bold">Corridor:</span> {CMP_ID}{SUB_ID}, {SUBNAME}</p><a href="{DETAILS}" class="popup-content-bold" rel="noopener" target="_blank">Click Here for Details</a></div>', props);
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
            if (props.ROW != 0){
                popupContent = L.Util.template('<div class="popup-title"><p>Minimum Recommended Right-of-Way</p></div><div class="popup-content">' +
                    '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> {FHWA}</p>' +
                    '<p><span class="popup-content-bold">NJDOT Urban Area:</span> {LandUse}</p>' +
                    '<p><span class="popup-content-bold">Recommended ROW Width:</span> {ROW} ft</p>' +
                    '<p><span class="popup-content-bold">Number of Travel Lanes:</span> {TravelLanes}</p>' +
                    '<p><span class="popup-content-bold">Capacity: </span>{Capacity}</p>' +
                    '<p><span class="popup-content-bold">Width of Center Median or Turning Lane:</span> {Median} ft</p>' +
                    '<p><span class="popup-content-bold">Width of Travel Lane:</span> {TravLane_W} ft</p>' +
                    '<p><span class="popup-content-bold">Bike Lane Width (Shoulder):</span> {BicLan_Sho} ft</p>' +
                    '<p><span class="popup-content-bold">Parking Lane Width:</span> {PLane_Sho} ft</p>' +
                    '<p><span class="popup-content-bold">Sidewalk Buffer Width:</span> {Sidewa_Buf} ft</p>' +
                    '<p><span class="popup-content-bold">Sidewalk Width:</span> {Sidewalk} ft</p>', props);
            }
            else{
                popupContent = L.Util.template('<div class="popup-title"><p>Minimum Recommended Right-of-Way</p></div><div class="popup-content">' +
                    '<p><span class="popup-content-bold">FHWA Highway Functional Class:</span> {FHWA}</p>' +
                    '<p><span class="popup-content-bold">NJDOT Urban Area:</span> {LandUse}</p>' +
                    '<p><span class="popup-content-bold">Recommended ROW Width:</span> Ramp</p>' +
                    '<p><span class="popup-content-bold">Number of Travel Lanes:</span> {TravelLanes}</p>' +
                    '<p><span class="popup-content-bold">Capacity: </span>{Capacity}</p>', props);

            }
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