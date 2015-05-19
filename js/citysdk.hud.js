/**
* CitySDK module for US Housing and Urban Development
* 
* Part of the US Census CitySDK project: https://github.com/uscensusbureau/citysdk
*/

//Attach a new module object to the CitySDK prototype.
//It is advised to keep the filenames and module property names the same
CitySDK.prototype.modules.hud = new HUDModule();

//Module object definition. Every module should have an "enabled" property and an "enable"  function.
function HUDModule() {
  this.enabled = true;
};

HUDModule.prototype.hud_data = {
  "FHA Insurance": "http://services.arcgis.com/VTyQ9soqVukalItT/arcgis/rest/services/FHA_Insurance_in_Force_by_Tract/FeatureServer/0"
}

/**
* Query the HUD API
*
* Based on http://resources.arcgis.com/en/help/arcgis-rest-api/index.html#/Query_Feature_Service_Layer/02r3000000r1000000/
* 
* spatial filters can include {lat: , lng: }, {extent: [west,south,east,north]}, {geometry: esriPolygon}
* where filters are based on the service description
* 
* @param {object} parameters The JSON object of the request
* @param {function} callback A callback function which will recieve the query response
*/
HUDModule.prototype.APIRequest = function(parameters, callback) {
  parameters.url = this.hud_data[parameters.source];

  var arcgis = sdk.modules.arcgis;

  arcgis.APIRequest(parameters, function(response) {
    callback(response);
  });

  return;
};  
