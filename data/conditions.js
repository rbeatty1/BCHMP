var trafficSafety15 = {
  "currentVersion" : 10.51, 
  "id" : 0, 
  "name" : "2015 Traffic Safety", 
  "type" : "Feature Layer", 
  "serviceItemId" : "31fd73dc7efb4506845fce06c8f84a8e", 
  "displayField" : "TransScore", 
  "description" : "", 
  "copyrightText" : "", 
  "defaultVisibility" : false, 
  "editingInfo" : {
    "lastEditDate" : 1507572660619
  }, 
  "relationships" : [], 
  "isDataVersioned" : false, 
  "supportsAppend" : true, 
  "supportsCalculate" : true, 
  "supportsTruncate" : false, 
  "supportsAttachmentsByUploadId" : true, 
  "supportsAttachmentsResizing" : true, 
  "supportsRollbackOnFailureParameter" : true, 
  "supportsStatistics" : true, 
  "supportsAdvancedQueries" : true, 
  "supportsValidateSql" : true, 
  "supportsCoordinatesQuantization" : true, 
  "supportsApplyEditsWithGlobalIds" : false, 
  "supportsMultiScaleGeometry" : true, 
  "hasGeometryProperties" : true, 
  "geometryProperties" : 
  {
    "shapeLengthFieldName" : "Shape__Length", 
    "units" : "esriFeet"
  }, 
  "advancedQueryCapabilities" : {
    "supportsPagination" : true, 
    "supportsPaginationOnAggregatedQueries" : true, 
    "supportsQueryRelatedPagination" : true, 
    "supportsQueryWithDistance" : true, 
    "supportsReturningQueryExtent" : true, 
    "supportsStatistics" : true, 
    "supportsOrderBy" : true, 
    "supportsDistinct" : true, 
    "supportsQueryWithResultType" : true, 
    "supportsSqlExpression" : true, 
    "supportsAdvancedQueryRelated" : true, 
    "supportsCountDistinct" : true, 
    "supportsReturningGeometryCentroid" : false, 
    "supportsReturningGeometryProperties" : true, 
    "supportsQueryWithDatumTransformation" : true, 
    "supportsHavingClause" : true, 
    "supportsOutFieldSQLExpression" : true
  }, 
  "useStandardizedQueries" : true, 
  "geometryType" : "esriGeometryPolyline", 
  "minScale" : 0, 
  "maxScale" : 0, 
  "extent" : {
    "xmin" : 340160.65614041314, 
    "ymin" : 263018.25010757148, 
    "xmax" : 523428.99990483, 
    "ymax" : 491451.28110148758, 
    "spatialReference" : {
      "wkt" : "PROJCS[\"NAD83_New_York_East_ftUS\",GEOGCS[\"GCS_North_American_1983\",DATUM[\"D_North_American_1983\",SPHEROID[\"GRS_1980\",6378137.0,298.257222101]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"false_easting\",492125.0],PARAMETER[\"false_northing\",0.0],PARAMETER[\"central_meridian\",-74.5],PARAMETER[\"scale_factor\",0.9999],PARAMETER[\"latitude_of_origin\",38.83333333333334],UNIT[\"Foot_US\",0.3048006096012192]]"
    }
  }, 
  "drawingInfo":{"renderer":{"type":"classBreaks","field":"F2xCrash_1","classificationMethod":"esriClassifyManual","minValue":0,"classBreakInfos":[{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[56,168,0,255],"width":1},"classMaxValue":0.99999990000000005,"label":"0.00x-0.99x","description":""},{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[255,255,0,255],"width":1.5},"classMaxValue":1.9999998999999999,"label":"1.00x-1.99x","description":""},{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[255,0,0,255],"width":2},"classMaxValue":145.24314384236766,"label":"2.00x and greater","description":""}]},"transparency":0,"labelingInfo":null}, 
  "allowGeometryUpdates" : true, 
  "hasAttachments" : false, 
  "htmlPopupType" : "esriServerHTMLPopupTypeAsHTMLText", 
  "hasM" : false, 
  "hasZ" : false, 
  "objectIdField" : "OBJECTID", 
  "globalIdField" : "", 
  "typeIdField" : "", 
  "fields" : [
    {
      "name" : "OBJECTID", 
      "type" : "esriFieldTypeOID", 
      "alias" : "OBJECTID", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : false, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "ModelID", 
      "type" : "esriFieldTypeInteger", 
      "alias" : "ModelID", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Base_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Base_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "LRP_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "LRP_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "MPlan_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "MPlan_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TransScore", 
      "type" : "esriFieldTypeString", 
      "alias" : "TransScore", 
      "sqlType" : "sqlTypeOther", 
      "length" : 20, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TopCMP", 
      "type" : "esriFieldTypeSmallInteger", 
      "alias" : "TopCMP", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CR_Add", 
      "type" : "esriFieldTypeString", 
      "alias" : "CR_Add", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP1", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP2", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP3", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP4", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NHS", 
      "type" : "esriFieldTypeString", 
      "alias" : "NHS", 
      "sqlType" : "sqlTypeOther", 
      "length" : 50, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "InterConnS", 
      "type" : "esriFieldTypeString", 
      "alias" : "InterConnS", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TrainStati", 
      "type" : "esriFieldTypeString", 
      "alias" : "TrainStati", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NJTBusServ", 
      "type" : "esriFieldTypeSmallInteger", 
      "alias" : "NJTBusServ", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "ScenicBy", 
      "type" : "esriFieldTypeString", 
      "alias" : "ScenicBy", 
      "sqlType" : "sqlTypeOther", 
      "length" : 2, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat1", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat2", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat3", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat4", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat5", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat5", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_1", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_2", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_3", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_4", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "EvacRt", 
      "type" : "esriFieldTypeString", 
      "alias" : "EvacRt", 
      "sqlType" : "sqlTypeOther", 
      "length" : 254, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "DetourRt", 
      "type" : "esriFieldTypeString", 
      "alias" : "DetourRt", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "HSIP", 
      "type" : "esriFieldTypeString", 
      "alias" : "HSIP", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NJDOT_FC", 
      "type" : "esriFieldTypeString", 
      "alias" : "NJDOT_FC", 
      "sqlType" : "sqlTypeOther", 
      "length" : 30, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "JURIS_Corr", 
      "type" : "esriFieldTypeString", 
      "alias" : "JURIS_Corr", 
      "sqlType" : "sqlTypeOther", 
      "length" : 30, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CR_Num", 
      "type" : "esriFieldTypeInteger", 
      "alias" : "CR_Num", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CRASHRATE", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "CrashRate", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Rate", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Rate", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "F2xCrash_1", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "F2xCrash_1", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Shape__Length", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Shape__Length", 
      "sqlType" : "sqlTypeDouble", 
      "nullable" : true, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }
  ], 
  "indexes" : [
    {
      "name" : "FDO_OBJECTID", 
      "fields" : "OBJECTID", 
      "isAscending" : true, 
      "isUnique" : true, 
      "description" : ""
    }, 
    {
      "name" : "FDO_SHAPE", 
      "fields" : "SHAPE", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }, 
    {
      "name" : "Shape__Length_Index", 
      "fields" : "Shape__Length", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }
  ], 
  "types" : [], 
  "templates" : [
    {
      "name" : "2015 Traffic Safety", 
      "description" : "", 
      "drawingTool" : "esriFeatureEditToolLine", 
      "prototype" : {
        "attributes" : {
          "F2xCrash_1" : null, 
          "ModelID" : null, 
          "Base_VC" : null, 
          "LRP_VC" : null, 
          "MPlan_VC" : null, 
          "TransScore" : null, 
          "TopCMP" : null, 
          "CR_Add" : null, 
          "CMP1" : null, 
          "CMP2" : null, 
          "CMP3" : null, 
          "CMP4" : null, 
          "NHS" : null, 
          "InterConnS" : null, 
          "TrainStati" : null, 
          "NJTBusServ" : null, 
          "ScenicBy" : null, 
          "Strat1" : null, 
          "Strat2" : null, 
          "Strat3" : null, 
          "Strat4" : null, 
          "Strat5" : null, 
          "CMP_1" : null, 
          "CMP_2" : null, 
          "CMP_3" : null, 
          "CMP_4" : null, 
          "EvacRt" : null, 
          "DetourRt" : null, 
          "HSIP" : null, 
          "NJDOT_FC" : null, 
          "JURIS_Corr" : null, 
          "CR_Num" : null, 
          "CRASHRATE" : null, 
          "Rate" : null
        }
      }
    }
  ], 
  "supportedQueryFormats" : "JSON, geoJSON", 
  "hasStaticData" : false, 
  "maxRecordCount" : 10000, 
  "standardMaxRecordCount" : 4000, 
  "tileMaxRecordCount" : 4000, 
  "maxRecordCountFactor" : 1, 
  "capabilities" : "Query"
}

var trafficCongestion13 = {
  "currentVersion" : 10.51, 
  "id" : 1, 
  "name" : "2013 Traffic Congestion", 
  "type" : "Feature Layer", 
  "serviceItemId" : "31fd73dc7efb4506845fce06c8f84a8e", 
  "displayField" : "TransScore", 
  "description" : "", 
  "copyrightText" : "", 
  "defaultVisibility" : false, 
  "editingInfo" : {
    "lastEditDate" : 1507572657646
  }, 
  "relationships" : [], 
  "isDataVersioned" : false, 
  "supportsAppend" : true, 
  "supportsCalculate" : true, 
  "supportsTruncate" : false, 
  "supportsAttachmentsByUploadId" : true, 
  "supportsAttachmentsResizing" : true, 
  "supportsRollbackOnFailureParameter" : true, 
  "supportsStatistics" : true, 
  "supportsAdvancedQueries" : true, 
  "supportsValidateSql" : true, 
  "supportsCoordinatesQuantization" : true, 
  "supportsApplyEditsWithGlobalIds" : false, 
  "supportsMultiScaleGeometry" : true, 
  "hasGeometryProperties" : true, 
  "geometryProperties" : 
  {
    "shapeLengthFieldName" : "Shape__Length", 
    "units" : "esriFeet"
  }, 
  "advancedQueryCapabilities" : {
    "supportsPagination" : true, 
    "supportsPaginationOnAggregatedQueries" : true, 
    "supportsQueryRelatedPagination" : true, 
    "supportsQueryWithDistance" : true, 
    "supportsReturningQueryExtent" : true, 
    "supportsStatistics" : true, 
    "supportsOrderBy" : true, 
    "supportsDistinct" : true, 
    "supportsQueryWithResultType" : true, 
    "supportsSqlExpression" : true, 
    "supportsAdvancedQueryRelated" : true, 
    "supportsCountDistinct" : true, 
    "supportsReturningGeometryCentroid" : false, 
    "supportsReturningGeometryProperties" : true, 
    "supportsQueryWithDatumTransformation" : true, 
    "supportsHavingClause" : true, 
    "supportsOutFieldSQLExpression" : true
  }, 
  "useStandardizedQueries" : true, 
  "geometryType" : "esriGeometryPolyline", 
  "minScale" : 0, 
  "maxScale" : 0, 
  "extent" : {
    "xmin" : 340160.65614041314, 
    "ymin" : 263018.25010757148, 
    "xmax" : 523428.99990483, 
    "ymax" : 491451.28110148758, 
    "spatialReference" : {
      "wkt" : "PROJCS[\"NAD83_New_York_East_ftUS\",GEOGCS[\"GCS_North_American_1983\",DATUM[\"D_North_American_1983\",SPHEROID[\"GRS_1980\",6378137.0,298.257222101]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"false_easting\",492125.0],PARAMETER[\"false_northing\",0.0],PARAMETER[\"central_meridian\",-74.5],PARAMETER[\"scale_factor\",0.9999],PARAMETER[\"latitude_of_origin\",38.83333333333334],UNIT[\"Foot_US\",0.3048006096012192]]"
    }
  }, 
  "drawingInfo":{"renderer":{"type":"classBreaks","field":"Base_VC","classificationMethod":"esriClassifyManual","minValue":0,"classBreakInfos":[{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[204,204,204,255],"width":1},"classMaxValue":0.84999899999999995,"label":"0.00 - 0.84","description":""},{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[255,170,0,255],"width":2},"classMaxValue":0.99999899999999997,"label":"0.85 - 0.99","description":""},{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[255,0,0,255],"width":2},"classMaxValue":1.4290491145799999,"label":"1.00 and greater","description":""}]},"transparency":0,"labelingInfo":null}, 
  "allowGeometryUpdates" : true, 
  "hasAttachments" : false, 
  "htmlPopupType" : "esriServerHTMLPopupTypeAsHTMLText", 
  "hasM" : false, 
  "hasZ" : false, 
  "objectIdField" : "OBJECTID", 
  "globalIdField" : "", 
  "typeIdField" : "", 
  "fields" : [
    {
      "name" : "OBJECTID", 
      "type" : "esriFieldTypeOID", 
      "alias" : "OBJECTID", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : false, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "ModelID", 
      "type" : "esriFieldTypeInteger", 
      "alias" : "ModelID", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Base_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Base_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "LRP_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "LRP_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "MPlan_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "MPlan_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TransScore", 
      "type" : "esriFieldTypeString", 
      "alias" : "TransScore", 
      "sqlType" : "sqlTypeOther", 
      "length" : 20, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TopCMP", 
      "type" : "esriFieldTypeSmallInteger", 
      "alias" : "TopCMP", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CR_Add", 
      "type" : "esriFieldTypeString", 
      "alias" : "CR_Add", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP1", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP2", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP3", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP4", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NHS", 
      "type" : "esriFieldTypeString", 
      "alias" : "NHS", 
      "sqlType" : "sqlTypeOther", 
      "length" : 50, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "InterConnS", 
      "type" : "esriFieldTypeString", 
      "alias" : "InterConnS", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TrainStati", 
      "type" : "esriFieldTypeString", 
      "alias" : "TrainStati", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NJTBusServ", 
      "type" : "esriFieldTypeSmallInteger", 
      "alias" : "NJTBusServ", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "ScenicBy", 
      "type" : "esriFieldTypeString", 
      "alias" : "ScenicBy", 
      "sqlType" : "sqlTypeOther", 
      "length" : 2, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat1", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat2", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat3", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat4", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat5", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat5", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_1", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_2", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_3", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_4", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "EvacRt", 
      "type" : "esriFieldTypeString", 
      "alias" : "EvacRt", 
      "sqlType" : "sqlTypeOther", 
      "length" : 254, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "DetourRt", 
      "type" : "esriFieldTypeString", 
      "alias" : "DetourRt", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "HSIP", 
      "type" : "esriFieldTypeString", 
      "alias" : "HSIP", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NJDOT_FC", 
      "type" : "esriFieldTypeString", 
      "alias" : "NJDOT_FC", 
      "sqlType" : "sqlTypeOther", 
      "length" : 30, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "JURIS_Corr", 
      "type" : "esriFieldTypeString", 
      "alias" : "JURIS_Corr", 
      "sqlType" : "sqlTypeOther", 
      "length" : 30, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CR_Num", 
      "type" : "esriFieldTypeInteger", 
      "alias" : "CR_Num", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CRASHRATE", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "CrashRate", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Rate", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Rate", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "F2xCrash_1", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "F2xCrash_1", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Shape__Length", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Shape__Length", 
      "sqlType" : "sqlTypeDouble", 
      "nullable" : true, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }
  ], 
  "indexes" : [
    {
      "name" : "FDO_OBJECTID", 
      "fields" : "OBJECTID", 
      "isAscending" : true, 
      "isUnique" : true, 
      "description" : ""
    }, 
    {
      "name" : "FDO_SHAPE", 
      "fields" : "SHAPE", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }, 
    {
      "name" : "Shape__Length_Index", 
      "fields" : "Shape__Length", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }
  ], 
  "types" : [], 
  "templates" : [
    {
      "name" : "2013 Traffic Congestion", 
      "description" : "", 
      "drawingTool" : "esriFeatureEditToolLine", 
      "prototype" : {
        "attributes" : {
          "F2xCrash_1" : null, 
          "ModelID" : null, 
          "Base_VC" : null, 
          "LRP_VC" : null, 
          "MPlan_VC" : null, 
          "TransScore" : null, 
          "TopCMP" : null, 
          "CR_Add" : null, 
          "CMP1" : null, 
          "CMP2" : null, 
          "CMP3" : null, 
          "CMP4" : null, 
          "NHS" : null, 
          "InterConnS" : null, 
          "TrainStati" : null, 
          "NJTBusServ" : null, 
          "ScenicBy" : null, 
          "Strat1" : null, 
          "Strat2" : null, 
          "Strat3" : null, 
          "Strat4" : null, 
          "Strat5" : null, 
          "CMP_1" : null, 
          "CMP_2" : null, 
          "CMP_3" : null, 
          "CMP_4" : null, 
          "EvacRt" : null, 
          "DetourRt" : null, 
          "HSIP" : null, 
          "NJDOT_FC" : null, 
          "JURIS_Corr" : null, 
          "CR_Num" : null, 
          "CRASHRATE" : null, 
          "Rate" : null
        }
      }
    }
  ], 
  "supportedQueryFormats" : "JSON, geoJSON", 
  "hasStaticData" : false, 
  "maxRecordCount" : 10000, 
  "standardMaxRecordCount" : 4000, 
  "tileMaxRecordCount" : 4000, 
  "maxRecordCountFactor" : 1, 
  "capabilities" : "Query"
}

var lrpCongestion2040 = {
  "currentVersion" : 10.51, 
  "id" : 2, 
  "name" : "2040 Long-Range Plan Traffic Congestion", 
  "type" : "Feature Layer", 
  "serviceItemId" : "31fd73dc7efb4506845fce06c8f84a8e", 
  "displayField" : "TransScore", 
  "description" : "", 
  "copyrightText" : "", 
  "defaultVisibility" : false, 
  "editingInfo" : {
    "lastEditDate" : 1507572657646
  }, 
  "relationships" : [], 
  "isDataVersioned" : false, 
  "supportsAppend" : true, 
  "supportsCalculate" : true, 
  "supportsTruncate" : false, 
  "supportsAttachmentsByUploadId" : true, 
  "supportsAttachmentsResizing" : true, 
  "supportsRollbackOnFailureParameter" : true, 
  "supportsStatistics" : true, 
  "supportsAdvancedQueries" : true, 
  "supportsValidateSql" : true, 
  "supportsCoordinatesQuantization" : true, 
  "supportsApplyEditsWithGlobalIds" : false, 
  "supportsMultiScaleGeometry" : true, 
  "hasGeometryProperties" : true, 
  "geometryProperties" : 
  {
    "shapeLengthFieldName" : "Shape__Length", 
    "units" : "esriFeet"
  }, 
  "advancedQueryCapabilities" : {
    "supportsPagination" : true, 
    "supportsPaginationOnAggregatedQueries" : true, 
    "supportsQueryRelatedPagination" : true, 
    "supportsQueryWithDistance" : true, 
    "supportsReturningQueryExtent" : true, 
    "supportsStatistics" : true, 
    "supportsOrderBy" : true, 
    "supportsDistinct" : true, 
    "supportsQueryWithResultType" : true, 
    "supportsSqlExpression" : true, 
    "supportsAdvancedQueryRelated" : true, 
    "supportsCountDistinct" : true, 
    "supportsReturningGeometryCentroid" : false, 
    "supportsReturningGeometryProperties" : true, 
    "supportsQueryWithDatumTransformation" : true, 
    "supportsHavingClause" : true, 
    "supportsOutFieldSQLExpression" : true
  }, 
  "useStandardizedQueries" : true, 
  "geometryType" : "esriGeometryPolyline", 
  "minScale" : 0, 
  "maxScale" : 0, 
  "extent" : {
    "xmin" : 340160.65614041314, 
    "ymin" : 263018.25010757148, 
    "xmax" : 523428.99990483, 
    "ymax" : 491451.28110148758, 
    "spatialReference" : {
      "wkt" : "PROJCS[\"NAD83_New_York_East_ftUS\",GEOGCS[\"GCS_North_American_1983\",DATUM[\"D_North_American_1983\",SPHEROID[\"GRS_1980\",6378137.0,298.257222101]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"false_easting\",492125.0],PARAMETER[\"false_northing\",0.0],PARAMETER[\"central_meridian\",-74.5],PARAMETER[\"scale_factor\",0.9999],PARAMETER[\"latitude_of_origin\",38.83333333333334],UNIT[\"Foot_US\",0.3048006096012192]]"
    }
  }, 
  "drawingInfo":{"renderer":{"type":"classBreaks","field":"LRP_VC","classificationMethod":"esriClassifyManual","minValue":0,"classBreakInfos":[{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[204,204,204,255],"width":1},"classMaxValue":0.84999899999999995,"label":"0.00 - 0.84","description":""},{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[255,170,0,255],"width":2},"classMaxValue":0.99999899999999997,"label":"0.85 - 0.99","description":""},{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[255,0,0,255],"width":2},"classMaxValue":1.4290491145799999,"label":"1.00 and greater","description":""}]},"transparency":0,"labelingInfo":null}, 
  "allowGeometryUpdates" : true, 
  "hasAttachments" : false, 
  "htmlPopupType" : "esriServerHTMLPopupTypeAsHTMLText", 
  "hasM" : false, 
  "hasZ" : false, 
  "objectIdField" : "OBJECTID", 
  "globalIdField" : "", 
  "typeIdField" : "", 
  "fields" : [
    {
      "name" : "OBJECTID", 
      "type" : "esriFieldTypeOID", 
      "alias" : "OBJECTID", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : false, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "ModelID", 
      "type" : "esriFieldTypeInteger", 
      "alias" : "ModelID", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Base_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Base_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "LRP_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "LRP_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "MPlan_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "MPlan_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TransScore", 
      "type" : "esriFieldTypeString", 
      "alias" : "TransScore", 
      "sqlType" : "sqlTypeOther", 
      "length" : 20, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TopCMP", 
      "type" : "esriFieldTypeSmallInteger", 
      "alias" : "TopCMP", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CR_Add", 
      "type" : "esriFieldTypeString", 
      "alias" : "CR_Add", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP1", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP2", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP3", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP4", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NHS", 
      "type" : "esriFieldTypeString", 
      "alias" : "NHS", 
      "sqlType" : "sqlTypeOther", 
      "length" : 50, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "InterConnS", 
      "type" : "esriFieldTypeString", 
      "alias" : "InterConnS", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TrainStati", 
      "type" : "esriFieldTypeString", 
      "alias" : "TrainStati", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NJTBusServ", 
      "type" : "esriFieldTypeSmallInteger", 
      "alias" : "NJTBusServ", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "ScenicBy", 
      "type" : "esriFieldTypeString", 
      "alias" : "ScenicBy", 
      "sqlType" : "sqlTypeOther", 
      "length" : 2, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat1", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat2", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat3", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat4", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat5", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat5", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_1", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_2", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_3", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_4", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "EvacRt", 
      "type" : "esriFieldTypeString", 
      "alias" : "EvacRt", 
      "sqlType" : "sqlTypeOther", 
      "length" : 254, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "DetourRt", 
      "type" : "esriFieldTypeString", 
      "alias" : "DetourRt", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "HSIP", 
      "type" : "esriFieldTypeString", 
      "alias" : "HSIP", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NJDOT_FC", 
      "type" : "esriFieldTypeString", 
      "alias" : "NJDOT_FC", 
      "sqlType" : "sqlTypeOther", 
      "length" : 30, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "JURIS_Corr", 
      "type" : "esriFieldTypeString", 
      "alias" : "JURIS_Corr", 
      "sqlType" : "sqlTypeOther", 
      "length" : 30, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CR_Num", 
      "type" : "esriFieldTypeInteger", 
      "alias" : "CR_Num", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CRASHRATE", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "CrashRate", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Rate", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Rate", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "F2xCrash_1", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "F2xCrash_1", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Shape__Length", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Shape__Length", 
      "sqlType" : "sqlTypeDouble", 
      "nullable" : true, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }
  ], 
  "indexes" : [
    {
      "name" : "FDO_OBJECTID", 
      "fields" : "OBJECTID", 
      "isAscending" : true, 
      "isUnique" : true, 
      "description" : ""
    }, 
    {
      "name" : "FDO_SHAPE", 
      "fields" : "SHAPE", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }, 
    {
      "name" : "Shape__Length_Index", 
      "fields" : "Shape__Length", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }
  ], 
  "types" : [], 
  "templates" : [
    {
      "name" : "2040 Long-Range Plan Traffic Congestion", 
      "description" : "", 
      "drawingTool" : "esriFeatureEditToolLine", 
      "prototype" : {
        "attributes" : {
          "F2xCrash_1" : null, 
          "ModelID" : null, 
          "Base_VC" : null, 
          "LRP_VC" : null, 
          "MPlan_VC" : null, 
          "TransScore" : null, 
          "TopCMP" : null, 
          "CR_Add" : null, 
          "CMP1" : null, 
          "CMP2" : null, 
          "CMP3" : null, 
          "CMP4" : null, 
          "NHS" : null, 
          "InterConnS" : null, 
          "TrainStati" : null, 
          "NJTBusServ" : null, 
          "ScenicBy" : null, 
          "Strat1" : null, 
          "Strat2" : null, 
          "Strat3" : null, 
          "Strat4" : null, 
          "Strat5" : null, 
          "CMP_1" : null, 
          "CMP_2" : null, 
          "CMP_3" : null, 
          "CMP_4" : null, 
          "EvacRt" : null, 
          "DetourRt" : null, 
          "HSIP" : null, 
          "NJDOT_FC" : null, 
          "JURIS_Corr" : null, 
          "CR_Num" : null, 
          "CRASHRATE" : null, 
          "Rate" : null
        }
      }
    }
  ], 
  "supportedQueryFormats" : "JSON, geoJSON", 
  "hasStaticData" : false, 
  "maxRecordCount" : 10000, 
  "standardMaxRecordCount" : 4000, 
  "tileMaxRecordCount" : 4000, 
  "maxRecordCountFactor" : 1, 
  "capabilities" : "Query"
}

var masterPlanCongestion ={
  "currentVersion" : 10.51, 
  "id" : 3, 
  "name" : "Master Plan Traffic Congestion", 
  "type" : "Feature Layer", 
  "serviceItemId" : "31fd73dc7efb4506845fce06c8f84a8e", 
  "displayField" : "TransScore", 
  "description" : "", 
  "copyrightText" : "", 
  "defaultVisibility" : false, 
  "editingInfo" : {
    "lastEditDate" : 1507572657646
  }, 
  "relationships" : [], 
  "isDataVersioned" : false, 
  "supportsAppend" : true, 
  "supportsCalculate" : true, 
  "supportsTruncate" : false, 
  "supportsAttachmentsByUploadId" : true, 
  "supportsAttachmentsResizing" : true, 
  "supportsRollbackOnFailureParameter" : true, 
  "supportsStatistics" : true, 
  "supportsAdvancedQueries" : true, 
  "supportsValidateSql" : true, 
  "supportsCoordinatesQuantization" : true, 
  "supportsApplyEditsWithGlobalIds" : false, 
  "supportsMultiScaleGeometry" : true, 
  "hasGeometryProperties" : true, 
  "geometryProperties" : 
  {
    "shapeLengthFieldName" : "Shape__Length", 
    "units" : "esriFeet"
  }, 
  "advancedQueryCapabilities" : {
    "supportsPagination" : true, 
    "supportsPaginationOnAggregatedQueries" : true, 
    "supportsQueryRelatedPagination" : true, 
    "supportsQueryWithDistance" : true, 
    "supportsReturningQueryExtent" : true, 
    "supportsStatistics" : true, 
    "supportsOrderBy" : true, 
    "supportsDistinct" : true, 
    "supportsQueryWithResultType" : true, 
    "supportsSqlExpression" : true, 
    "supportsAdvancedQueryRelated" : true, 
    "supportsCountDistinct" : true, 
    "supportsReturningGeometryCentroid" : false, 
    "supportsReturningGeometryProperties" : true, 
    "supportsQueryWithDatumTransformation" : true, 
    "supportsHavingClause" : true, 
    "supportsOutFieldSQLExpression" : true
  }, 
  "useStandardizedQueries" : true, 
  "geometryType" : "esriGeometryPolyline", 
  "minScale" : 0, 
  "maxScale" : 0, 
  "extent" : {
    "xmin" : 340160.65614041314, 
    "ymin" : 263018.25010757148, 
    "xmax" : 523428.99990483, 
    "ymax" : 491451.28110148758, 
    "spatialReference" : {
      "wkt" : "PROJCS[\"NAD83_New_York_East_ftUS\",GEOGCS[\"GCS_North_American_1983\",DATUM[\"D_North_American_1983\",SPHEROID[\"GRS_1980\",6378137.0,298.257222101]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"false_easting\",492125.0],PARAMETER[\"false_northing\",0.0],PARAMETER[\"central_meridian\",-74.5],PARAMETER[\"scale_factor\",0.9999],PARAMETER[\"latitude_of_origin\",38.83333333333334],UNIT[\"Foot_US\",0.3048006096012192]]"
    }
  }, 
  "drawingInfo":{"renderer":{"type":"classBreaks","field":"MPlan_VC","classificationMethod":"esriClassifyManual","minValue":0,"classBreakInfos":[{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[204,204,204,255],"width":1},"classMaxValue":0.84999899999999995,"label":"0.00 - 0.84","description":""},{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[255,170,0,255],"width":2},"classMaxValue":0.99999899999999997,"label":"0.85 - 0.99","description":""},{"symbol":{"type":"esriSLS","style":"esriSLSSolid","color":[255,0,0,255],"width":2},"classMaxValue":1.4290491145799999,"label":"1.00 and greater","description":""}]},"transparency":0,"labelingInfo":null}, 
  "allowGeometryUpdates" : true, 
  "hasAttachments" : false, 
  "htmlPopupType" : "esriServerHTMLPopupTypeAsHTMLText", 
  "hasM" : false, 
  "hasZ" : false, 
  "objectIdField" : "OBJECTID", 
  "globalIdField" : "", 
  "typeIdField" : "", 
  "fields" : [
    {
      "name" : "OBJECTID", 
      "type" : "esriFieldTypeOID", 
      "alias" : "OBJECTID", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : false, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "ModelID", 
      "type" : "esriFieldTypeInteger", 
      "alias" : "ModelID", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Base_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Base_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "LRP_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "LRP_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "MPlan_VC", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "MPlan_VC", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TransScore", 
      "type" : "esriFieldTypeString", 
      "alias" : "TransScore", 
      "sqlType" : "sqlTypeOther", 
      "length" : 20, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TopCMP", 
      "type" : "esriFieldTypeSmallInteger", 
      "alias" : "TopCMP", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CR_Add", 
      "type" : "esriFieldTypeString", 
      "alias" : "CR_Add", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP1", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP2", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP3", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP4", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 5, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NHS", 
      "type" : "esriFieldTypeString", 
      "alias" : "NHS", 
      "sqlType" : "sqlTypeOther", 
      "length" : 50, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "InterConnS", 
      "type" : "esriFieldTypeString", 
      "alias" : "InterConnS", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TrainStati", 
      "type" : "esriFieldTypeString", 
      "alias" : "TrainStati", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NJTBusServ", 
      "type" : "esriFieldTypeSmallInteger", 
      "alias" : "NJTBusServ", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "ScenicBy", 
      "type" : "esriFieldTypeString", 
      "alias" : "ScenicBy", 
      "sqlType" : "sqlTypeOther", 
      "length" : 2, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat1", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat2", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat3", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat4", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Strat5", 
      "type" : "esriFieldTypeString", 
      "alias" : "Strat5", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_1", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_1", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_2", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_2", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_3", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_3", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CMP_4", 
      "type" : "esriFieldTypeString", 
      "alias" : "CMP_4", 
      "sqlType" : "sqlTypeOther", 
      "length" : 200, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "EvacRt", 
      "type" : "esriFieldTypeString", 
      "alias" : "EvacRt", 
      "sqlType" : "sqlTypeOther", 
      "length" : 254, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "DetourRt", 
      "type" : "esriFieldTypeString", 
      "alias" : "DetourRt", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "HSIP", 
      "type" : "esriFieldTypeString", 
      "alias" : "HSIP", 
      "sqlType" : "sqlTypeOther", 
      "length" : 1, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NJDOT_FC", 
      "type" : "esriFieldTypeString", 
      "alias" : "NJDOT_FC", 
      "sqlType" : "sqlTypeOther", 
      "length" : 30, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "JURIS_Corr", 
      "type" : "esriFieldTypeString", 
      "alias" : "JURIS_Corr", 
      "sqlType" : "sqlTypeOther", 
      "length" : 30, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CR_Num", 
      "type" : "esriFieldTypeInteger", 
      "alias" : "CR_Num", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CRASHRATE", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "CrashRate", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Rate", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Rate", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "F2xCrash_1", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "F2xCrash_1", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Shape__Length", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Shape__Length", 
      "sqlType" : "sqlTypeDouble", 
      "nullable" : true, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }
  ], 
  "indexes" : [
    {
      "name" : "FDO_OBJECTID", 
      "fields" : "OBJECTID", 
      "isAscending" : true, 
      "isUnique" : true, 
      "description" : ""
    }, 
    {
      "name" : "FDO_SHAPE", 
      "fields" : "SHAPE", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }, 
    {
      "name" : "Shape__Length_Index", 
      "fields" : "Shape__Length", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }
  ], 
  "types" : [], 
  "templates" : [
    {
      "name" : "2013 Traffic Congestion", 
      "description" : "", 
      "drawingTool" : "esriFeatureEditToolLine", 
      "prototype" : {
        "attributes" : {
          "F2xCrash_1" : null, 
          "ModelID" : null, 
          "Base_VC" : null, 
          "LRP_VC" : null, 
          "MPlan_VC" : null, 
          "TransScore" : null, 
          "TopCMP" : null, 
          "CR_Add" : null, 
          "CMP1" : null, 
          "CMP2" : null, 
          "CMP3" : null, 
          "CMP4" : null, 
          "NHS" : null, 
          "InterConnS" : null, 
          "TrainStati" : null, 
          "NJTBusServ" : null, 
          "ScenicBy" : null, 
          "Strat1" : null, 
          "Strat2" : null, 
          "Strat3" : null, 
          "Strat4" : null, 
          "Strat5" : null, 
          "CMP_1" : null, 
          "CMP_2" : null, 
          "CMP_3" : null, 
          "CMP_4" : null, 
          "EvacRt" : null, 
          "DetourRt" : null, 
          "HSIP" : null, 
          "NJDOT_FC" : null, 
          "JURIS_Corr" : null, 
          "CR_Num" : null, 
          "CRASHRATE" : null, 
          "Rate" : null
        }
      }
    }
  ], 
  "supportedQueryFormats" : "JSON, geoJSON", 
  "hasStaticData" : false, 
  "maxRecordCount" : 10000, 
  "standardMaxRecordCount" : 4000, 
  "tileMaxRecordCount" : 4000, 
  "maxRecordCountFactor" : 1, 
  "capabilities" : "Query"
}

var transitScore10 = {
  "currentVersion" : 10.51, 
  "id" : 4, 
  "name" : "2010 Transit Score", 
  "type" : "Feature Layer", 
  "serviceItemId" : "31fd73dc7efb4506845fce06c8f84a8e", 
  "displayField" : "STATE_NAME", 
  "description" : "This two-phase project defines a method to assess the appropriateness of various modes and intensities of transit service throughout the DVRPC region. Phase I consisted of a statistical evaluation and refinement of New Jersey Transit’s existing transit score method. This included a regression analysis to test the relationships between existing variables, additional variables, and transit mode share for the region, the State of New Jersey, and the combined area of the two. Based on the results of this evaluation, a refined transit score equation was derived for congruent use in both New Jersey and Pennsylvania. This DVRPC Transit Score Tool is as follows (all densities gross):Transit score = [0.41*(Population per acre)] +[0.09*(Jobs per acre)] +[0.74*(Zero car households per acre)]The DVRPC Transit Score Tool was then classified into five score category ranges (from‘low’ to ‘high’):Low: \u003c 0.6Marginal: 0.6 – 1.0Medium: 1.01 – 2.5Medium-High: 2.51 – 7.5High: \u003e 7.52010 Population source: US Census Bureau's 2010 Census2010 Employment source*: NETS, 2010, adjusted by DVRPC2010 Zero Car Household source: Modeling Department 2010-2040 estimates by TAZAcreage for TAZ's is total LAND area.*Note: Employment data for the Berks County TAZ's is an estimate based on DVRPC projections. Employment data for the remaining TAZ's comes from NETS data for 2010, which were then adjusted at the Board's approval.Source of TAZ boundaries: DVRPC", 
  "copyrightText" : "Recipients of DVRPC digital files are encouraged to credit DVRPC as the source of the data when producing maps, graphics, or other documents that utilize DVRPC files.", 
  "defaultVisibility" : false, 
  "editingInfo" : {
    "lastEditDate" : 1507572674020
  }, 
  "relationships" : [], 
  "isDataVersioned" : false, 
  "supportsAppend" : true, 
  "supportsCalculate" : true, 
  "supportsTruncate" : true, 
  "supportsAttachmentsByUploadId" : true, 
  "supportsAttachmentsResizing" : true, 
  "supportsRollbackOnFailureParameter" : true, 
  "supportsStatistics" : true, 
  "supportsAdvancedQueries" : true, 
  "supportsValidateSql" : true, 
  "supportsCoordinatesQuantization" : true, 
  "supportsApplyEditsWithGlobalIds" : false, 
  "supportsMultiScaleGeometry" : true, 
  "hasGeometryProperties" : true, 
  "geometryProperties" : 
  {
    "shapeAreaFieldName" : "Shape__Area", 
    "shapeLengthFieldName" : "Shape__Length", 
    "units" : "esriFeet"
  }, 
  "advancedQueryCapabilities" : {
    "supportsPagination" : true, 
    "supportsPaginationOnAggregatedQueries" : true, 
    "supportsQueryRelatedPagination" : true, 
    "supportsQueryWithDistance" : true, 
    "supportsReturningQueryExtent" : true, 
    "supportsStatistics" : true, 
    "supportsOrderBy" : true, 
    "supportsDistinct" : true, 
    "supportsQueryWithResultType" : true, 
    "supportsSqlExpression" : true, 
    "supportsAdvancedQueryRelated" : true, 
    "supportsCountDistinct" : true, 
    "supportsReturningGeometryCentroid" : true, 
    "supportsReturningGeometryProperties" : true, 
    "supportsQueryWithDatumTransformation" : true, 
    "supportsHavingClause" : true, 
    "supportsOutFieldSQLExpression" : true
  }, 
  "useStandardizedQueries" : true, 
  "geometryType" : "esriGeometryPolygon", 
  "minScale" : 0, 
  "maxScale" : 0, 
  "extent" : {
    "xmin" : 31373.821498215617, 
    "ymin" : 247654.24829951671, 
    "xmax" : 525029.83188819606, 
    "ymax" : 648865.504138952, 
    "spatialReference" : {
      "wkt" : "PROJCS[\"NAD83_New_York_East_ftUS\",GEOGCS[\"GCS_North_American_1983\",DATUM[\"D_North_American_1983\",SPHEROID[\"GRS_1980\",6378137.0,298.257222101]],PRIMEM[\"Greenwich\",0.0],UNIT[\"Degree\",0.0174532925199433]],PROJECTION[\"Transverse_Mercator\"],PARAMETER[\"false_easting\",492125.0],PARAMETER[\"false_northing\",0.0],PARAMETER[\"central_meridian\",-74.5],PARAMETER[\"scale_factor\",0.9999],PARAMETER[\"latitude_of_origin\",38.83333333333334],UNIT[\"Foot_US\",0.3048006096012192]]"
    }
  }, 
  "drawingInfo":{"renderer":{"type":"uniqueValue","field1":"TRANCAT10","field2":null,"field3":null,"defaultSymbol":null,"defaultLabel":null,"uniqueValueInfos":[{"symbol":{"type":"esriSFS","style":"esriSFSSolid","color":[255,255,255,255],"outline":{"type":"esriSLS","style":"esriSLSSolid","color":[204,204,204,255],"width":0.25}},"value":"Low","label":"Low (0.00 - 0.59)","description":""},{"symbol":{"type":"esriSFS","style":"esriSFSSolid","color":[187,224,108,255],"outline":{"type":"esriSLS","style":"esriSLSSolid","color":[204,204,204,255],"width":0.25}},"value":"Marginal","label":"Marginal (0.60 - 1.00)","description":""},{"symbol":{"type":"esriSFS","style":"esriSFSSolid","color":[143,189,108,255],"outline":{"type":"esriSLS","style":"esriSLSSolid","color":[204,204,204,255],"width":0.25}},"value":"Medium","label":"Medium (1.01 - 2.50)","description":""},{"symbol":{"type":"esriSFS","style":"esriSFSSolid","color":[115,150,107,255],"outline":{"type":"esriSLS","style":"esriSLSSolid","color":[204,204,204,255],"width":0.25}},"value":"Med-High","label":"Medium-High (2.51 - 7.50)","description":""},{"symbol":{"type":"esriSFS","style":"esriSFSSolid","color":[115,150,107,255],"outline":{"type":"esriSLS","style":"esriSLSSolid","color":[204,204,204,255],"width":0.25}},"value":"Medium-High","label":"Medium-High (2.51 - 7.50)","description":""},{"symbol":{"type":"esriSFS","style":"esriSFSSolid","color":[77,92,10,255],"outline":{"type":"esriSLS","style":"esriSLSSolid","color":[204,204,204,255],"width":0.25}},"value":"High","label":"High (greater than 7.50)","description":""}],"fieldDelimiter":","},"transparency":0,"labelingInfo":null}, 
  "allowGeometryUpdates" : true, 
  "hasAttachments" : false, 
  "htmlPopupType" : "esriServerHTMLPopupTypeAsHTMLText", 
  "hasM" : false, 
  "hasZ" : false, 
  "objectIdField" : "OBJECTID", 
  "globalIdField" : "", 
  "typeIdField" : "TRANCAT10", 
  "fields" : [
    {
      "name" : "OBJECTID", 
      "type" : "esriFieldTypeOID", 
      "alias" : "OBJECTID", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : false, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TAZ", 
      "type" : "esriFieldTypeInteger", 
      "alias" : "TAZ", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "STATE_NAME", 
      "type" : "esriFieldTypeString", 
      "alias" : "State", 
      "sqlType" : "sqlTypeOther", 
      "length" : 20, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "CO_NAME", 
      "type" : "esriFieldTypeString", 
      "alias" : "County", 
      "sqlType" : "sqlTypeOther", 
      "length" : 20, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "MUN_NAME", 
      "type" : "esriFieldTypeString", 
      "alias" : "Municipality", 
      "sqlType" : "sqlTypeOther", 
      "length" : 50, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "GIS_ACLAND", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Acres of Land", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "POP10", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Population, 2010", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "EMP10", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Employment, 2010", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "HHNOVEH", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Zero Vehicle Households, 2010", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "POPDEN", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Population Density, 2010", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "EMPDEN", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Employment Density, 2010", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NOVEHDEN", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Zero Car Household Density, 2010", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TRANSC10", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Transit Score, 2010", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TRANCAT10", 
      "type" : "esriFieldTypeString", 
      "alias" : "Transit Score Category, 2010", 
      "sqlType" : "sqlTypeOther", 
      "length" : 30, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "POP40", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Population, 2040", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "EMP40", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Employment, 2040", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "HHNOVEH40", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Zero Car Households, 2040", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "POPDEN40", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Population Density, 2040", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "EMPDEN40", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Employment Density, 2040", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "NOVEHDEN40", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Zero Car Household Density, 2040", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TRANSC40", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Transit Score, 2040", 
      "sqlType" : "sqlTypeOther", 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "TRANCAT40", 
      "type" : "esriFieldTypeString", 
      "alias" : "Transit Score Category, 2040", 
      "sqlType" : "sqlTypeOther", 
      "length" : 20, 
      "nullable" : true, 
      "editable" : true, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Shape__Area", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Shape__Area", 
      "sqlType" : "sqlTypeDouble", 
      "nullable" : true, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }, 
    {
      "name" : "Shape__Length", 
      "type" : "esriFieldTypeDouble", 
      "alias" : "Shape__Length", 
      "sqlType" : "sqlTypeDouble", 
      "nullable" : true, 
      "editable" : false, 
      "domain" : null, 
      "defaultValue" : null
    }
  ], 
  "indexes" : [
    {
      "name" : "FDO_OBJECTID", 
      "fields" : "OBJECTID", 
      "isAscending" : true, 
      "isUnique" : true, 
      "description" : ""
    }, 
    {
      "name" : "FDO_SHAPE", 
      "fields" : "SHAPE", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }, 
    {
      "name" : "Shape__Area_Index", 
      "fields" : "Shape__Area", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }, 
    {
      "name" : "Shape__Length_Index", 
      "fields" : "Shape__Length", 
      "isAscending" : true, 
      "isUnique" : false, 
      "description" : ""
    }
  ], 
  "types" : [
    {
      "id" : "Low", 
      "name" : "Low", 
      "domains" : 
      {
      }, 
      "templates" : [
        {
          "name" : "Low", 
          "description" : "", 
          "drawingTool" : "esriFeatureEditToolPolygon", 
          "prototype" : {
            "attributes" : {
              "TRANSC40" : null, 
              "TRANCAT40" : null, 
              "TAZ" : null, 
              "STATE_NAME" : null, 
              "CO_NAME" : null, 
              "MUN_NAME" : null, 
              "GIS_ACLAND" : null, 
              "POP10" : null, 
              "EMP10" : null, 
              "HHNOVEH" : null, 
              "POPDEN" : null, 
              "EMPDEN" : null, 
              "NOVEHDEN" : null, 
              "TRANSC10" : null, 
              "TRANCAT10" : "Low", 
              "POP40" : null, 
              "EMP40" : null, 
              "HHNOVEH40" : null, 
              "POPDEN40" : null, 
              "EMPDEN40" : null, 
              "NOVEHDEN40" : null
            }
          }
        }
      ]
    }, 
    {
      "id" : "Marginal", 
      "name" : "Marginal", 
      "domains" : 
      {
      }, 
      "templates" : [
        {
          "name" : "Marginal", 
          "description" : "", 
          "drawingTool" : "esriFeatureEditToolPolygon", 
          "prototype" : {
            "attributes" : {
              "TRANSC40" : null, 
              "TRANCAT40" : null, 
              "TAZ" : null, 
              "STATE_NAME" : null, 
              "CO_NAME" : null, 
              "MUN_NAME" : null, 
              "GIS_ACLAND" : null, 
              "POP10" : null, 
              "EMP10" : null, 
              "HHNOVEH" : null, 
              "POPDEN" : null, 
              "EMPDEN" : null, 
              "NOVEHDEN" : null, 
              "TRANSC10" : null, 
              "TRANCAT10" : "Marginal", 
              "POP40" : null, 
              "EMP40" : null, 
              "HHNOVEH40" : null, 
              "POPDEN40" : null, 
              "EMPDEN40" : null, 
              "NOVEHDEN40" : null
            }
          }
        }
      ]
    }, 
    {
      "id" : "Medium", 
      "name" : "Medium", 
      "domains" : 
      {
      }, 
      "templates" : [
        {
          "name" : "Medium", 
          "description" : "", 
          "drawingTool" : "esriFeatureEditToolPolygon", 
          "prototype" : {
            "attributes" : {
              "TRANSC40" : null, 
              "TRANCAT40" : null, 
              "TAZ" : null, 
              "STATE_NAME" : null, 
              "CO_NAME" : null, 
              "MUN_NAME" : null, 
              "GIS_ACLAND" : null, 
              "POP10" : null, 
              "EMP10" : null, 
              "HHNOVEH" : null, 
              "POPDEN" : null, 
              "EMPDEN" : null, 
              "NOVEHDEN" : null, 
              "TRANSC10" : null, 
              "TRANCAT10" : "Medium", 
              "POP40" : null, 
              "EMP40" : null, 
              "HHNOVEH40" : null, 
              "POPDEN40" : null, 
              "EMPDEN40" : null, 
              "NOVEHDEN40" : null
            }
          }
        }
      ]
    }, 
    {
      "id" : "Med-High", 
      "name" : "Med-High", 
      "domains" : 
      {
      }, 
      "templates" : [
        {
          "name" : "Med-High", 
          "description" : "", 
          "drawingTool" : "esriFeatureEditToolPolygon", 
          "prototype" : {
            "attributes" : {
              "TRANSC40" : null, 
              "TRANCAT40" : null, 
              "TAZ" : null, 
              "STATE_NAME" : null, 
              "CO_NAME" : null, 
              "MUN_NAME" : null, 
              "GIS_ACLAND" : null, 
              "POP10" : null, 
              "EMP10" : null, 
              "HHNOVEH" : null, 
              "POPDEN" : null, 
              "EMPDEN" : null, 
              "NOVEHDEN" : null, 
              "TRANSC10" : null, 
              "TRANCAT10" : "Med-High", 
              "POP40" : null, 
              "EMP40" : null, 
              "HHNOVEH40" : null, 
              "POPDEN40" : null, 
              "EMPDEN40" : null, 
              "NOVEHDEN40" : null
            }
          }
        }
      ]
    }, 
    {
      "id" : "Medium-High", 
      "name" : "Medium-High", 
      "domains" : 
      {
      }, 
      "templates" : [
        {
          "name" : "Medium-High", 
          "description" : "", 
          "drawingTool" : "esriFeatureEditToolPolygon", 
          "prototype" : {
            "attributes" : {
              "TRANSC40" : null, 
              "TRANCAT40" : null, 
              "TAZ" : null, 
              "STATE_NAME" : null, 
              "CO_NAME" : null, 
              "MUN_NAME" : null, 
              "GIS_ACLAND" : null, 
              "POP10" : null, 
              "EMP10" : null, 
              "HHNOVEH" : null, 
              "POPDEN" : null, 
              "EMPDEN" : null, 
              "NOVEHDEN" : null, 
              "TRANSC10" : null, 
              "TRANCAT10" : "Medium-High", 
              "POP40" : null, 
              "EMP40" : null, 
              "HHNOVEH40" : null, 
              "POPDEN40" : null, 
              "EMPDEN40" : null, 
              "NOVEHDEN40" : null
            }
          }
        }
      ]
    }, 
    {
      "id" : "High", 
      "name" : "High", 
      "domains" : 
      {
      }, 
      "templates" : [
        {
          "name" : "High", 
          "description" : "", 
          "drawingTool" : "esriFeatureEditToolPolygon", 
          "prototype" : {
            "attributes" : {
              "TRANSC40" : null, 
              "TRANCAT40" : null, 
              "TAZ" : null, 
              "STATE_NAME" : null, 
              "CO_NAME" : null, 
              "MUN_NAME" : null, 
              "GIS_ACLAND" : null, 
              "POP10" : null, 
              "EMP10" : null, 
              "HHNOVEH" : null, 
              "POPDEN" : null, 
              "EMPDEN" : null, 
              "NOVEHDEN" : null, 
              "TRANSC10" : null, 
              "TRANCAT10" : "High", 
              "POP40" : null, 
              "EMP40" : null, 
              "HHNOVEH40" : null, 
              "POPDEN40" : null, 
              "EMPDEN40" : null, 
              "NOVEHDEN40" : null
            }
          }
        }
      ]
    }
  ], 
  "templates" : [], 
  "supportedQueryFormats" : "JSON, geoJSON", 
  "hasStaticData" : false, 
  "maxRecordCount" : 10000, 
  "standardMaxRecordCount" : 4000, 
  "tileMaxRecordCount" : 4000, 
  "maxRecordCountFactor" : 1, 
  "capabilities" : "Query", 
  "definitionQuery" : "CO_NAME = 'Burlington'"
}

var cmpScore = 

var roadwayConnect10 =

var roadAdditionCandidates = 